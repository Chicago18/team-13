import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentCard } from '../../components/document-card'
import { observer } from 'mobx-react';
import { observable } from 'mobx';

export class UserRepo {

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get() {
    return fetch(this.baseUrl + '/users').then(x => x.json());
  }
}

@observer
export class ProfileListPage extends React.Component {

  @observable userList = null;

  constructor(props) {
    super(props);
    this.repo = new UserRepo('http://52.201.219.91:8080')
  }

  async componentWillMount() {
    this.userList = await this.repo.get();
  }

  render() {
    if (!this.userList) {
      return 'Loading...';
    }

    let users = [];
    for (var i = 0; i < this.userList.length; i++) {
        users.push(
          <DocumentCard title=<Link to={"/profiles/"+this.userList[i].user_id}>{this.userList[i].firstname+" "+this.userList[i].lastname}</Link> subtitle={this.userList[i].company} description={this.userList[i].job_level} />)
    };
    return <div>{users}</div>;
  }
}
