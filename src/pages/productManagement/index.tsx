import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import HeaderSticky from '@/components/headerSticky';

import styles from './index.less';
import { IProduct } from './type';

const ProductManagement = () => {
  const columns: ColumnsType<IProduct> = [
    {
      title: '产品ID',
      dataIndex: 'id',
    },
    {
      title: '产品名称',
      dataIndex: 'name',
    },
    {
      title: '产品类型',
      dataIndex: 'type',
    },
    {
      title: '所属单位/公司',
      dataIndex: 'org',
    },
    {
      title: '接入协议',
      dataIndex: 'protocol',
    },
    {
      title: '设备总数',
      dataIndex: 'count',
    },
    {
      width: 240,
      title: '操作',
      dataIndex: 'operate',
      render: () => {
        return (
          <Space className={styles.space} size={24}>
            <Button type="link">查看详情</Button>
            <Button type="link">设备管理</Button>
            <Button type="link" danger>
              删除
            </Button>
          </Space>
        );
      },
    },
  ];
  const dataSource: IProduct[] = new Array(100)
    .fill(undefined)
    .map((_, index) => {
      return {
        id: `${index + 1}`,
        name: ['毫米波雷达TMSR300', '边缘计算一体机'][index % 2],
        type: ['平台自有', '用户自定义'][index % 2],
        org: ['理工睿行', '理工雷科'][index % 2],
        protocol: ['MQTT', 'HTTP'][index % 2],
        count: 1000 % (index * 5 + 1),
      };
    });

  return (
    <>
      <HeaderSticky>产品管理</HeaderSticky>
      <section className={styles.desc}>
        <div>概念介绍</div>
        <div>
          产品是一组具有相同功能定义的设备集合。本平台对产品划分了两种类型：平台自有型和用户自定义。平台自有产品是已经完成了研发、生产、交付的成熟产品。本平台已经实现了接入功能，用户只需联网后激活即可，但需要购买相应的硬件/软件产品。平台已有产品列表见详情》。用户自定义产品需要用户自定义产品的相关功能模块，利用平台提供的SDK进行二次开发后接入。
        </div>
      </section>
      <div className={styles.content}>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
};

export default ProductManagement;
