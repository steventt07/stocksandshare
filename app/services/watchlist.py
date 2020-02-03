import falcon
import base64
import sys
import psycopg2.extras
from datetime import datetime
from falcon.http_status import HTTPStatus
from app.queries import QUERY_INSERT_IMAGE, QUERY_INSERT_WATCHLIST, QUERY_GET_WATCHLIST

class WatchlistService:
    def __init__(self, service):
        print('Initializing Watchlist Service...')
        self.service = service

    def on_get(self, req, resp):
        print('HTTP GET: /watchlist')
        cursor = self.service.dbconnection.connection.cursor(cursor_factory=psycopg2.extras.DictCursor)
        if req.params['username'] == "steventt07":
            cursor.execute(QUERY_GET_WATCHLIST, ("steventt07", ))
        else:
            cursor.execute(QUERY_GET_WATCHLIST, ("cheten1234", ))
        response = []
        for record in cursor:
            response.append(
                {
                    'symbol': record[0],
                    'image_bytes': record[1],
                    'note': record[2],
                    'date_created': str(record[3])
                }

            )

        resp.status = falcon.HTTP_200
        resp.media = { 'watchlist': response}
        cursor.close()

    # todo: add optional trainingId parameter
    def on_post(self, req, resp):
        con = self.service.dbconnection.connection
        try:
            print('HTTP POST: /watchlist')
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

            cursor.execute(QUERY_INSERT_WATCHLIST, (
                image_id,
                req.media['symbol'], 
                req.media['note'],
                req.media['username'], 
                datetime.now()
                )
            )
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