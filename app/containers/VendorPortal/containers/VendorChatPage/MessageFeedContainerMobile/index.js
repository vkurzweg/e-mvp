/*
 *
 * MessageFeedContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectMessageFeedContainer from './selectors';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Infinite from 'react-infinite';
import EventDropdown from 'components/messages/EventDropdown';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ChatFeed, Message } from 'react-chat-ui'

const feedStyle = {
  height: 550,
  backgroundColor: '#FAFAFA',
};

// const iconButtonElement = (
//   <IconButton
//     touch={true}
//     tooltip="more"
//     tooltipPosition="bottom-left"
//   >
//     <MoreVertIcon color={grey400} />
//   </IconButton>
// );

const rightIconMenu = (
  <CommunicationChatBubble />
);
function MessageFeedContainer(props) {
  let chats;
  (props.chats) ? chats = props.chats : chats = [];
  console.log('mobile chats feed', chats)
  let display;
  (props.isChatFeedShowing) ? display = 'none' : display = 'block';
  console.log('display', display)
  return (
    <div className="col-sm-3" style={{ display }}>
      <Infinite containerHeight={600} elementHeight={40}>
        <List>
        <Subheader style={{ color: '#323232', textAlign: 'center', textTransform: 'uppercase' }}>Messages</Subheader>
          {chats.map((chat, i, chats) => {
            return (
              <ListItem
                key={i}
                onClick={props.onClick.bind(this, chat.chatId)}
                leftAvatar={<Avatar src={chat.customerPicture} size={50} />}
                rightIconButton={rightIconMenu}
                primaryText={chat.username}
                secondaryText={chat.lastMessage}
                style={{ color: '#323232', fontFamily: 'Raleway', borderBottom: '1px solid #BDBEBD', padding: '1em' }}>
              </ListItem>
            )
          })}
        </List>
      </Infinite>
    </div>
  );
}

export default MessageFeedContainer;
