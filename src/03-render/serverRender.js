import ReactDOMServer from 'react-dom/server';
import App from '../defaultApp/App';

const ServerRender = () => (
  <>
    <h1>ReactDOMServer</h1>
    <h3>renderToString</h3>
    {ReactDOMServer.renderToString(<App />)}
    <p style={{ height: 10 }} />
    <h3>renderToStaticMarkup</h3>
    {ReactDOMServer.renderToStaticMarkup(<App />)}
  </>
)

export default ServerRender
