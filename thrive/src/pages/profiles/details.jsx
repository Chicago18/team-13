import React from 'react';

export class ProfileDetailsPage extends React.Component {

  id = null;

  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  render() {
    return (
      <>
        <center><h2>Jimmy Bob</h2></center>
      </>
    )
  }
}
