import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentCard } from '../../../components/document-card'

import './index.css'

export class ProfileListPage extends React.Component {

  render() {

    return (
      <>
        <p>Profiles</p>
        <Link to="/profiles/1">#1</Link>

        <DocumentCard title="Card 1" subtitle="Card subtitle" description="1" />
        <DocumentCard title="Card 2" subtitle="Card subtitle" description="2" />
        <DocumentCard title="Card 3" subtitle="Card subtitle" description="3" />
        <DocumentCard title="Card 4" subtitle="Card subtitle" description="4" />
        <DocumentCard title="Card 5" subtitle="Card subtitle" description="5" />
        <DocumentCard title="Card 6" subtitle="Card subtitle" description="6" />
        <DocumentCard title="Card 7" subtitle="Card subtitle" description="7" />
        <DocumentCard title="Card 8" subtitle="Card subtitle" description="8" />
        <DocumentCard title="Card 9" subtitle="Card subtitle" description="9" />
        <DocumentCard title="Card 10" subtitle="Card subtitle" description="10" />
      </>
    );
  }
}
