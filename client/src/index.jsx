import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="header"><Header/></div>
        <div className="content"><Content/></div>
        <div className="footer"><Footer/></div>
      </div>
      )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));