import psycopg2
import sys

def readImage():
    try:
        fin = open("../public/sample.jpg", "rb")
        img = fin.read()
        print(img)
        return img

    except IOError as e:
        print ("Error %d: %s" % (e.args[0],e.args[1]))
        sys.exit(1)

    finally:
        if fin:
            fin.close()
try:
    con = psycopg2.connect(host='localhost',
                                               database='postgres',
                                               user='postgres',
                                               password='Northface12!')
    cur = con.cursor()
    data = readImage()
    binary = psycopg2.Binary(data)
    cur.execute("INSERT INTO chart(note, symbol, image) VALUES ('hi', 'sample', %s)", (binary,) )
    con.commit()
except psycopg2.DatabaseError as e:
    if con:
        con.rollback()
    print ('Error %s' % e ) 
    sys.exit(1)
finally: 
    if con:
        con.close()