import React from 'react';
import WebSocket from './';
import { SocketIO as socketIO, Server } from 'mock-socket';
import {webSocket} from '../config/';

const mockServer = new Server( webSocket.server);

describe('setting correctly the messages and emit to use in the socket client', ()=>{

    // beforeEach(() => {
    //   onSearch=jest.fn();
    // });

    it('reading messages for the socket client', () => {
      
      
       //expect(onSearch).toHaveBeenCalledTimes(1);
    });
});