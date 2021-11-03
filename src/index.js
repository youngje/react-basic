import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './defaultApp/App';
import TableOfContents, { ContentsRouter } from './TableOfContents';
import './index.css';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="table_contents">
          <Link to="/sitemap">Table of contents</Link>
        </nav>

        <Route path="/" exact component={App} />
        <Route path="/sitemap" component={TableOfContents} />
        <ContentsRouter />
      </div>
    </Router>
  )
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
