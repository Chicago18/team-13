import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentCard } from '../../../components/document-card'
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import './index.css'

export class DocumentsRepo {

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get() {
    return fetch(this.baseUrl + '/documents').then(x => x.json());
  }
}

@observer
export class DocumentListPage extends React.Component {

  @observable documentList = null;

  constructor(props) {
    super(props);
    this.repo = new DocumentsRepo('http://52.201.219.91:8080')
  }

  async componentWillMount() {
    this.documentList = await this.repo.get();
  }

  render() {
    if (!this.documentList) {
      return 'Loading...';
    }

    let documents = [];
    for (var i = 0; i < this.documentList.length; i++) {
        documents.push(<DocumentCard title={this.documentList[i].title} subtitle="Author's name" description={this.documentList[i].description} />)
    };
    return <div>{documents}</div>;
  }
}
