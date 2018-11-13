export class WebSocketHelper {
  socket = null;
  isCloseManual = false;
  open(url) {
    this.socket = new WebSocket(url);
    this.socket.onopen = function() {
      console.log('建立连接');
    };
    this.socket.onmessage = (evt) => {
      this.onMessage(evt.data);
    };
    this.socket.onclose = () => {
      // setTimeout(() => {
      //   if (!this.isCloseManual) {
      //     this.open(url);
      //     console.log('尝试再次建立连接');
      //   }
      // }, 500);
    };
  }

  onMessage(message) {}

  close() {
    this.isCloseManual = true;
    this.socket.close();
    console.log('用户手工关闭连接');
  }
}
