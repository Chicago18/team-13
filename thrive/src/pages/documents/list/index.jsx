import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentCard } from '../../../components/document-card'

import './index.css'

export class DocumentListPage extends React.Component {

  render() {

    return (
      <>
        <p>DOCUMENTS</p>
        <Link to="/documents/1">#1</Link>

        <div class="card" style={{width: '100%'}}>
  <div class="card-body">
    <h5 class="card-title">Card 1</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

      <DocumentCard title="Card 999" subtitle="Card subtitle" description="foobar" />


        <div class="card" style={{width: '100%'}}>
  <div class="card-body">
    <h5 class="card-title">Card 3</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

<div class="card" style={{width: '100%'}}>
  <div class="card-body">
    <h5 class="card-title">Card 4</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

<div class="card" style={{width: '100%'}}>
  <div class="card-body">
    <h5 class="card-title">Card 5</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

<div class="card" style={{width: '100%'}}>
  <div class="card-body">
    <h5 class="card-title">Card 6</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

<div class="card" style={{width: '100%'}}>
  <div class="card-body">
    <h5 class="card-title">Card 7 </h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>


      </>
    );
  }
}
