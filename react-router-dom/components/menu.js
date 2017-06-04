import React,{Component} from 'React';
//import store from '../redux/reducer/store';
import MenuItem from './MenuItem';
class MenuDemo extends React.Component{
  constructor(...args){
    super(...args);
    this.state={
      value:"menu"
    }
  }

  render(){
    //console.log('****$'+store.getState().type+'$$$$$$'+store.getState().id+'$$$$$'+store.getState().completed+'$$$$$');
    const arr = [10,5,22,78,69,545,20];
    const arrlist=[];
    arr.map(function(elem,index){
      arrlist.push(<MenuItem content={elem}/>);
    })
    const { children } = this.props;
    const { value } = this.state;
    return <ul>
      {children}
      {value}
      {arrlist}
    </ul>
  }
}

export default MenuDemo;
