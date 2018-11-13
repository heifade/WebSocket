export const namespace = 'index';

import { WebSocketHelper } from '../utils/WebSocketHelper';

const webSocketURL = 'ws://ip:8080/websocket';

// const socket = WebSocketHelper(webSocketURL);
// socket.onopen = function() {};
// socket.onmessage = function(evt) {
//   console.log('数据已接收', evt.data);
// };
// socket.onclose = function() {
//   console.log('连接已关闭');

//   socket = openWebSocket(webSocketURL);
// };

class W extends WebSocketHelper {
  onMessage(msg) {
    console.log('收到消息', msg);
  }
}

let w = new W();

export default {
  namespace,
  state: {},

  subscriptions: {
    setup({ dispatch, history }, done) {},
  },

  effects: {
    *onOpen({ payload }, { put, call, select }) {
      // socket.send('发送数据');
      // console.log('数据发送中...');
      w.open(webSocketURL);
    },

    *onSend({ payload }, { put, call, select }) {
      // socket.send('发送数据');
      console.log('数据发送中...');
    },

    *onClose({ payload }, { put, call, select }) {
      w.close();
    },
  },

  reducers: {
    // 打开时填充数据
    show(state, { payload }) {
      return {
        ...state,
        user: payload,
      };
    },
  },
};
