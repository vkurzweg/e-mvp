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
import Paper from 'material-ui/Paper';
import Infinite from 'react-infinite';
import EventDropdown from 'components/messages/EventDropdown';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ChatFeed, Message } from 'react-chat-ui';


const rightIconMenu = (
  <CommunicationChatBubble
    color='#323232'
  />
);
function MessageFeedContainer(props) {
  let chats;
  (props.chats) ? chats = props.chats : chats = [];
  return (
    <div className="col-sm-3" style={{ backgroundColor: '#E2E2E2', color: '#323232'}}>
      <Paper zDepth={2}>
        <Infinite containerHeight={600} elementHeight={40}>
          <List>
            <Subheader style={{ color: '#323232', textAlign: 'center', textTransform: 'uppercase' }}>Messages</Subheader>
            {chats.map((chat, i, chats) => {
              return (
                  <ListItem
                    key={i}
                    onClick={props.onClick.bind(this, chat.chatId)}
                    leftAvatar={<Avatar src={chat.vendorPicture} size={50} />}
                    rightIconButton={rightIconMenu}
                    primaryText={chat.vendorName}
                    secondaryText={chat.lastMessage}
                    style={{ color: '#323232', fontFamily: 'Raleway', borderBottom: '1px solid #BDBEBD', padding: '1em' }}
                  >
                  </ListItem>
              )
            })}
          </List>
        </Infinite>
      </Paper>
    </div>
  );
}

export default MessageFeedContainer;
