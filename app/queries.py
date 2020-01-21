
QUERY_CHECK_CONNECTION = """
    SELECT 1;
"""

QUERY_SELECT_TRADER = """
    SELECT chart_id, note, symbol, ENCODE(image,'base64') as base64, entrypoint, sellLimit, stopLimit
    FROM chart
    WHERE username = %s;
"""

QUERY_INSERT_CHART = """
    INSERT INTO chart(note, symbol, image, entrypoint, sellLimit, stopLimit, username) 
    VALUES (%s, %s, %s, %s, %s, %s ,%s);
"""