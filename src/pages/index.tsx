import { useSelector } from 'umi';

import styles from './index.less';

export default function IndexPage() {
  const text = 'hohoho';
  const app = useSelector((state) => state.app);

  console.log(app);

  return (
    <div>
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
}
