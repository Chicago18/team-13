import React from 'react';
import { Link } from 'react-router-dom';

export class RegisterPage extends React.Component {

  render() {
    return (
      <>
      <form>
      <div class="form-group">
        <label for="Enter Your Name">First Name</label>
        <input type="name" class="form-control" id="John" aria-describedby="emailHelp" placeholder="John"/>
      </div>
      <div class="form-group">
        <label for="Enter your Last Name">Last Name</label>
        <input type="name" class="form-control" id="Doe" aria-describedby="emailHelp" placeholder="Doe"/>
      </div>
      <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </>
    );
  }
}
