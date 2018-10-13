import React from 'react';
import { Link } from 'react-router-dom';

export class DocumentListPage extends React.Component {

  render() {
    return (
      <>
        <p>DOCUMENTS</p>
        <Link to="/documents/1">#1</Link>
      </>
    );
  }
}