const userName = '여러분';
const number = 12;
const hello = <h1>Hello!</h1>;
const nameElement = <div>안녕하세요? {userName}</div>;
const Awesome = {
  Component: () => <div>Awesome!</div>
};
const helloWrapper = (
  <div>
    <div />

    {hello}

    {nameElement}

    <p>{number + 34}</p>

    <p>{Math.ceil(number)}</p>

    <p>{number % 2 === 0 ? '짝수' : '홀수'}</p>

    {/* <p>{() => 'abc'}</p> */}

    <Awesome.Component />

    <p>{'<script>alert(1);</script>'}</p>
  </div>
);

window.jsx = {
  hello,
  helloWrapper,
};

const welcomeTo = { name: '아무개', message: '반가워요~' };

const getGreeting = ({ name, message }) => (
  <div>{name}님 {message}!</div>
);

const explainOddOrEven = (num) => {
  let type;
  if (num % 2 === 0) {
    type = <strong>짝수</strong>;
  } else {
    type = <i>홀수</i>;
  }

  return <div>{num}: {type}입니다.</div>;
};

export default () => helloWrapper;
// export default () => getGreeting(welcomeTo);
// export default () => explainOddOrEven(3);
