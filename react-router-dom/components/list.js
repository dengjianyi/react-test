import React, {Component} from 'react';
import $ from 'jquery';
class ListDemo extends React.Component{
  constructor(...args){
    super(...args);
    this.state={
      arr:[]
    };
  }

  componentDidMount(fn){
    var _this=this;
    $.ajax({
        url:'../data/userlistdata.json',
        type:'GET',
        datatype:'json',
        success:function(data){
          //字符串转JSON，更改状态值
            _this.fn($.parseJSON(data));
        }
      })
  }

  fn(data){
    this.setState({arr: data});
  }

  render(){
    //获取状态值，渲染
    var result=[];
    for (var i = 0; i < this.state.arr.length; i++) {
      console.log(this.props.va);//获取属性值
      result.push(<li key={i}>{this.state.arr[i]['Name']}</li>);
      //result.push(<li key={i}>{this.state.arr[i]['Name']}</li>);
    }
    return <ul>
            {result}
           </ul>
  }

}

export default ListDemo;
