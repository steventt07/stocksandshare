import psycopg2
import sys

con = psycopg2.connect(host='localhost',
                                               database='postgres',
                                               user='postgres',
                                               password='Northface12!')
cur = con.cursor()
cur.execute("SELECT symbol, image from chart")
for row in cur:
    mypic = cur.fetchone()
    print((mypic[1]))
    open('img/amd.png','wb').write(mypic[1])