import React from 'react';
import Paper from 'material-ui/Paper';
// import ListItem from 'material-ui/List/ListItem';
// import Avatar from 'material-ui/Avatar';
// import PropTypes from 'prop-types';
import '../css/conversationStyle.css';
import { App } from '../App';

export const Conversation = (props) => (

  <div>

    {/* <p> 'Number: '{props.customer.msisdn}</p> */}
    <button onClick={props.back}>back</button>
    
    {props.conversation.map((conv) => {
      const { reserv, out } = conv;

      // same things as above
      // const reserv = conv.reserv;
      // const out = conv.out;

      let type;
      if (reserv) {
        type = 'reserv';
      } else if (out) {
        type = 'out';
      } else if (conv.in) {
        type = 'in';
      } else {
        type = 'unknown';
      }
      // same thing as above
      // const type = reserv ? 'reserv' : out ? 'out' : conv.in ? 'in' : 'unknown';
      // type inja pain be onvane class name dadim ke be onvane id bara khodemon bashe

      // let sender;
      // if (conv.in) {
      //   sender = 'Customer';
      // } else {
      //   sender = <Avatar src="logo.jpg" />;
      // }

      return (

        <Paper className={`${type}-wrapper wrapper`} style={this.style} zDepth={3}>
          {/* {conv.out && <Avatar src="logo.jpg" />} */}
          {/* vaghti dota classname mikhay  bedi behtare oni ke varible o eyne bala ba $ benevisi */}

          <p className={type}>
            {/* Number: {conv.msisdn}, */}
            Text:  {conv.text},
            {/* messageId {conv.messageId},
            Reservation:  {conv.reservation},
            resourcedId:  {conv.resourcedId},
            location:  {conv.locationId},
            Responded {conv.responded},
            createdAt:  {conv.createdAt},
            updatedAt:  {conv.updatedAt},
            type: {type},
            reserve:  {conv.reserve}, */}
            <a href="" hover="color: red;"> Object Id: {conv.objectId},</a>
            {/* to:  {conv.to}, */}
            {/* 'seatingDate '{conv.seatingDate.iso},  */}


            {/* {conv.in && <Avatar src="logo.jpg" />} */}
          </p>

        </Paper>

      );
    })}
    <p>
      <form onSubmit={props.submit}>
        
        <input type="text" value={props.text} onChange={props.change} />
        <button>Send</button>
      </form>
    </p>

  </div>
);

export default Conversation;
