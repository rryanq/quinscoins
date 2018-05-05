"""Term Result."""
import flask
import quinscoins
import re


@quinscoins.app.route('/api/<string:term>/', methods=['GET'])
def term_result(term):
    """Returns the Desired Term from the Terminology Database."""
    context = {}
    result = ""
    term = term.lower()
    term = re.sub(r'[^a-zA-Z0-9\s]+', '', term)
    term = term.strip()
    data_b = quinscoins.model.get_db()
    value = data_b.execute("SELECT * FROM Terms WHERE term = ?", [term])
    value = value.fetchone()
    # if searching database by exact term didn't return anything, try searching by nickname
    if not value:
        data_b = quinscoins.model.get_db()
        value = data_b.execute("SELECT * FROM Terms WHERE nickname = ?", [term])
        value = value.fetchone()
    # if searching by nickname doesn't return anything, try searching by acronym
    if not value:
        data_b = quinscoins.model.get_db()
        value = data_b.execute("SELECT * FROM Terms WHERE acronym = ?", [term])
        value = value.fetchone()
    # if we still don't have anything, conduct a more complicated search
    #FIXME: do one more query if we still don't have a value at this point
    # look through all definitions and split into words, try to find a matching word
    # return either one result using fetchone or return the whole list of results

    # even at this point, we might not have any matches for the search
    if value:
        word = value["term"]
        word = word.title()
        definition = value["definition"]
        acronym = value["acronym"]

        result = word
        if acronym != '':
            result = result + " (" + acronym.upper() + ")"
        result = result + ": " + definition
    else:
        result = "Oops...that term isn't in our database yet!\nDo you think it should be? \
                 Send the term and its definition to QuinsCoins@gmail.com"
    context["result"] = result
    return flask.jsonify(**context)
