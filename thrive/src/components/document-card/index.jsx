import React from "react"

export class DocumentCard extends React.Component {

  render() {
    const { title, subtitle, description } = this.props;
    const links = this.props.links || [];

    // link : [{ href: '/', text: 'text' }]

    const linkElements = links.map((x, i) =>
      <Link key={i}>{x.text}</Link>)

    return (
      <div class="card" style={{width: '100%'}}>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{subtitle}</h6>
          <p class="card-text">{description}</p>
          {linkElements}
        </div>
      </div>
    );
  }
}
