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
        <center><h2><strong>Jimmy Bob</strong></h2></center>
        <center><img src="https://pbs.twimg.com/profile_images/786711098955358208/T0wKRr4I_400x400.jpg"/></center>
        <center><h4>Company Name</h4></center>
        <center><h5>Job Title</h5></center>
      </>
    )
  }
}
