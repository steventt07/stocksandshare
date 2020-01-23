
QUERY_CHECK_CONNECTION = """
    SELECT 1;
"""

QUERY_SELECT_TRADER = """
    SELECT chart_id, note, symbol, ENCODE(image,'base64') as base64, entry_point, sell_limit, stop_limit, date_created, trade_type
    FROM chart
    WHERE username = %s;
"""

QUERY_INSERT_CHART = """
    INSERT INTO chart(note, symbol, image, entry_point, sell_limit, stop_limit, username, date_created, trade_type) 
    VALUES (%s, %s, %s, %s, %s, %s ,%s, %s, %s);
"""