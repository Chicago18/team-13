class App extends React.Component {
  handleClick = () => {
    ons.notification.alert('Hello world!');
  }

  render() {
    return (
      <Ons.Toolbar>
        <div className="left">
          <Ons.ToolbarButton onClick={this.handleClick}>
            <Ons.Icon icon="md-menu"/>
          </Ons.ToolbarButton>
        </div>
        <div className="center">
          Title
        </div>
        <div className="right">
          <Ons.BackButton>
            Back
          </Ons.BackButton>
        </div>
      </Ons.Toolbar>
    );
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('container')
);
