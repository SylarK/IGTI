import React, { Component, Fragment } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      showUsers: false,
    };
  }
  async componentDidMount() {
    //Lugar bom para se colocar requisições http (só vai ser executado uma vez);
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    );

    const json = await res.json();

    this.setState({
      users: json.results,
    });
  }
  componentDidUpdate() {
    console.log('componentDidUpdate de App.js');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount de App.js');
  }
  render() {
    return (
      <Fragment>
        <div className="switch">
          <label>
            Mostrar usuários:
            <input type="checkbox" />
            <span className="lever"></span>
          </label>
        </div>
        <hr />
        <div>Users</div>
      </Fragment>
    );
  }
}
