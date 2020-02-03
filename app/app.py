import falcon
import logging
from falcon.http_status import HTTPStatus
from app.util.db_connection import DbConnection
from app.services.trade import TradeService
from app.services.exit import ExitService
from app.services.watchlist import WatchlistService
from app.services.chart import ChartService
from app.services.login import LoginService


class Service:
    def __init__(self):
        print('Initializing Chart Service...')
        self.dbconnection = DbConnection('db_credentials.yaml')

def start_service():
    service = Service()
    chart_service = ChartService(service)
    trade_service = TradeService(service)
    watchlist_service = WatchlistService(service)
    exit_service = ExitService(service)
    login_service = LoginService(service)

    app = falcon.API(middleware=[HandleCORS()])
    app.add_route('/charts', chart_service)
    app.add_route('/trade', trade_service)
    app.add_route('/watchlist', watchlist_service)
    app.add_route('/exit', exit_service)
    app.add_route('/login', login_service)
    return app

class HandleCORS(object):
    def process_request(self, req, resp):
        resp.set_header('Access-Control-Allow-Origin', '*')
        resp.set_header('Access-Control-Allow-Methods', '*')
        resp.set_header('Access-Control-Allow-Headers', '*')
        resp.set_header('Access-Control-Max-Age', 1728000)  # 20 days
        if req.method == 'OPTIONS':
            raise HTTPStatus(falcon.HTTP_200, body='\n')

if __name__ != '__main__':
    gunicorn_logger = logging.getLogger('gunicorn.error')