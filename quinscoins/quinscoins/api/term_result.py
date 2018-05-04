"""Term Result."""
import flask
import quinscoins
import re


@quinscoins.app.route('/api/<string:term>/', methods=['GET'])
def term_result(term):
    """Returns the Desired Term from the Terminology Database."""
    term = term.lower()
    term = re.sub(r'[^a-zA-Z0-9\s]+', '', term)
    data_b = quinscoins.model.get_db()
    value = data_b.execute("SELECT * FROM Terms WHERE term = ?", [term])
    value = value.fetchone()
    context = {}
    result = ""
    if value:
        definition = value["definition"]
        category = value["category"]
        result = term + ": " + definition
    else:
        result = "Oops...that term isn't in our database yet!\nDo you think it should be? \
                 Send the term and its definition to QuinsCoins@gmail.com"
    context["result"] = result
    return flask.jsonify(**context)
