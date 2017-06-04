import React,{ Component } from 'React';

class MenuItem extends React.Component{
  constructor(...args){
    super(...args);
    this.state={
      display:'block'
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    this.setState({
      display:this.state.display=='block' ? 'none' : 'block'
    })
  }

  render(){
    return <li>
        <h2 onClick={this.onClick}>{this.props.content}</h2>
        <div style={{display:this.state.display}}>content...</div>
      </li>
  }
}

export default MenuItem
