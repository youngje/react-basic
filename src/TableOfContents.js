import { Route, Link } from 'react-router-dom';
import Element from './01-element-and-component/reactElement';
import Component from './01-element-and-component/reactComponent';
import JSX from './02-jsx/jsx'
import Fragment from './02-jsx/fragment'
import WhiteSpace from './02-jsx/whitespace'
import Conditional from './02-jsx/conditional'
import Render from './03-render/render'
import Hydrate from './03-render/hydrate'
import ServerRender from './03-render/serverRender'
import Create from './04-component/create'
import Props from './04-component/props'
import Ignored from './04-component/ignored'
import List from './04-component/list'
import PreventDefault from './05-event-handling/preventDefault'
import State from './06-hooks/state'
import FunctionalSetState from './06-hooks/functionalSetState'
import LazyInitialState from './06-hooks/lazyInitialState'
import UseEffect from './06-hooks/effect'
import Clock from './06-hooks/clock'
import DataFetch from './06-hooks/fetch/dataFetch'
import CandyDispenser from './06-hooks/CandyDispenser'
import Dom from './07-refs/dom'
import Forward from './07-refs/forward'
import Portal from './08-portal/portal'
import WindowPortal from './08-portal/windowPortal'
import WithoutContext from './09-context/withoutContext'
import Context from './09-context/themeContext'
import Boundary from './10-error-boundary/boundary'
import Calculator from './example/calculator/index'
import Netflix from './example/netflix/App'
import Pokemon from './example/pokemon'

export default function TableOfContents() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">00. Home</Link>
          </li>
          <li>
            01. react Element & react Component
            <ul>
              <li><Link to="/reactElement/element">element</Link></li>
              <li><Link to="/reactElement/component">component</Link></li>
            </ul>
          </li>
          <li>
            02. jsx(react element)
            <ul>
              <li><Link to="/jsx/jsx">jsx</Link></li>
              <li><Link to="/jsx/fragment">fragment</Link></li>
              <li><Link to="/jsx/whitespace">whitespace</Link></li>
              <li><Link to="/jsx/conditional">conditional</Link></li>
            </ul>
          </li>
          <li>
            03. Render React Element
            <ul>
              <li><Link to="/render/render">render</Link></li>
              <li><Link to="/render/hydrate">hydrate</Link></li>
              <li><Link to="/render/serverRender">server render</Link></li>
            </ul>
          </li>
          <li>
            04. React Component
            <ul>
              <li><Link to="/component/create">create</Link></li>
              <li><Link to="/component/props">props</Link></li>
              <li><Link to="/component/ignored">ignored</Link></li>
              <li><Link to="/component/list">list</Link></li>
            </ul>
          </li>
          <li>
            05. React Event Handling
            <ul>
              <li><Link to="/event/prevent">prevent default</Link></li>
            </ul>
          </li>
          <li>
            06. React Hooks
            <ul>
              <li><Link to="/hooks/state">state</Link></li>
              <li><Link to="/hooks/funcSetState">functional state update</Link></li>
              <li><Link to="/hooks/lazy">lazy initial state</Link></li>
              <li><Link to="/hooks/effect">effect</Link></li>
              <li><Link to="/hooks/clock">clock</Link></li>
              <li><Link to="/hooks/fetch">fetch data</Link></li>
              <li><Link to="/hooks/dispenser">Candy dispenser</Link></li>
            </ul>
          </li>
          <li>
            07. Handle DOM in React
            <ul>
              <li><Link to="/refs/dom">dom</Link></li>
              <li><Link to="/refs/forward">forwardRef</Link></li>
            </ul>
          </li>
          <li>
            08. Portal
            <ul>
              <li><Link to="/portal/portal">portal</Link></li>
              <li><Link to="/portal/window">window portal</Link></li>
            </ul>
          </li>
          <li>
            09. Context
            <ul>
              <li><Link to="/context/without">without context</Link></li>
              <li><Link to="/context/theme">with context</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/boundary">10. Error Boundary</Link>
          </li>
          <li>
            11. Example
            <ul>
              <li><Link to="/example/calculator">calculator</Link></li>
              <li><Link to="/example/netflix">old netflix</Link></li>
              <li><Link to="/example/pokemon">Pokedex</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export function ContentsRouter() {
  return (
    <>
      <Route path="/reactElement/element" component={Element} />
      <Route path="/reactElement/component" component={Component} />
      <Route path="/jsx/jsx" component={JSX} />
      <Route path="/jsx/fragment" component={Fragment} />
      <Route path="/jsx/whitespace" component={WhiteSpace} />
      <Route path="/jsx/conditional" component={Conditional} />
      <Route path="/render/render" component={Render} />
      <Route path="/render/hydrate" component={Hydrate} />
      <Route path="/render/serverRender" component={ServerRender} />
      <Route path="/component/create" component={Create} />
      <Route path="/component/props" component={Props} />
      <Route path="/component/ignored" component={Ignored} />
      <Route path="/component/list" component={List} />
      <Route path="/event/prevent" component={PreventDefault} />
      <Route path="/hooks/state" component={State} />
      <Route path="/hooks/funcSetState" component={FunctionalSetState} />
      <Route path="/hooks/lazy" component={LazyInitialState} />
      <Route path="/hooks/effect" component={UseEffect} />
      <Route path="/hooks/clock" component={Clock} />
      <Route path="/hooks/fetch" component={DataFetch} />
      <Route path="/hooks/dispenser" component={CandyDispenser} />
      <Route path="/refs/dom" component={Dom} />
      <Route path="/refs/forward" component={Forward} />
      <Route path="/portal/portal" component={Portal} />
      <Route path="/portal/window" component={WindowPortal} />
      <Route path="/context/without" component={WithoutContext} />
      <Route path="/context/theme" component={Context} />
      <Route path="/boundary" component={Boundary} />
      <Route path="/example/calculator" component={Calculator} />
      <Route path="/example/netflix" component={Netflix} />
      <Route path="/example/pokemon" component={Pokemon} />
    </>
  )
}
