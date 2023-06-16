import {
  DashboardOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  TagOutlined,
  OrderedListOutlined,
  UserOutlined,
  FileImageOutlined,
  QrcodeOutlined,
  ShopOutlined,
  GlobalOutlined,
  TeamOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
  {
    key: 'home',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'dashboard',
    path: `${APP_PREFIX_PATH}/dashboard`,
    title: 'Dashboard',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'catalog',
    title: 'Catalog',
    icon: AppstoreOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'products',
        path: `${APP_PREFIX_PATH}/catalog/products`,
        title: 'Products',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'categories',
        path: `${APP_PREFIX_PATH}/catalog/categories`,
        title: 'Categories',
        icon: TagOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'collections',
        path: `${APP_PREFIX_PATH}/catalog/collections`,
        title: 'Collections',
        icon: OrderedListOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'combo',
        path: `${APP_PREFIX_PATH}/catalog/combo`,
        title: 'Combo',
        icon: AppstoreOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  },
  {
    key: 'orders',
    path: `${APP_PREFIX_PATH}/orders`,
    title: 'Orders',
    icon: UserOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'clients',
    title: 'Clients',
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'clientsList',
        path: `${APP_PREFIX_PATH}/clients/list`,
        title: 'Clients List',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'clientsGroups',
        path: `${APP_PREFIX_PATH}/clients/groups`,
        title: 'Clients Groups',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  },
  {
    key: 'banners',
    path: `${APP_PREFIX_PATH}/banners`,
    title: 'Banners',
    icon: FileImageOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'promocodes',
    path: `${APP_PREFIX_PATH}/promocodes`,
    title: 'Promocodes',
    icon: QrcodeOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'offlinePoints',
    path: `${APP_PREFIX_PATH}/offline-points`,
    title: 'Offline Points',
    icon: ShopOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'addresses',
    path: `${APP_PREFIX_PATH}/addresses`,
    title: 'Addresses',
    icon: GlobalOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'geozones',
    path: `${APP_PREFIX_PATH}/geozones`,
    title: 'Geozones',
    icon: GlobalOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'employees',
    path: `${APP_PREFIX_PATH}/employees`,
    title: 'Employees',
    icon: TeamOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'mailings',
    path: `${APP_PREFIX_PATH}/mailings`,
    title: 'Mailings',
    icon: MailOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'system',
    title: 'System',
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'Settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mobileApps',
        path: `${APP_PREFIX_PATH}/system/mobile-apps`,
        title: 'Mobile Apps',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'Logs',
        icon: ExclamationCircleOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
