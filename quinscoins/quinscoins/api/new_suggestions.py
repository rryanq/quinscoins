"""New Suggestions."""
import flask
import quinscoins
import re

@quinscoins.app.route('/api/new_suggestions/<string:suggestion>/', methods=['POST'])
def new_suggestions(suggestion):
    data_b = quinscoins.model.get_db()
    data_b.execute("INSERT INTO ")
    # FIXME: continue to work on this thing
    context = {}
    return flask.jsonify(**context)
