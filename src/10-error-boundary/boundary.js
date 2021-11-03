import ErrorBoundary from './ErrorBoundary';

const data = { some: { value: 'hello!!' } };

function BrokenComponent() {
  const { value } = data.some;

  return <h1>{value}</h1>;
}

export default () => (
  <>
    <h1>안녕하세요.</h1>
    <BrokenComponent />
  </>
)
