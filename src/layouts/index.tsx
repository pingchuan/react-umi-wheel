import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { ReactElement } from 'react';

import Header from './components/header';
import Menu from './components/menu';
import Theme from './components/theme';
import styles from './index.less';
const Index = ({ children }: { children: ReactElement }) => {
  return (
    <ConfigProvider locale={zhCN}>
      <section className={styles.container}>
        <section className={styles.header}>
          <Header />
        </section>
        <section className={styles.body}>
          <section className={styles.slider}>
            <Menu />
          </section>
          <section className={styles.content}>{children}</section>
        </section>
      </section>
      <Theme />
    </ConfigProvider>
  );
};

export default Index;
