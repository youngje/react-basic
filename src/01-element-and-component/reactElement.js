import React from 'react';

const element = <div>Hello React!</div>;
const blueButton = (
  <button className="button button-blue">
    <b>
      OK!
    </b>
  </button>
)

function MyFirstComponent() {
  return <div>Hello React!</div>;
}

function MyFirstComponentWithoutJSX() {
  return React.createElement('div', null, 'Hello React! no jsx');
}

export default MyFirstComponent;
