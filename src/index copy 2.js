import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Game extends React.Component {
  render() {
    const Components = {
      Children: Children,
      Photo: Photo
    };
    // this.update();
    return (
      <div>
        <Components.Children msg="传入的msg">
          xxxx
          <Components.Photo></Components.Photo>
        </Components.Children>
        <Clock></Clock>
      </div>
    )
  }
}

class Children extends React.Component {
  state = {
    counter: 0
  }
  componentDidMount() {
    this.setState({
      counter: 1
    });
    console.log('=================测试setState===============');
    console.log(this.state.counter);
    console.log('=================测试setState结束============');
    this.setState((pre, xxx) => {
      console.log(pre, xxx);
      return {
        counter: 2
      }
    });
    this.setState({counter: 3}, () => {
      console.log(this.state.counter);
    })
    setTimeout(() => {
      this.setState({
        counter: 4
      });
      console.log(this.state.counter);
    }, 0);
  }
  render() {
    // console.log(this.props.children)
    return (
      <div>
        <div>{this.props.children}</div>
        <div>{this.props.msg}</div>
        <div>{this.state.counter}</div>
      </div>
    )
  }
};

function Photo() {
  return <div>Photo</div>
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      msg: 'state.msg',
      name: '',
      selected: '1'
    }
  }
  update() {
    this.timeId = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }
  testClick() {
    console.log(this.state.msg);
  }
  handleInput(e) {
    this.setState({
      name: e.target.value
    })
  }
  handleSelect(e) {
    this.setState({
      name: e.target.value
    })
  }
  componentDidMount() {
    this.update();
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  render() {
    return (
      <div>
        <h1 onClick={() => this.testClick()}>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <input type='text' value={this.state.name} onChange={(e) => this.handleInput(e)}/>
        <div>{this.state.name}</div>
        <select value={this.state.name} onChange={(e) => this.handleSelect(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
