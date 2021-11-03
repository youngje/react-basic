/* eslint-disable no-constant-condition */
const elements = {
  hello: <h1>Hello!</h1>,
  bye: <h1>Good Bye!</h1>,
};

function getElementByType(type) {
  return elements[type];
}

const AOrDiv = true ? 'a' : 'div';

const even = <i>짝수</i>;
const odd = <b>홀수</b>;

function EvenOdd({ number }) {
  const isEven = number % 2 === 0;

  return (
    <div>
      {isEven ? even : odd}
    </div>
  );
}

export default () => getElementByType('hello');
// export default () => <AOrDiv>안녕?</AOrDiv>;
// export default () => <EvenOdd number={4} />;
