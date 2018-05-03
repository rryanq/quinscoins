"""Term Result."""
import flask
import quinscoins


@quinscoins.app.route('/api/<string:term>/', methods=['GET'])
def term_result(term):
    """Returns the Desired Term from the Terminology Database."""
    data_b = quinscoins.model.get_db()
    value = data_b.execute("SELECT * FROM Terms WHERE term = ?", [term])
    value = value.fetchone()
    context = {}
    if value:
        definition = value["definition"]
        category = value["category"]
        context["term"] = term
        context["definition"] = definition
        context["category"] = category
    return flask.jsonify(**context)
