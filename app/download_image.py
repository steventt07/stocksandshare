import psycopg2
import sys

con = psycopg2.connect(host='159.89.55.123',
                        database='steventran',
                        user='steventran',
                        password='Mangastream12!')
cur = con.cursor()
cur.execute("SELECT symbol, image from chart")
for row in cur:
    mypic = cur.fetchone()
    print((mypic[1]))
    open('img/amd.png','wb').write(mypic[1])