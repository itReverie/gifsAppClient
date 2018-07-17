import io from 'socket.io-client'
import {messageTypes, uri} from '../config/webSocket';

const socket = io(uri)

const init = (store) => {
  // add listeners to socket messages so we can re-dispatch them as actions
  Object.keys(messageTypes)
    .forEach(type => 
      socket.on(type, (favoriteGif) => store.dispatch({ type, favoriteGif })
    ))
}

const emit = (type, favoriteGif) => {
              socket.emit(type, favoriteGif)}

export {init,emit}
