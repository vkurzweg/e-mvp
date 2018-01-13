/*
 *
 * MessagesPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';
import NavWebContainer from '../NavWebContainer';
import MessageFeedContainer from 'components/messages/MessageFeedContainer';
import MessageFeedContainerMobile from 'components/messages/MessageFeedContainerMobile';
import ChatBox from 'components/messages/ChatBox';
import ChatOrderInfo from 'components/messages/ChatOrderInfo';
import ChatBoxMobile from 'components/messages/ChatBoxMobile';
import ChatBoxTablet from 'components/messages/ChatBoxTablet';
import { selectMessagesPage, selectAuth, selectEvent } from './selectors';
import { fetchMessages, setChatId, setMessageInput, sendMessage, showChatBox, showChatFeed, setCurrentEvent } from './actions';
import { db } from 'utils/firebase-config';
import NavMobile from 'components/common/NavMobile';
import NavTablet from 'components/common/NavTablet';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import TabletTopNavNoSearch from 'components/common/TabletTopNavNoSearch';
import MobileTopNavChat from 'components/common/MobileTopNavChat';
import TabletTopNavChat from 'components/common/TabletTopNavChat';
import { push, goBack } from 'react-router-redux';
import ChatOrderInfoMobile from 'components/messages/ChatOrderInfoMobile';
import Button from 'components/orders/EventInfo/Button';
import ButtonMobile from 'components/orders/EventInfo/Button';
import { browserHistory } from 'react-router';


let prevChatId;

export class MessagesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isOrderShowing: false,
    }
    this.handleChatClick = this.handleChatClick.bind(this);
    this.handleMobileChatClick = this.handleMobileChatClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSend = this.handleSend.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.toggleOrder = this.toggleOrder.bind(this);
    this.handleMobileNav = this.handleMobileNav.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
  }

  handleChatClick(chatId) {
    if (prevChatId) {
      db.ref('chats').child(prevChatId).off()
    }
    this.props.setChatId(chatId);
    db.ref(`chats/${chatId}/messages`).on('child_added', snapshot => {
      const message = snapshot.val()
      this.props.setChatId(chatId);
    });
    prevChatId = chatId
  }

  handleMobileChatClick(chatId) {
    console.log('mobile chat id', chatId)
    if (prevChatId) {
      db.ref('chats').child(prevChatId).off()
    }
    this.props.setChatId(chatId);
    db.ref(`chats/${chatId}/messages`).on('child_added', snapshot => {
      const message = snapshot.val()
      this.props.setChatId(chatId);
    });
    prevChatId = chatId
    this.props.showChatBox();
  }

  handleInputChange(e, text) {
    this.props.setMessageInput(text)
  }

  handleSend(e) {
    this.props.sendMessage()
    e.target.value = '';
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

  componentWillMount() {
    const pathAfterLogin = window.location.pathname
    if (!this.props.isAuthenticated) {
      this.props.moveLocation(`/login?next=${pathAfterLogin}`)
    } else {
      console.log('authenticated')
    }
  }

  componentDidMount() {
    this.props.setCurrentEvent(this.props.currentEvent);
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }


  handleEventChange(e, id) {
    const userEvent = this.props.userEvents.get(`${id}`)
    console.log(`event changed to ${userEvent}`)
    this.props.setCurrentEvent(userEvent)
  }

  render() {
    // toggle MessageFeed and ChatBox views
    let displayFeed;
    this.props.isChatFeedShowing ? displayFeed = 'block' : displayFeed = 'none';
    let displayBox;
    this.props.isChatBoxShowing ? displayBox = 'block' : displayBox = 'none';
    let emptyMessage;
    this.props.userChats ? emptyMessage = 'none' : emptyMessage = 'block';
    let displayMessages;
    this.props.userChats ? displayMessages = 'block' : displayMessages = 'none';
    return (
      <div style={{ height: '100%' }}>
        <Helmet
          title="Eventmakr Chat - Custom Online Event Planning"
          meta={[
            { name: 'description', content: 'Customize and confirm your orders from caterers, party rentals, florists and other local vendors on Eventmakr Chat.' },
          ]}
        />

        <MediaQuery minWidth={768}>
          <NavWebContainer />
          <div style={{ marginTop: '10%', display: emptyMessage }}>
            <p style={{ textAlign: 'center' }}>This is where you can chat with vendors after placing orders! <br /> Currently, you have no orders.</p>
            <a href="/vendors" style={{ textDecoration: 'none' }}><Button className="btn btn-success">Browse Vendors</Button></a>
          </div>
          <div className="container-fluid" style={{ backgroundColor: '#E2E2E2', display: displayMessages }}>
            <div className="row">
              <MessageFeedContainer
                chats={this.props.userChats}
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

          <MediaQuery minWidth={480} maxWidth={767}>
            <div style={{ display: emptyMessage }}>
              <TabletTopNavNoSearch />
              <p style={{ textAlign: 'center', marginTop: '30%' }}>This is where you can chat with vendors after placing orders! Currently, you have no orders.</p>
              <a href="/vendors" style={{ textDecoration: 'none' }}><ButtonMobile className="btn btn-success">Browse Vendors</ButtonMobile></a>
              <MessageFeedContainerMobile
                chats={this.props.userChats}
                onClick={this.handleMobileChatClick}
                onEventChange={this.handleEventChange}
                userEvents={this.props.userEvents}/>
            </div>
            <div style={{ display: displayMessages }}>
              <div style={{ display: displayFeed }}>
                <TabletTopNavNoSearch />
                <MessageFeedContainerMobile
                  chats={this.props.userChats}
                  onClick={this.handleMobileChatClick}/>
              </div>
              <div style={{ display: displayBox }}>
                <TabletTopNavChat
                  showChatFeed={this.props.showChatFeed}
                  isChatFeedShowing={this.props.isChatFeedShowing}
                />
                <ChatOrderInfoMobile
                  order={this.props.currentOrder}
                  toggleOrder={this.toggleOrder}
                  isOrderShowing={this.state.isOrderShowing}
                />
                <ChatBoxTablet
                  onInputChange={this.handleInputChange}
                  inputMessage={this.props.inputMessage}
                  onSend={this.handleSend}
                  onEnter={this.handleEnter}
                  currentChat={this.props.currentChat}
                />
              </div>
            </div>
            <NavTablet
              onClick={this.handleMobileNav}/>
          </MediaQuery>


          <MediaQuery maxWidth={480}>
            <div style={{ display: emptyMessage }}>
              <MobileTopNavNoSearch />
              <p style={{ textAlign: 'center', marginTop: '30%' }}>This is where you can chat with vendors after placing orders! Currently, you have no orders.</p>
              <a href="/vendors" style={{ textDecoration: 'none' }}><ButtonMobile className="btn btn-success">Browse Vendors</ButtonMobile></a>
              <MessageFeedContainerMobile
                chats={this.props.userChats}
                onClick={this.handleMobileChatClick}
                onEventChange={this.handleEventChange}
                userEvents={this.props.userEvents}/>
            </div>
            <div style={{ display: displayMessages }}>
              <div style={{ display: displayFeed }}>
                <MobileTopNavNoSearch />
                <MessageFeedContainerMobile
                  chats={this.props.userChats}
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
                  currentChat={this.props.currentChat}
                />
              </div>
            </div>
            <NavMobile
              onClick={this.handleMobileNav}/>
          </MediaQuery>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const messagesPage = selectMessagesPage(state);
  const authState = selectAuth(state);
  const eventState = selectEvent(state);
  const userEvents = messagesPage.get('userEvents');
  const currentEvent = eventState.get('event');
  const isAuthenticated = authState.get('isAuthenticated');
  const isChatBoxShowing = messagesPage.get('isChatBoxShowing');
  const isChatFeedShowing = messagesPage.get('isChatFeedShowing');
  const userChats = messagesPage.get('currentChats')
  const currentChatState = messagesPage.get('chat');
  let currentChat = {};
  if (!!currentChatState) currentChat = currentChatState.get('chat');
  let inputMessage;
  (!!messagesPage.get('message')) ? inputMessage = messagesPage.get('message') : inputMessage = '';
  const currentOrder = messagesPage.get('order');
  console.log('input', inputMessage)
  return {
    userChats,
    inputMessage,
    currentChat,
    currentOrder,
    isChatBoxShowing,
    isChatFeedShowing,
    isAuthenticated,
    currentEvent,
    userEvents,
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
    moveLocation: (url) => dispatch(push(url)),
    setCurrentEvent: (event) => dispatch(setCurrentEvent(event)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
