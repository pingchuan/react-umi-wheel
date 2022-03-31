import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu as MenuAntd } from 'antd';

import styles from './index.less';

const { SubMenu, Item: MenuItem } = MenuAntd;

const Menu = () => {
  return (
    <MenuAntd
      className={styles.menu}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
    >
      <MenuItem key="1" icon={<PieChartOutlined />}>
        Option 1
      </MenuItem>
      <MenuItem key="2" icon={<DesktopOutlined />}>
        Option 2
      </MenuItem>
      <MenuItem key="3" icon={<ContainerOutlined />}>
        Option 3
      </MenuItem>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <MenuItem key="5">Option 5</MenuItem>
        <MenuItem key="6">Option 6</MenuItem>
        <MenuItem key="7">Option 7</MenuItem>
        <MenuItem key="8">Option 8</MenuItem>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <MenuItem key="9">Option 9</MenuItem>
        <MenuItem key="10">Option 10</MenuItem>
        <SubMenu key="sub3" title="Submenu">
          <MenuItem key="11">Option 11</MenuItem>
          <MenuItem key="12">Option 12</MenuItem>
        </SubMenu>
      </SubMenu>
    </MenuAntd>
  );
};

export default Menu;
