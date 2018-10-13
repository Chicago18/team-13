import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

export class DocumentRepo {

	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	get(id) {
		return fetch(this.baseUrl + '/documents/' + id).then(x => x.json()); 
	}
}

@observer
export class DocumentDetailsPage extends React.Component {


  id = null;
  @observable document = null;  

  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.repo = new DocumentRepo('http://52.201.219.91:8080')
  }

  async componentWillMount() {
  	this.document = await this.repo.get(this.id);
  }

  render() {
  	if (!this.document) {
  		return 'Loading...';
  	}

    return (
    	<div>
    	<div class="row">
    		<div class="col-sm-5">
    			<h2>{this.document.title}</h2>
			</div>
    		<div class="col-sm-5">

			<div class="card d-flex flex-row">
			  <img src="https://dummyimage.com/96/000/fff" class="img-responsive img-rounded"/>
			  <div class="card-body">
			    <h3 class="card-title">Apoorva Gandhi</h3>
			    <p class="card-text">VP of Multicultural Affairs,  Marriott International</p>
			  </div>
			</div>
  
			</div>
			<div class="col-sm-2">
				<div class="card">
  					<div class="card-body text-right">
    					<a href="#" class="card-link">Community</a>
  					</div>
				</div>
			</div>
		</div>
		<div class="row">{this.document.description}</div>
		<div class="row embed-responsive embed-responsive-16by9">
  			<iframe class="embed-responsive-item" src={this.document.href} allowfullscreen></iframe>
		</div>
		</div>
		);
  }
}