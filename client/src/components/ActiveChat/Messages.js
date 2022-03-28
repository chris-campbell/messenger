import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from ".";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId, updateMessages } = props;
  const [sortedMessages, setSortedMessages] = useState([]);

  const sortedMessagesDescending = () => {
    const sorted = messages.sort((a, b) =>
      Date(b.createdAt) < Date(a.createdAt) ? 1 : -1
    );
    setSortedMessages(sorted);
  };

  useEffect(() => {
    sortedMessagesDescending();
  }, [messages]);

  return (
    <Box>
      {sortedMessages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
            updateMessages={updateMessages}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
