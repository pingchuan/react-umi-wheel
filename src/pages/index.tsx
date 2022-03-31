import 'antd/dist/antd.variable.min.css';

import { Button, ConfigProvider } from 'antd';
import { useSelector } from 'umi';

import styles from './index.less';

export default function IndexPage() {
  const text = 'hohoho';
  const app = useSelector((state) => state.app);

  console.log(app);

  return (
    <ConfigProvider>
      <Button
        type="primary"
        onClick={() => {
          ConfigProvider.config({
            theme: { primaryColor: 'red' },
          });
        }}
      >
        按钮
      </Button>
      <h1 className={styles.title}>{text}</h1>
    </ConfigProvider>
  );
}
