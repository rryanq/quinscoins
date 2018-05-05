import React from 'react';

class Term_search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { base_url: '/api', full_url: '', result: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.getResult = this.getResult.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.getResult();
  }


  handleText(e) {
    e.preventDefault();
    this.setState({ full_url: `${this.state.base_url}/${e.target.value}/` });
  }


  getResult() {
    fetch(this.state.full_url, {
      credentials: 'same-origin',
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) =>
        response.json(),
      )
      .then((data) => {
        this.setState({ result: data.result })
      });
  }


  render() {
    return (
      <div className="box">
        <b><p>Search for a Coin Roll Hunting Term!</p></b>
        <form id="search_terms">
          <input type="text" placeholder="ex: CRH, ender" onChange={this.handleText} />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
        <b><p>{this.state.result}</p></b>
      </div>
    );
  }

}

export default Term_search;
