/**
 * Created by cristiang on 17/01/2019.
 */

const publicRoutes = {
  LOGIN: '/ingreso',
  REGISTER: '/registro',
  ARTICLES: '/articulos',
  EMPLOYEE: '/empleado',
  EMPLOYEES: '/empleados',
  ORDER: '/orden',
  ORDERS: '/ordenes',
  CART: '/carrito',
  PRODUCT_ID: '/producto/:id',
  PRODUCTS: '/productos',
  USERS: '/usuarios',
  USERS_ID: `/usuario/:id`,
  HOME: '/',
  ABOUT: '/acerca-de',
  ANTD: '/antd',
  CONTACT: '/contacto',

  ADMIN_PEDIDOS: '/admin_pedidos',
  ADMIN_CLIENTES: '/admin_clientes',
  ADMIN_EMPLEADOS: '/admin_empleados',
  ADMIN_PRODUCTOS: '/admin_productos',
  ADMIN_PRODUCCION: '/admin_produccion',

  CLI_EDIT_PERFIL: '/cli_perfil',
  CLI_ORDERS_LIST: '/cli_lista_pedidos',
  CLI_NUEVO_PEDIDO: '/cli_productos'
};

const privateRoutes = {
  LOGOUT: '/logout',
  PRIVATE: '/privada',
  ARTICLE_ID: '/articulo/:id',
  NEW_PRODUCT:'/nuevo_producto'
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;
