import { Button, Pagination } from 'antd';
import { useSelector } from 'umi';

import HeaderSticky from '@/components/headerSticky';

import styles from './index.less';

export default function IndexPage() {
  const text = 'hohoho';
  const app = useSelector((state) => state.app);

  console.log(app);

  return (
    <>
      <HeaderSticky className={styles.header} noInterval noSticky>
        header
      </HeaderSticky>
      <div className={styles.content}>
        {text}
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
    </>
  );
}
