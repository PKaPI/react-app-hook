import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import Home from './views/home';
import About from './views/about';
import NoMatch from './views/noMatch';
import Wrapper from './components/Wrapper'
import NavLink from './components/NavLink'

const title = 'You Are Doing Great'
const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  }, {
    title: 'About',
    path: '/about',
    component: About
  }
]

class App extends React.Component {
  render () {
    return (
      <Router>
        <Wrapper>
          <Helmet titleTemplate={`%s - ${title}`} />
          {routes.map((route, i) => (
              <NavLink key={i} {...route} />
            ))}
          <Switch>
            {routes.map((route, i) => (
              <Route exact key={i} {...route} />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </Router>
    )
  }
}

export default App