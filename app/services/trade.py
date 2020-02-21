import falcon
import base64
import sys
import psycopg2.extras
from datetime import datetime
from falcon.http_status import HTTPStatus
from app.queries import QUERY_INSERT_ENTRY_TRADE, QUERY_INSERT_TRADE,  QUERY_GET_TRADE, QUERY_INSERT_IMAGE

class TradeService:
    def __init__(self, service):
        print('Initializing Trade Service...')
        self.service = service

    def on_get(self, req, resp):
        print('HTTP GET: /trade')
        cursor = self.service.dbconnection.connection.cursor(cursor_factory=psycopg2.extras.DictCursor)
        cursor.execute(QUERY_GET_TRADE, (req.params['username'], ))
        response = []
        for record in cursor:
            response.append(
                {
                    'symbol': record[0],
                    'trade_type': record[1],
                    'entry_image': record[2],
                    'exit_image': record[3],
                    'entry_price': record[4],
                    'sell_limit': record[5],
                    'stop_limit': record[6],
                    'entry_date_created': str(record[7]),
                    'entry_note': record[8],
                    'exit_price': record[9],
                    'exit_date_created': str(record[10]),
                    'exit_note': record[11],
                    'trade_id': record[12],
                    'username': record[13]

                }
            )

        resp.status = falcon.HTTP_200
        resp.media = { 'trade': response}
        cursor.close()

    # todo: add optional trainingId parameter
    def on_post(self, req, resp):
        con = self.service.dbconnection.connection
        try:
            print('HTTP POST: /trade')
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
            print(image_id)

            cursor.execute(QUERY_INSERT_ENTRY_TRADE, (
                image_id,
                req.media['entry_price'], 
                req.media['sell_limit'], 
                req.media['stop_limit'], 
                req.media['note'],
                req.media['username'],
                datetime.now()
                )
            )

            entry_trade_id = cursor.fetchone()[0]
            print(entry_trade_id)

            cursor.execute(QUERY_INSERT_TRADE, (
                entry_trade_id,
                req.media['username'], 
                req.media['trade_type'], 
                req.media['symbol']
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