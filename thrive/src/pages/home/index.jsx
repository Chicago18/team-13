import React from 'react';
import './videoatts.css';

export class HomePage extends React.Component {
  render() {
    return (
      <div className="starter-template">
        <h1>Out & Equal Connect</h1>


<div className="fullscreen-bg">
    <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
        <source src="http://52.201.219.91:8081/video.mp4" type="video/mp4"/>
    </video>
</div>

        <p className="lead">Connect with your community today. <br /> Network. Health. News. </p>
      </div>);
  }
}
