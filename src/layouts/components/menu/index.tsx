import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Menu as MenuAntd, Skeleton } from 'antd';
import { FC, useEffect, useState } from 'react';
import { history, IRoute as IRouteUmi, useLocation } from 'umi';

import Icon from '@/components/icon';

import styles from './index.less';

const { SubMenu, Item: MenuItem } = MenuAntd;

export type IRoute = IRouteUmi & {
  noBoxContainer?: boolean;
  isHidden?: boolean;
};

interface IProps {
  route: IRoute;
}

const MenuIndex: FC<IProps> = ({ route: routeProps }) => {
  const loading = false;
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState(false);

  const formateTitle = (title: string) => {
    if (loading) {
      return (
        <Skeleton.Button
          className={styles.skeleton}
          active
          block
          size="small"
        />
      );
    } else {
      return title;
    }
  };

  const generateMeunItem = (route: IRoute) => {
    const { title = '', path = '', icon = '', isHidden, component } = route;

    if (component && !isHidden) {
      return (
        <MenuItem
          key={path}
          icon={icon && <Icon type={icon} className={styles.icon} />}
          onClick={() => history.push(path)}
          disabled={loading}
        >
          {formateTitle(title)}
        </MenuItem>
      );
    } else {
      return null;
    }
  };

  const generateSubMenu = (route: IRoute) => {
    const {
      title = '',
      path = '',
      icon = '',
      routes,
      isHidden,
      component,
    } = route;

    if (component && !isHidden) {
      return (
        <SubMenu
          popupClassName={styles.popupClassName}
          key={path}
          title={formateTitle(title)}
          icon={icon && <Icon type={icon} className={styles.icon} />}
        >
          {routes?.map(generateMeunItem)}
        </SubMenu>
      );
    } else {
      return null;
    }
  };

  const generateMenu = (route: IRoute) => {
    return route.routes?.map((route) =>
      route.routes?.length ? generateSubMenu(route) : generateMeunItem(route),
    );
  };

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <MenuAntd
            className={styles.menu}
            mode="inline"
            theme="dark"
            selectedKeys={selectedKeys}
            inlineCollapsed={collapsed}
          >
            {generateMenu(routeProps)}
          </MenuAntd>
        </div>
        <div className={styles.footer} onClick={() => setCollapsed((v) => !v)}>
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </div>
      </div>
    </>
  );
};

export default MenuIndex;
