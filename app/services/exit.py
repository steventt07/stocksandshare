import falcon
import base64
import sys
import psycopg2.extras
from datetime import datetime
from falcon.http_status import HTTPStatus
from app.queries import QUERY_INSERT_EXIT_TRADE, QUERY_UPDATE_TRADE, QUERY_INSERT_IMAGE

class ExitService:
    def __init__(self, service):
        print('Initializing Exit Service...')
        self.service = service

    def on_get(self, req, resp):
        print('HTTP GET: /exit')
        cursor = self.service.dbconnection.connection.cursor(cursor_factory=psycopg2.extras.DictCursor)

        resp.status = falcon.HTTP_200
        cursor.close()

    # todo: add optional trainingId parameter
    def on_post(self, req, resp):
        con = self.service.dbconnection.connection
        try:
            print('HTTP POST: /exit')
            cursor = con.cursor()
            print(req.media)
            base64_bytes = base64.b64decode(req.media['image'])
            cursor.execute(QUERY_INSERT_IMAGE, (
                req.media['image_name'], 
                req.media['image_type'], 
                req.media['symbol'], 
                req.media['username'],
                base64_bytes,
                datetime.now()
                )
            )
            image_id = cursor.fetchone()[0]

            cursor.execute(QUERY_INSERT_EXIT_TRADE, (
                image_id,
                req.media['exit_price'], 
                req.media['username'], 
                req.media['note'],
                datetime.now()
                )
            )

            exit_trade_id = cursor.fetchone()[0]

            cursor.execute(QUERY_UPDATE_TRADE, (exit_trade_id, req.media['trade_id']))

            con.commit()

            resp.status = falcon.HTTP_200

        except psycopg2.DatabaseError as e:
            if con:
                con.rollback()
            print ('Error %s' % e ) 
            sys.exit(1)
        finally: 
            if cursor:
                cursor.close()