import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "The question isn’t who is going to let me; it’s who is going to stop me",
      author: 'Benjamin Franklin'
    }
  }
  render() {
    return (
      <div id="quote-box">
        <p id="text">{this.state.quote}</p>
        <div className="author">
          <span id="author">{this.state.author}</span>
        </div>
        <div className="buttons">
          <div className="social">
            <a id="tweet-quote" href="twitter.com/intent/tweet"><i class="fab fa-twitter"></i></a>
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
