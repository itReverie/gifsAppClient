import io from 'socket.io-client';
import {webSocket} from '../config/';

const socket = io(webSocket.server);

const init = (store) => {
  // add listeners to socket messages so we can re-dispatch them as actions
  Object.keys(webSocket.messages)
    .forEach(type => 
      socket.on(type, (favoriteGif) => store.dispatch({ type, favoriteGif })
    ))
}

const emit = (type, favoriteGif) => {
              socket.emit(type, favoriteGif)}

export {init,emit}
