import React from 'react';
import { Link } from 'react-router-dom';

export class CompanyRegisterPage extends React.Component {

  render() {
    return (
      <>
      <form>
      <div class="form-group">
        <label for="Enter Company Name">Company Name</label>
        <input type="name" class="form-control" id="Company Name" aria-describedby="emailHelp" placeholder="Company Name"/>
      </div>
      <div class="form-group">
          <label for="CompanyAddress">Company address</label>
          <input type="name" class="form-control" id="Company Address" aria-describedby="emailHelp" placeholder="Company Address"/>
      </div>
      <h7>Choose the ERGs that exist in your organization</h7>
      <p></p>
      <select class="mdb-select md-form colorful-select dropdown-primary" multiple searchable="Search here..">
        <option value="" disabled selected>Hold control for multiple</option>
        <option value="1">LGBTQ+</option>
        <option value="2">Racial</option>
        <option value="3">Ethnic</option>
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
