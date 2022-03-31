import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent } from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import UnreadMessagesIndicator from "./UnreadMessagesIndicator";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "grab",
    },
  },
}));

const Chat = ({ conversation, setActiveChat, userId }) => {
  const classes = useStyles();
  const { otherUser, messages } = conversation;

  const [count, setCount] = useState(0);

  const handleClick = async (conversation) => {
    await setActiveChat(conversation.otherUser.username);
  };

  const unreadMessages = messages.filter(
    (message) => message.isRead === false && userId !== message.senderId
  );

  useEffect(() => {
    setCount(unreadMessages.length);
  }, [unreadMessages]);

  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} />
      <UnreadMessagesIndicator count={count} />
    </Box>
  );
};

export default Chat;
