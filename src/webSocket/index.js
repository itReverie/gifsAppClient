import {webSocket} from '../config/';
import io from 'socket.io-client';

const socket = io(webSocket.server);
let messages = [];

const init = (store) => {
              messages=[];
              // add listeners to socket messages so we can re-dispatch them as actions
              Object.keys(webSocket.messages)
                .forEach(type => 
                  socket.on(type, (favoriteGif) => store.dispatch({ type, favoriteGif })))
            }

const emit = (type, favoriteGif) => {
              messages.push(type,favoriteGif);
              socket.emit(type, favoriteGif)
            }


//This function is a helper for testing purposes
const getMessages = () => {
                return messages;};

export {init,emit, getMessages}
