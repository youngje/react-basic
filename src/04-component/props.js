/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-curly-brace-presence */

const TestDefaultProp = ({ test }) => <div>{`${test}`}</div>;

const Greeting = ({ name, message = '반가워' }) => <div>{name} {message}</div>;

const StringLiteralTest = () => (
  <>
    <Greeting name={'<3'} />
    <Greeting name={'&lt;3'} />
    <Greeting name="<3" />
    <Greeting name="&lt;3" />
  </>
);

const SpreadProps = () => {
  const data = { name: '아무개', message: '환영해' }

  return (
    <>
      <Greeting name={data.name} message={data.message} />
      <Greeting {...data} />
      {/* TODO: props + spread  */}
      {/* TODO: spread + override partial data */}
    </>
  )
};

export default () => <TestDefaultProp test />;
// export default () => <StringLiteralTest />;
// export default () => <SpreadProps />;
