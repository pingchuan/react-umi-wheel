import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';

import styles from './index.less';

const Header = () => {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <img
          className={styles.logo}
          src="https://qcloudimg.tencent-cloud.cn/raw/32ae09e7febd7d97b4591d8dbea5876e.png"
          alt="logo"
        />
        <span>智能网联监控中心后台管理系统</span>
      </section>
      <section className={styles.extend} />
      <section className={styles.right}>
        <Badge count={500000} offset={[8, 0]} className={styles.badge}>
          <BellOutlined className={styles.message} />
        </Badge>
        <Avatar
          className={styles.avatar}
          size={36}
          icon={<UserOutlined />}
          src="https://main.qcloudimg.com/raw/74dd1a419882a1660ea9eb3e4bbf76b6.png"
        />
        <div>admin</div>
      </section>
    </div>
  );
};

export default Header;
