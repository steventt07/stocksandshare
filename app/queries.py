
QUERY_CHECK_CONNECTION = """
    SELECT 1;
"""

QUERY_SELECT_ALL = """
    SELECT chart_id, note, symbol, ENCODE(image,'base64') as base64
    FROM chart;
"""

QUERY_INSERT_CHART = """
    INSERT INTO chart(note, symbol, image) 
    VALUES (%s, %s, %s);
"""