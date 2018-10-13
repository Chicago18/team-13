
class App extends React.Component {
  handleClick = () => {
    ons.notification.alert('Hello world!');
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Button onClick={this.handleClick}>Tap me!</Ons.Button>
      </Ons.Page>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);
