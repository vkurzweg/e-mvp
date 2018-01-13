/*
 *
 * VendorChatPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import MessageFeedContainer from './MessageFeedContainer';
import MessageFeedContainerMobile from './MessageFeedContainerMobile';
import ChatBox from './ChatBox';
import ChatBoxMobile from './ChatBoxMobile';
import ChatOrderInfo from './ChatOrderInfo';
import ChatOrderInfoMobile from './ChatOrderInfoMobile';
import { fetchMessages, setChatId, setMessageInput, sendMessage, showChatBox, showChatFeed } from './actions';
import { selectVendorsChatPage } from './selectors';
import { db } from 'utils/firebase-config';
import MediaQuery from 'react-responsive';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import MobileTopNavChat from 'components/common/MobileTopNavChat';


let prevChatId;

export class VendorChatPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isOrderShowing: false,
    }
    this.handleChatClick = this.handleChatClick.bind(this)
    this.handleMobileChatClick = this.handleMobileChatClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSend = this.handleSend.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.toggleOrder = this.toggleOrder.bind(this);
  }

  handleChatClick(chatId) {
    // remove previous listener and add new chatroom listener
    if (prevChatId) {
      db.ref('chats').child(prevChatId).off()
    }
    this.props.setChatId(chatId);
    db.ref(`chats/${chatId}/messages`).on('child_added', snapshot => {
      const message = snapshot.val()
      this.props.setChatId(chatId);
    });
    prevChatId = chatId;
  }

  handleMobileChatClick(chatId) {
    // remove previous listener and add new chatroom listener
    if (prevChatId) {
      db.ref('chats').child(prevChatId).off()
    }
    this.props.setChatId(chatId);
    db.ref(`chats/${chatId}/messages`).on('child_added', snapshot => {
      const message = snapshot.val()
      this.props.setChatId(chatId);
    });
    prevChatId = chatId;
    this.props.showChatBox();
  }

  handleInputChange(e, text) {
    this.props.setMessageInput(text)
  }

  handleSend(e) {
    this.props.sendMessage()
  }

  handleEnter(e) {
    if(e.key == 'Enter'){
      this.props.sendMessage()
    }
  }

  toggleOrder() {
    this.setState((prevState) => {
      return { isOrderShowing: !prevState.isOrderShowing };
    });
  }

  componentDidMount() {
    this.props.fetchMessages()
  }

  render() {
    console.log('vc', this.props.vendorChats)
    // toggle MessageFeed and ChatBox views
    let displayFeed;
    this.props.isChatFeedShowing ? displayFeed = 'block' : displayFeed = 'none';
    let displayBox;
    this.props.isChatBoxShowing ? displayBox = 'block' : displayBox = 'none';
    let display = 'block';
    (this.props.vendorChats && this.props.vendorChats.length === 0) ? display = 'none' : display = 'block';
    let displayEmpty = 'none';
    (this.props.vendorChats && this.props.vendorChats.length === 0) ? displayEmpty = 'block' : displayEmpty = 'none';
    return (
      <div>
        <MediaQuery minWidth={768} style={{ backgroundColor: '#E2E2E2' }}>
          <div style={{ display: displayEmpty }}>
            <p style={{ marginTop: '10%', textAlign: 'center' }}>
              This is where your messages will appear when you start receiving orders!
            </p>
          </div>
          <div style={{ display: display }} className='container-fluid'>
            <div className='row'>
              <MessageFeedContainer
                chats={this.props.vendorChats}
                onClick={this.handleChatClick}/>
              <ChatBox
                onInputChange={this.handleInputChange}
                inputMessage={this.props.inputMessage}
                onSend={this.handleSend}
                onEnter={this.handleEnter}
                currentChat={this.props.currentChat}/>
              <ChatOrderInfo
                order={this.props.currentOrder}
                toggleOrder={this.toggleOrder}
                isOrderShowing={this.state.isOrderShowing}
              />
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <div style={{ display: displayEmpty }}>
            <MobileTopNavNoSearch />
            <p style={{ marginTop: '10%', textAlign: 'center' }}>
              This is where your messages will appear when you start receiving orders!
            </p>
          </div>
          <div style={{ display: display }}>
            <div style={{ display: displayFeed }}>
              <MobileTopNavNoSearch />
              <MessageFeedContainerMobile
                chats={this.props.vendorChats}
                onClick={this.handleMobileChatClick}/>
            </div>
            <div style={{ display: displayBox }}>
              <MobileTopNavChat
                showChatFeed={this.props.showChatFeed}
                isChatFeedShowing={this.props.isChatFeedShowing}
              />
              <ChatOrderInfoMobile
                order={this.props.currentOrder}
                toggleOrder={this.toggleOrder}
                isOrderShowing={this.state.isOrderShowing}
              />
              <ChatBoxMobile
                onInputChange={this.handleInputChange}
                inputMessage={this.props.inputMessage}
                onSend={this.handleSend}
                onEnter={this.handleEnter}
                currentChat={this.props.currentChat}/>
            </div>
          </div>
        </MediaQuery>

      </div>
    );
  }
}

function mapStateToProps(state) {
  const vendorsChatPage = selectVendorsChatPage(state)
  const vendorChats = vendorsChatPage.get('currentChats')
  const currentChatState = vendorsChatPage.get('chat');
  let currentChat = {};
  if (!!currentChatState) currentChat = currentChatState.get('chat');
  let inputMessage;
  (!!vendorsChatPage.get('message')) ? inputMessage = vendorsChatPage.get('message') : inputMessage = '';
  const isChatBoxShowing = vendorsChatPage.get('isChatBoxShowing');
  const isChatFeedShowing = vendorsChatPage.get('isChatFeedShowing');
  const currentOrder = vendorsChatPage.get('order');
  return {
    vendorChats,
    inputMessage,
    currentChat,
    isChatBoxShowing,
    isChatFeedShowing,
    currentOrder,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMessages: () => dispatch(fetchMessages()),
    setChatId: (chatId) => dispatch(setChatId(chatId)),
    setMessageInput: (text) => dispatch(setMessageInput(text)),
    sendMessage: () => dispatch(sendMessage()),
    showChatBox: () => dispatch(showChatBox()),
    showChatFeed: () => dispatch(showChatFeed()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorChatPage);
