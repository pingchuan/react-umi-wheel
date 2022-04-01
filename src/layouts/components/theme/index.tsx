import { CheckOutlined } from '@ant-design/icons';
import { ConfigProvider, Popover } from 'antd';
import { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

import Icon from '@/components/icon';

import styles from './index.less';

const Theme = () => {
  const [color, setColor] = useState('#1890ff');
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    if (visible) {
      console.log(color);
      setVisible((v) => !v);
    } else {
      setVisible((v) => !v);
    }
  };

  useEffect(() => {
    ConfigProvider.config({
      theme: { primaryColor: color },
    });
  }, [color]);

  return (
    <Popover
      content={<HexColorPicker color={color} onChange={setColor} />}
      trigger="click"
      onVisibleChange={setVisible}
      overlayClassName={styles.overlay}
      placement="rightBottom"
      visible={visible}
    >
      <a className={styles.button} onClick={onClick}>
        {visible ? (
          <CheckOutlined />
        ) : (
          <Icon type="icon-mofabang" className={styles.icon} />
        )}
      </a>
    </Popover>
  );
};

export default Theme;
