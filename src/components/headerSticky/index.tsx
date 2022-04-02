import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './index.less';

interface IProps {
  children: ReactNode;
  className?: string;
  noSticky?: boolean;
  noInterval?: boolean;
}

const HeaderSticky: FC<IProps> = ({
  children,
  className,
  noSticky,
  noInterval,
}) => {
  const intervalStyle = noInterval && {
    margin: 0,
    paddingBottom: 0,
  };

  return (
    <div
      className={styles.headerSticky}
      style={{
        position: noSticky ? 'relative' : 'sticky',
        ...(intervalStyle || {}),
      }}
    >
      <div className={classNames(styles.content, className)}>{children}</div>
    </div>
  );
};

export default HeaderSticky;
