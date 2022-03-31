import { Spin } from 'antd';
import { FC } from 'react';

import styles from './index.less';

interface Props {
  tip?: string;
}

const PageLoading: FC<Props> = ({ tip = '页面加载中...' }) => {
  return (
    <div className={styles.content}>
      <Spin tip={tip}></Spin>
    </div>
  );
};

export default PageLoading;
