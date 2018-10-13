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
        <label for="Company Name">Company Name</label>
        <input type="name" class="form-control" id="Company Name" aria-describedby="emailHelp" placeholder="Company Name"/>
      </div>
      <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
      <h7>Choose the communities you identify with</h7>
      <p></p>
      <select class="mdb-select md-form colorful-select dropdown-primary" multiple searchable="Search here..">
        <option value="" disabled selected>Hold control for multiple</option>
        <option value="1">Lesbian</option>
        <option value="2">Gay</option>
        <option value="3">Bisexual</option>
        <option value="4">Transgender</option>
        <option value="5">Queer</option>
        <option value="6">Pansexual</option>
        <option value="7">Asexual</option>
        <option value="6">Agender</option>
      </select>
      <p></p>
      <p></p>
      <p></p>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </>
    );
  }
}
