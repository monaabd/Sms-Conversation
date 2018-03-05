import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import openSocket from 'socket.io-client';
import './logo.jpg';
import './pinchos1.jpg';
import './App.css';
import List from './components/List';
import unresponded from './dataMap/unresponded.js';
import { Conversation } from './components/conversation';
import './css/conversationStyle.css';

// import unresponded from './unresponded.json';
import conversations from './dataMap/conversation';


const socket = openSocket('http://localhost:8000');


injectTapEventPlugin();

const style = {
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      conversation: [],
      customer: null,
      text: '',
    };
    this.chooseCustomer = this.chooseCustomer.bind(this);
    this.socket = openSocket('localhost:8000');
    // this.addText = this.addText.bind(this);
  }

  // shouldComponentUpdate = (nextProps) => (
  // this.props.text !== nextProps.text
  // );
  // componentWillMount() {
  // fetch('/unresponded.js')
  // .then((res) => res.json)
  // .then((list) => {
  // this.setState({ list });
  // });
  // }
  // componentWillMount() {
  // fetch('C:/Users/Mona Abd/Documents/work/conversations/src/dataMap/conversation')
  // .then((res) => res.json)
  // .then((conversation) => {
  // console.log('con', JSON.stringify(conversation));
  // this.setState({ conversation });
  // });
  // }

  // TRUTHY = {} true 'a' []
  // FALSY = undefined null false ''
  // addText = (e) =>{


  // this.socket.on('emitText',function(conversain){
  // conversain
  // });
  // }


  chooseCustomer(customer) {
    const conversation = conversations.filter((conv) => customer.msisdn === conv.msisdn);
    this.setState({
      customer,
      conversation,
    });
  }


  render() {
    const {
      text, conversation, customer,
    } = this.state;
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src="logo.jpg" className="App-logo" alt="logo" />
            <h1 className="App-title"> Pincho Chat Page</h1>
          </header>

          <Paper style={style} zDepth={5}> {/* <List values={this.state.list} /> */}
            <div className="container" >
              <p className="App-intro">
                {/* To get started, edit <code>src/App.js</code> and save to reload. */}
              </p>
              {/* in line pain mige age conversain baranar 0 bood bad(&&) in func ya harchi bade och och run kon */}
              {conversation.length === 0 &&
                <Paper style={style} zDepth={5}> {/* <List values={this.state.list} /> */}
                  <div className="list">
                    <table>
                      <tbody>
                        <List values={unresponded} viewCustomer={this.chooseCustomer} />
                      </tbody>
                    </table>
                  </div>
                </Paper>
              }

              {conversation.length > 0 &&
                <div className="smsContainer">
                  <Conversation
                    submit={(e) => {
                      // add text
                      e.preventDefault();
                      // to cathch that emit on client side and add message to our arrage
                      // what we received in server vi emit to all clients
                      const addText = (text) => {
                        this.setState({
                          conversation: [...conversation, { text }],
                          text: '',
                        });
                      };

                      addText(text);
                      this.socket.emit('emitText', text);

                      this.socket.emit('addText', (text) => addText(text));
                    }} // onSubmit

                    change={
                      // emiting info we received from client (text) and send to server
                      (e) => this.setState({ text: e.target.value })
                    }

                    back={
                      () => this.setState({ conversation: [] })
                    }
                    conversation={conversation}
                    // conversation

                    customer={customer}
                  // text={text}
                  />
                </div>
              }
              {/* <Socketfunc newMessage={this.state.text}/> */}
            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
