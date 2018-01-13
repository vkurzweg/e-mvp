/**
*
* ChatBox
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
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Infinite from 'react-infinite';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ChatFeed, Message } from 'react-chat-ui';
import Button from './Button';

const chatStyle = {
  height: 550,
  backgroundColor: '#FAFAFA',
};

const btnStyle = {
  display: 'block',
  margin: '0 auto',
  marginTop: '5%'
};

function ChatBox(props) {
  let vendorId = props.currentChat.vendorId;
  let uid = props.currentChat.uid;
  let messageObjects = props.currentChat.messages
  const messages = [];
  for (let key in messageObjects) {
    messages.push(messageObjects[key])
  }
  console.log(messages)
  const chatMessages = messages.map(message => {
    if (message.posted_by === vendorId) {
      return new Message(0, message.text);
    }
    if (message.posted_by === uid) {
      return new Message(1, message.text);
    }
  })
  return (
    <div style={{ width: '90%', display: 'block', margin: '0 auto' }}>
      <Infinite containerHeight={230} elementHeight={40}>
            <div>
              <ChatFeed
                messages={chatMessages}
                hasInputField={false}
                bubbleStyles={
                        {
                          text: {
                            fontSize: 14,
                          },
                          chatbubble: {
                            borderRadius: 20,
                            padding: 10
                          }
                        }
                      }
              />
            </div>
      </Infinite>
      <div className='container-fluid'>
        <div className='row' style={{ display: 'inline-flex' }}>
          <div className="col-sm-8">
            <TextField
              hintText="Send your message!"
              fullWidth={true}
              onChange={props.onInputChange}
              value={props.inputMessage}
              onKeyPress={props.onEnter}
              textFieldStyle={{ width: '80%' }}
            />
          </div>
          <div className="col-sm-2">
            <Button onClick={props.onSend}>SEND</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
