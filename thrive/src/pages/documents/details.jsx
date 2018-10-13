import React from 'react';

export class DocumentDetailsPage extends React.Component {

  id = null;

  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  render() {
    return (
    	<div>
    	<div class="row">
    		<div class="col-sm-5">
    			<h2>Stakeholder Engagement in Today’s Polarized Environment: Knowing How to Respond</h2>
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
		<div class="row">
			In today’s shifting political environment, an organization’s commitment to diversity and inclusion is being judged against how/when they respond to external events impacting underrepresented communities. The LGBTQ community is concerned that reversal of legal protections for transgender people may indicate other rights are at risk – including those enacted by employers. Lately, leadership teams are being asked from multiple stakeholders to publicly state their commitment to workplace equity/inclusion. Being prepared to respond in a timely way is key to protecting your reputation as a best place to work. This session will use real case studies that demonstrate what’s at stake and provide tips on how to respond effectively while balancing the needs of multiple stakeholders.
		</div>
		<div class="row embed-responsive embed-responsive-16by9">
  			<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1DOnGxGTpg" allowfullscreen></iframe>
		</div>
		</div>
		);
  }
}