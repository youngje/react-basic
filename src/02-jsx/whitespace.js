/* eslint-disable react/no-array-index-key */
import ReactDOMServer from 'react-dom/server'

const whiteSpaceTest = [
  <div>Hello World</div>,

  <div>
    Hello World
  </div>,

  <div>
    Hello
    World
  </div>,

  <div>

    Hello World

  </div>,

  <div>

    Hello World

    test
  </div>,

  <div>
    {' Hello World!      '}
    {'test'}
  </div>
];

export default () => (
  <>
    {whiteSpaceTest.map((element, i) => <p key={i}>{ReactDOMServer.renderToStaticMarkup(element)}</p>)}
  </>
)
