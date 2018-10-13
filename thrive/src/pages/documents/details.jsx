import React from 'react';

export class DocumentDetailsPage extends React.Component {

  id = null;

  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  render() {
    return 'DOCUMENTS ' + this.id;
  }
}