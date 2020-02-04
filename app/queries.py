
QUERY_CHECK_CONNECTION = """
    SELECT 1;
"""

QUERY_SELECT_TRADER = """
    SELECT 
        chart_id, 
        note, 
        symbol, 
        ENCODE(image,'base64') as base64, 
        entry_point, 
        sell_limit, 
        stop_limit, 
        date_created, 
        trade_type
    FROM 
        chart
    WHERE username = %s
    ORDER BY
        chart_id DESC;
"""

QUERY_INSERT_CHART = """
    INSERT INTO chart(
        note, 
        symbol, 
        image, 
        entry_point, 
        sell_limit, 
        stop_limit, 
        username, 
        date_created, 
        trade_type) 
    VALUES (%s, %s, %s, %s, %s, %s ,%s, %s, %s);
"""

QUERY_INSERT_IMAGE = """
    INSERT INTO image(
        image_name, 
        image_type, 
        symbol, 
        username,
        image_bytes,  
        date_created)
    VALUES (%s, %s, %s, %s, %s, %s)
    RETURNING "image_id";
"""

QUERY_INSERT_WATCHLIST = """
    INSERT INTO watchlist(
        image_id, 
        symbol, 
        note,
        username, 
        date_created
    )
    VALUES (%s, %s, %s, %s, %s);
"""

QUERY_INSERT_ENTRY_TRADE = """
    INSERT INTO entry_trade(
        image_id,
        entry_price,
        sell_limit,
        stop_limit,
        note,
        username,
        date_created
    )
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    RETURNING "entry_trade_id";
"""

QUERY_INSERT_TRADE = """
    INSERT INTO trade(
        entry_trade_id,
        username,
        trade_type,
        symbol
    )
    VALUES (%s, %s, %s, %s);
"""

QUERY_INSERT_EXIT_TRADE = """
    INSERT INTO exit_trade(
        image_id,
        exit_price,
        username,
        note,
        date_created
    )
    VALUES (%s, %s, %s, %s, %s)
    RETURNING "exit_trade_id";
"""

QUERY_INSERT_TRADER = """
    INSERT INTO trader(
        username, 
        first_name, 
        last_name, 
        date_created)
    VALUES (%s, %s, %s, %s);
"""

QUERY_GET_TRADER = """
    SELECT 
        username,
        first_name,
        last_name,
        date_created
    FROM 
        trader
"""

QUERY_GET_WATCHLIST = """
    SELECT 
        watchlist.symbol,
        ENCODE(image.image_bytes,'base64') as base64,
        watchlist.note,
        watchlist.date_created
    FROM 
        watchlist
    INNER JOIN 
        image on image.image_id = watchlist.image_id
    WHERE 
        watchlist.username = %s
    ORDER BY watchlist.date_created DESC;

"""

QUERY_GET_TRADE = """
    SELECT 
        trade.symbol,
        trade.trade_type,
        ENCODE(image.image_bytes,'base64') as base64,
        ENCODE(image_1.image_bytes,'base64') as base64,
        entry_trade.entry_price,
        entry_trade.sell_limit,
        entry_trade.stop_limit,
        entry_trade.date_created as entry_date_created,
        entry_trade.note as entry_note,
        exit_trade.exit_price,
        exit_trade.date_created as exit_date_created,
        exit_trade.note as exit_note,
        trade.trade_id,
        trade.username
    FROM 
        trade
    INNER JOIN 
        entry_trade on entry_trade.entry_trade_id = trade.entry_trade_id
    INNER JOIN 
        image on image.image_id = entry_trade.image_id
    LEFT JOIN 
        exit_trade on exit_trade.exit_trade_id = trade.exit_trade_id
    LEFT JOIN 
        image as image_1 on image_1.image_id = exit_trade.image_id
    WHERE 
        trade.username = %s
    ORDER BY entry_trade.date_created DESC;

"""

QUERY_UPDATE_TRADE = """
    UPDATE trade
    SET 
        exit_trade_id = %s
    WHERE
        trade_id = %s;
"""