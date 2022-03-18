import React from "react";
import {Link} from "react-router-dom"

const MyMessages = ({ ME, setThisPost }) => {

  const sendMessageID = async (post) => {
    setThisPost(post)
  }

  return (
    <div className="myMessages">
        <h3>My Messages</h3>
      {ME.messages && ME.messages.length
        ? ME.messages.map((entry) => {
            const { content, post } = entry;
            return (
              <div className="messageInInbox card-body card w-75 bg-white" aria-live="assertive" aria-atomic="true" key={entry._id}>
                <h2 className="card-title bg-white">{post.title}</h2>
                <span className="card-text bg-white"> from : {entry.fromUser.username}</span>
                <span className="card-text bg-white">{content}</span>
                {ME ? <Link to="/MessageForm" onClick={() => sendMessageID(post._id)}><button className="postButton btn btn-outline-info"> <i className="mainClickables bi bi-chat"></i> </button></Link>: null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default MyMessages;

{
  /* 
            const fromUser = .fromUser.username*/
}
