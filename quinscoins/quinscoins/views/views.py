import flask
import quinscoins
import json

@quinscoins.app.route('/', methods=['GET'])
def show_index():
    """Show Index."""
    context = {}
    return flask.render_template("index.html", **context)

@quinscoins.app.route('/about/', methods=['GET'])
def show_about():
    """Show About."""
    context = {}
    return flask.render_template("about.html", **context)

@quinscoins.app.route('/gear/', methods=['GET'])
def show_gear():
    """Show Gear."""
    context = {}
    return flask.render_template("gear.html", **context)


@quinscoins.app.route('/terms/', methods=['GET'])
def show_terms():
    """Show Terms."""
    context = {}
    data_b = quinscoins.model.get_db()
    cur = data_b.execute('SELECT * from Terms WHERE category == "CRH" ORDER BY term')
    context['crh_terms'] = cur.fetchall()
    cur = data_b.execute('SELECT * from Terms WHERE category == "cents" ORDER BY term')
    context['cent_terms'] = cur.fetchall()
    cur = data_b.execute('SELECT * from Terms WHERE category == "nickels" ORDER BY term')
    context['nickel_terms'] = cur.fetchall()
    cur = data_b.execute('SELECT * from Terms WHERE category == "dimes" ORDER BY term')
    context['dime_terms'] = cur.fetchall()
    cur = data_b.execute('SELECT * from Terms WHERE category == "quarters" ORDER BY term')
    context['quarter_terms'] = cur.fetchall()
    cur = data_b.execute('SELECT * from Terms WHERE category == "halves" ORDER BY term')
    context['half_terms'] = cur.fetchall()
    cur = data_b.execute('SELECT * from Terms WHERE category == "dollars" ORDER BY term')
    context['dollar_terms'] = cur.fetchall()
    return flask.render_template("terms.html", **context)
