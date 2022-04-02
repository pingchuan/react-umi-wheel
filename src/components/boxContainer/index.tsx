import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './index.less';

interface IProps {
  children: ReactNode;
  className?: string;
}

const BoxContainer: FC<IProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.boxContainer, className)}>
      {children}
      <div className={styles.block}></div>
    </div>
  );
};

export default BoxContainer;
