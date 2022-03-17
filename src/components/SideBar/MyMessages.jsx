import React from "react";

const MyMessages = ({ ME }) => {

  return (
    <div className="myMessages">
        <h3>My Messages</h3>
      {ME.messages && ME.messages.length
        ? ME.messages.map((entry) => {
            const { content, post } = entry;
            return (
              <div className="messageInInbox" key={entry._id}>
                <h2>{post.title}</h2>
                <span> from : {entry.fromUser.username}</span>
                <span>{content}</span>
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
