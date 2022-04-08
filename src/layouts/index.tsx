import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { FC, ReactNode } from 'react';
import { Location } from 'umi';

import BoxContainer from '@/components/boxContainer';

import Header from './components/header';
import Menu, { IRoute } from './components/menu';
import Theme from './components/theme';
import styles from './index.less';

interface IProps {
  children: ReactNode;
  route: IRoute;
  location: Location;
}

const Index: FC<IProps> = (props) => {
  const { route, location } = props;

  const calcRoute = (route: IRoute, path: string): undefined | IRoute => {
    if (route.path === path) {
      return route;
    } else if (route.routes) {
      const findRoute = route.routes.find((item) =>
        item.path?.startsWith(path),
      );

      if (findRoute && findRoute.path === path) {
        return findRoute;
      } else if (findRoute && findRoute.routes) {
        return calcRoute(findRoute, path);
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  };

  return (
    <ConfigProvider locale={zhCN}>
      <section className={styles.container}>
        <section className={styles.header}>
          <Header />
        </section>
        <section className={styles.body}>
          <section className={styles.slider}>
            <Menu route={route} />
          </section>
          <section className={styles.content}>
            {calcRoute(route, location.pathname)?.noBoxContainer ? (
              props.children
            ) : (
              <BoxContainer>{props.children}</BoxContainer>
            )}
          </section>
        </section>
      </section>
      <Theme />
    </ConfigProvider>
  );
};

export default Index;
