import 'antd/dist/antd.variable.min.css';

import { Button, ConfigProvider, Pagination } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import Menu from './components/menu';
import Theme from './components/theme';
import styles from './index.less';
const Index = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <section className={styles.container}>
        <section className={styles.header}>Header</section>
        <section className={styles.body}>
          <section className={styles.slider}>
            <Menu />
          </section>
          <section className={styles.content}>
            <div>
              {/* <Button
                type="primary"
                onClick={() => {
                  ConfigProvider.config({
                    theme: { primaryColor: 'red' },
                  });
                }}
              >
                换肤
              </Button> */}
              <Theme />
              Content
              <br />
              <br />
              <br />
              a
              <br />
              <br />
              a
              <br />
              <br />
              a
              <br />
              <br />
              a
              <br />
              <br />
              a
              <br />
              <br />
              a
              <br />
              <br />
              a
              <br />
              <br />
              a
              <br />
              <br />
              <Button type="primary">test</Button>
              <Pagination defaultCurrent={1} total={50} />
              <br />
              <br />
              a
              <br />
              <br />
              a
              <br />
              <br />
              a
              <br />
              <br />
              a
              <br />
            </div>
          </section>
        </section>
      </section>
    </ConfigProvider>
  );
};

export default Index;
