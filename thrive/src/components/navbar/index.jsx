import * as React from 'react';
import { matchPath, match as Match, withRouter, RouteComponentProps } from 'react-router';
import { Link, Route, Switch } from 'react-router-dom';

import { routes } from '../../routes'

import './index.css'

const NavbarLink = ({ active, path, text }) => {
  const activeToggleClass = ['nav-item', (active) ? 'active' : ''].join('')

  return (
    <Link to={path} className='unify-nav-link'>
      <li className={activeToggleClass}>
        <a className="nav-link" href={path}>{text}</a>
      </li>
    </Link>
  );
};

const RouteNavbarLinkInternal = (props) => {
  const match = matchRoute(props.location.pathname, routes);

  let active = false;
  if (match) {
    // Check if the current location is the same route or a subroute of the current tab
    // i.e. the length of the indecies of the current route must be >= current tab indices
    const tabIdx = [props.index];
    const locationIdx = match.indices;

    let n = 0;
    for (let i = 0; i < Math.min(tabIdx.length, locationIdx.length); i++) {
      if (tabIdx[i] === locationIdx[i]) {
        n++;
      } else {
        break;
      }
    }

    active = (n >= tabIdx.length);
  }

  return <NavbarLink {...props} active={active} />;
};

const RouteNavbarLink = withRouter(RouteNavbarLinkInternal);

export class NavBar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">


          <Link className="navbar-brand" to="/"> Out & Equal Connect </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              {routes.map((route, index) => (
                <RouteNavbarLink index={index} key={index} {...route} />
              ))}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </>
    )
  }
}

function matchRoute(path, routes) {

  function f(indices, rs) {

    for (let i = 0; i < rs.length; i++) {
      const r = rs[i];
      const m = matchPath(path, r);
      if (m) {
        return { indices: [...indices, i], match: m, route: r };
      }

      if (r.routes) {
        const submatch = f([...indices, i], r.routes);
        if (submatch) { return submatch; }
      }
    }

    return null;
  }

  return f([], routes);
}