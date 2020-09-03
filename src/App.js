import React from "react";
import "./styles.css";
import Quotes from "./Quotes";

let author, quote, color;

export default class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      index: 0
    };
  }
  handleClick() {
    let newIndex = Math.floor(Math.random() * 6);

    this.setState({
      index: newIndex
    });
  }
  render() {
    quote = Quotes[this.state.index].quote;
    author = Quotes[this.state.index].author;
    color = Quotes[this.state.index].color;
    document.body.style.background = color;
    let styles = {
      color: color
    };

    return (
      <div className="App">
        <div class="quote-box">
          <h1 style={styles} id="text">
            {quote}
          </h1>
          <p style={styles} id="author">
            --{author}
          </p>
        </div>

        <div id="btn">
          <div>
            <button>Twitter</button>
            <button>Tumblr</button>
          </div>

          <div>
            <button id="new-quote" onClick={this.handleClick}>
              New quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
