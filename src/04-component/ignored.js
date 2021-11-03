/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/self-closing-comp */

const ignoredChildren = (
  <>
    <div />

    <div></div>

    <div>{false}</div>

    <div>{null}</div>

    <div>{undefined}</div>

    <div>{true}</div>

    <div>{''}</div>

    <div>{0}</div>
  </>
);

const ConditionalChildren = () => {
  const showGreeting = false
  const list = ['하하', '호호']
  const hasList = list.length

  return (
    <>
      {showGreeting && <div>반가워요!</div>}
      {hasList && list.map(item => <div key={item}>{item}</div>)}
    </>
  )
};

export default () => ignoredChildren;
// export default ConditionalChildren;
