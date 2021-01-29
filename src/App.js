import React from 'react';
import './App.css';

const quotes = [
  {
    quote: "The question isn’t who is going to let me; it’s who is going to stop me",
    author: 'Benjamin Franklin',
  },
  {
    quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: 'Benjamin Franklin',
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill"
  },
  {
    quote: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
    author: "Mae Jamison"
  },
]

let index = 1;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "The question isn’t who is going to let me; it’s who is going to stop me",
      author: 'Benjamin Franklin',
    }
  }
  changeQuote() {
    while (index < quotes.length) {
      this.setState({
        quote: quotes[index].quote,
        author: quotes[index].author,
      })
    }
    index++;
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
            <button id="new-quote" onClick={this.changeQuote.bind(this)}>New quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
