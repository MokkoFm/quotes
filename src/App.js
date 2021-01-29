import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="quote-box">
        <p id="text">The question isn’t who is going to let me; it’s who is going to stop me</p>
        <div className="author">
          <span id="author">Benjamin Franklin</span>
        </div>
        <div className="buttons">
          <div className="social">
            <a id="tweet-quote"><i class="fab fa-twitter"></i></a>
            <a id="fb-quote"><i class="fab fa-facebook-f"></i></a>
          </div>
          <div className="submit">
            <button id="new-quote">New quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
