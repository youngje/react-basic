/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react'

function Greeting(props) {
  return <div>안녕하세요~ <b>{props.name}</b>님</div>;
}

// TODO: change to arrow function
function Greeting2(props) {
  return <div>안녕하세요~ <b>{props.name}</b>님</div>;
}

class GreetingClassComponent extends Component {
  render() {
    return <div>안녕하세요~ <b>{this.props.name}</b>님</div>;
  }
}

export default () => <Greeting name="영제" />
