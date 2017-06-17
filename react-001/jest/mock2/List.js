import React, { Component, PropTypes } from 'react';
import ListDataCom from './listData';

class ListCom extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  render () {
    return (
      <div>
        <ul>
          {
            ListDataCom.listData().map((ele, index) => {
              return ele.description
            })
          }
        </ul>
        <ul>
          {
            ListDataCom.treedata().map((ele, index) => {
              return ele.description
            })
          }
        </ul>
      </div>
    );
  }
}

ListCom.PropTypes = {
  data: PropTypes.array
};
export default ListCom
