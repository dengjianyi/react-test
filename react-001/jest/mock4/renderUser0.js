import renderUser from './renderUser';

import React, { Component, PropTypes } from 'react';
class ListCom extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    console.log("render*****************************");
    console.log(this.state.data,"*****************************");
    return (
      <div>
        <h2 id='container'></h2>
        <p></p>
      </div>
    );
  }
}

ListCom.PropTypes = {
  data: PropTypes.array
};

export default ListCom
