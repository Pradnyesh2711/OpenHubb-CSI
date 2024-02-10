import React, { useState, useEffect } from "react";
import "./comment.css";
import io from "socket.io-client";

function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const socket = io("http://localhost:5000"); // Change URL to your server's URL

  useEffect(() => {
    // Listen for incoming comments from the server
    socket.on("comment", (newComment) => {
      setComments((prevComments) => [...prevComments, newComment]);
    });

    return () => {
      socket.disconnect(); // Clean up the socket connection when component unmounts
    };
  }, []);

  const onClickHandler = () => {
    // Emit a 'new-comment' event to the server with the comment content
    socket.emit("new-comment", comment);
    setComment(""); // Clear the input field after submitting
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="main-container">
      <div className="comments-container">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <button onClick={onClickHandler} className="comment-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
