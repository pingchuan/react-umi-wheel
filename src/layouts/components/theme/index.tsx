import { CheckOutlined } from '@ant-design/icons';
import { ConfigProvider, Popover } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

import Icon from '@/components/icon';

import styles from './index.less';

const defaultTheme = '#1890ff';

const Theme = () => {
  const [color, setColor] = useState(
    localStorage.getItem('theme') || defaultTheme,
  );
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    if (visible) {
      localStorage.setItem('theme', color);
      setVisible((v) => !v);
    } else {
      setVisible((v) => !v);
    }
  };

  const setDefaultClick = () => {
    localStorage.setItem('theme', defaultTheme);
    setColor(defaultTheme);
  };

  useEffect(() => {
    ConfigProvider.config({
      theme: { primaryColor: color },
    });
  }, [color]);

  return (
    <>
      <Popover
        content={<HexColorPicker color={color} onChange={setColor} />}
        trigger="click"
        onVisibleChange={setVisible}
        overlayClassName={styles.overlay}
        placement="rightBottom"
        visible={visible}
      >
        <div className={styles.flex}>
          {visible && (
            <a
              className={classNames(styles.button, styles.default)}
              onClick={setDefaultClick}
            >
              默认
            </a>
          )}
          <a className={styles.button} onClick={onClick}>
            {visible ? (
              <CheckOutlined />
            ) : (
              <Icon type="icon-mofabang" className={styles.icon} />
            )}
          </a>
        </div>
      </Popover>
    </>
  );
};

export default Theme;
