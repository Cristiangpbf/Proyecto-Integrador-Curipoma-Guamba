import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Routes from '../constants/routes';
import NotFoundPage from '../pages/NotFoundPage';
import Loading from '../components/Loading';

/**
 * El módulo loadable (https://loadable-components.com/docs/code-splitting/)
 * Permite dividir los componentes en diferentes "bundles" (archivos js compilados)
 * de esta manera la aplicación puede ir cargando los compoenentes bajo demanda.
 * Solo cargará los componentes que sean utilizados por el usuario.
 *
 * Esto acelera la carga de la aplicación ya que de lo contrario tendríamos un solo
 * bundle de gran tamaño y el navegador demoraría en descargarlo para renderizar la aplicación.
 *
 * @type {{fallback: JSX.Element}}
 */
const loadableOptions = { fallback: <Loading /> };

//Hacer referencia a las páginas.
const AsyncHome = loadable( () => import( '../pages/Index' ), loadableOptions );
const AsyncLogin = loadable( () => import( '../pages/Login' ), loadableOptions );
const AsyncRegister = loadable( () => import( '../pages/Register' ), loadableOptions );
// const AsyncArticles = loadable( () => import( '../pages/Products' ), loadableOptions );
// const AsyncArticle = loadable( () => import( '../pages/Article' ), loadableOptions );
const AsyncEmployee = loadable( () => import( '../pages/Employee' ), loadableOptions );
const AsyncEmployees = loadable( () => import( '../pages/Employees' ), loadableOptions );
const AsyncProduct = loadable( () => import( '../pages/ProductDetail' ), loadableOptions );
const AsyncProducts = loadable( () => import( '../pages/Products' ), loadableOptions );
const AsyncCart = loadable( () => import( '../pages/Cart' ), loadableOptions );

const AsyncNewProduct = loadable( () => import( '../pages/NewProduct' ), loadableOptions );
const AsyncOrder = loadable( () => import( '../pages/Order' ), loadableOptions );
const AsyncOrders = loadable( () => import( '../pages/Orders' ), loadableOptions );
const AsyncAbout = loadable( () => import( '../pages/About' ), loadableOptions );
const AsyncContact = loadable( () => import( '../pages/Contact' ), loadableOptions );

const AsyncLogout = loadable( () => import( '../pages/Logout' ), loadableOptions );

const AsynCliEditPerfil = loadable( () => import( '../pages/CliEditPerfil' ), loadableOptions );
const AsynCliOrdersList = loadable( () => import( '../pages/CliOrdersList' ), loadableOptions );


/**
 * Este es el componente que se encarga de renderizar el componente adecuado
 * de acuerdo a la ruta en la que se encuentra el navegador.
 * <Switch> https://reactrouter.com/web/api/Switch
 * <PublicRoute> Utilizado para las páginas que son accesibles por todos los usuarios.
 * <PrivateRoute> Utilizado para lás páginas que son protegidas,
 *                este componente valida si existe una sesión activa.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter = () => (
  <Switch>
    <PublicRoute exact path={ Routes.HOME } component={ AsyncHome } />
    <PublicRoute path={ Routes.LOGIN } component={ AsyncLogin } />
    <PublicRoute path={ Routes.REGISTER } component={ AsyncRegister } />
    {/*<PublicRoute path={ Routes.ARTICLES } component={ AsyncArticles } />*/}
    <PublicRoute path={ Routes.ABOUT } component={ AsyncAbout } />
    <PublicRoute path={ Routes.EMPLOYEE } component={ AsyncEmployee } />
    <PublicRoute path={ Routes.EMPLOYEES } component={ AsyncEmployees } />
    <PublicRoute path={ Routes.ORDER } component={ AsyncOrder } />
    <PublicRoute path={ Routes.ORDERS } component={ AsyncOrders } />
    <PublicRoute path={ Routes.PRODUCT_ID } component={ AsyncProduct } />
    <PublicRoute path={ Routes.PRODUCTS } component={ AsyncProducts } />
    <PublicRoute path={ Routes.CART } component={ AsyncCart } />
    <PublicRoute path={ Routes.CONTACT } component={ AsyncContact } />
    <PublicRoute path={ Routes.NEW_PRODUCT } component={ AsyncNewProduct } />
    {/*<PrivateRoute path={ Routes.PRIVATE } component={ AsyncPrivate } />*/}
    {/*<PrivateRoute path={ Routes.ARTICLE_ID } component={ AsyncArticle } />*/}
    <PrivateRoute path={ Routes.LOGOUT } component={ AsyncLogout } />

    <PrivateRoute path={ Routes.CLI_EDIT_PERFIL } component={ AsynCliEditPerfil } />
    <PrivateRoute path={ Routes.CLI_ORDERS_LIST } component={ AsynCliOrdersList } />

    <Route component={ NotFoundPage } />
  </Switch>
);

export default AppRouter;
