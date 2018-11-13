import * as React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Input, Button } from 'antd';
import { namespace } from '../models/model';

function Component(props) {
  function onOpen() {
    props.dispatch({
      type: `${namespace}/onOpen`,
      payload: {},
    });
  }

  function onSend() {
    props.dispatch({
      type: `${namespace}/onSend`,
      payload: {},
    });
  }

  function onClose() {
    props.dispatch({
      type: `${namespace}/onClose`,
      payload: {},
    });
  }

  return (
    <div className={styles.normal}>
      <Input.TextArea>{props.text}</Input.TextArea>
      <Button onClick={onOpen}>连接</Button>
      <Button onClick={onSend}>发送数据</Button>
      <Button onClick={onClose}>断开</Button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    data: state[namespace],
  };
};

export default connect(mapStateToProps)(Component);
