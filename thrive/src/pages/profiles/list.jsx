import React from 'react';
import { Link } from 'react-router-dom';

export class ProfileListPage extends React.Component {

  render() {
    return (
      <>
        <p>PROFILE</p>
        <Link to="/profiles/1">#1</Link>
      </>
    );
  }
}
