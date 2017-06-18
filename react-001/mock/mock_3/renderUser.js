import fetchUserInfo from './fetchUserInfo';
import fetchUserLevel from './fetchUserLevel';
import React, { Component, PropTypes } from 'react';
class ListCom extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data:'0'
    };
    this.onClick = this.onClick.bind(this);
  }

  //事件
  onClick () {
    Promise.all([
      fetchUserInfo({ uid:123 }),
      fetchUserLevel({ uid:123 })
    ])
    .then(([user, level]) => {
      const text = "昵称:" + user.nick + "等级:" + level;
      this.setState({
        data:text
      });
    })
    .catch(err => {
      alert(err)
    });

  }

  render () {
    return (
      <div>
        <h2 id='container'>{this.state.data}</h2>
        <p onClick={this.onClick}></p>
      </div>
    );
  }
}

ListCom.PropTypes = {
  data: PropTypes.array
};

export default ListCom
