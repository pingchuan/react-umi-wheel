export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        title: '首页',
        path: '/home',
        component: 'home',
        icon: 'icon-shujukanban',
      },
      {
        title: '产品管理',
        path: '/productManagement',
        component: 'productManagement',
        icon: 'icon-chanpinguanli',
      },
      {
        title: '设备管理',
        path: '/deviceManagement',
        component: 'home',
        icon: 'icon-shebeiguanli',
      },
      {
        title: '数据管理',
        path: '/DataManagement',
        component: 'home',
        icon: 'icon-shujuguanli',
      },
      {
        title: '版本管理',
        path: '/versionManagement',
        component: 'home',
        icon: 'icon-banbenguanli',
      },
      {
        title: '固件管理',
        path: '/firmwareManagement',
        component: 'home',
        icon: 'icon-gujianguanli',
      },
      {
        title: '事件管理',
        path: '/incidentManagement',
        component: 'home',
        icon: 'icon-shijianguanli',
      },
      {
        title: '系统管理',
        path: '/systemManagement',
        component: 'home',
        icon: 'icon-xitongguanli',
      },
      {
        title: '订阅推送',
        path: '/subscribe',
        component: 'home',
        icon: 'icon-xiaoxidingyue',
      },
      {
        title: '无包裹路由',
        path: '/noBoxContainer',
        component: 'home',
        icon: 'icon-shujukanban',
        noBoxContainer: true,
      },
      // {
      //   title: '隐藏路由',
      //   path: '/hidden',
      //   component: 'home',
      //   icon: '',
      //   isHidden: true,
      // },
      // {
      //   title: '扩展二级',
      //   path: '/extend',
      //   component: 'home',
      //   icon: 'icon-xitongguanli',
      //   routes: [
      //     {
      //       title: '子菜单一',
      //       path: '/extend/one',
      //       component: 'home',
      //       icon: 'icon-xitongguanli',
      //     },
      //     {
      //       title: '子菜单二',
      //       path: '/extend/two',
      //       component: 'home',
      //       icon: 'icon-xitongguanli',
      //     },
      //   ],
      // },
    ],
  },
];
