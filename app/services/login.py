import falcon
import base64
import sys
import psycopg2.extras
from datetime import datetime
from falcon.http_status import HTTPStatus
from app.queries import QUERY_INSERT_TRADER, QUERY_GET_TRADER

class LoginService:
    def __init__(self, service):
        print('Initializing Login Service...')
        self.service = service

    def on_get(self, req, resp):
        print('HTTP GET: /login')
        cursor = self.service.dbconnection.connection.cursor(cursor_factory=psycopg2.extras.DictCursor)
        cursor.execute(QUERY_GET_TRADER)
        response = []
        for record in cursor:
            response.append(
                {
                    'username': record[0],
                    'first_name': record[1],
                    'last_name': record[2],
                    'date_created': str(record[3])
                }
            )

        resp.status = falcon.HTTP_200
        resp.media = { 'trade': response}
        cursor.close()

    # todo: add optional trainingId parameter
    def on_post(self, req, resp):
        con = self.service.dbconnection.connection
        try:
            print('HTTP POST: /login')
            cursor = con.cursor()
            print(req.media)
            cursor.execute(QUERY_INSERT_TRADER, (
                req.media['username'], 
                req.media['first_name'], 
                req.media['last_name'],
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