import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import MenuDemo from './components/menu';
import List from './components/list';

class App extends Component {
    render() {
        return (
            <div>
                <h1>我的路由</h1>
                <ul>
                    <li key="index"><Link to="/index">首页</Link></li>
                    <li key="users"><Link to="/users">用户页</Link></li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        )
    }
}


window.onload=function(){
  //uI菜单
  ReactDOM.render(
    <Router>
      <div>
        <div>88888888888</div>
        <Route path="/" component={App}></Route>
        <div>77777777777</div>
        <Route path="/index" component={List} ></Route>
        <Route path="/users" component={MenuDemo}></Route>
      </div>
    </Router>,
    document.getElementById('app')
  );
}
