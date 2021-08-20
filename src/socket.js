import { io } from 'socket.io-client';

import {store} from './store';

class SocketioService {

    socket;

    setupSocketConnection() {

        this.socket = io("http://localhost:2000/");

        this.socket.on('notification', (data) => {

            store.commit('notifications',data)
        
        });
 
    }

}

export default new SocketioService();