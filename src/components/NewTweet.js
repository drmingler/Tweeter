import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { Redirect } from "react-router-dom";
class NewTweet extends Component {
  state = {
    text: "",
    toHome: false
  };
  handleChange = e => {
    e.preventDefault();
    const text = e.target.value;
    this.setState(() => ({ text }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { dispatch, id } = this.props;
    dispatch(handleAddTweet(text, id));
    console.log("text out ", text);
    this.setState(() => ({
      text: "",
      toHome: id ? false : true
    }));
  };

  render() {
    const { text, toHome } = this.state;

    const tweetLeft = 280 - text.length;
    if (toHome === true ){
      return <Redirect to = '/'/>
    }
    return (
      <div>
        <h3 className={"center"}> Compose New Tweet</h3>
        <form className={"new-tweet"} onSubmit={this.handleSubmit}>
          <textarea
            value={text}
            onChange={this.handleChange}
            placeholder={"What is happening?"}
            className={"textarea"}
            maxLength={280}
          ></textarea>
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className={"btn"} type={"submit"} disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default connect()(NewTweet);