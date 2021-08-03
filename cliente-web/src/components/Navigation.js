/**
 * Created by cristiang on 2/7/20
 */
import React, { useState } from 'react';

import Routes from '../constants/routes';
import { useAuth } from '../providers/Auth';
import { Menu } from 'antd';
import { LogoutOutlined, LoginOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation.css';
import AuthSubmenu from "./AuthSubMenu";

const linkStyle = {};

const Navigation = ( props ) => {
  let location = useLocation();

  const { isAuthenticated, isCheckingAuth, currentUser } = useAuth();

  const [ menuState, setMenuState ] = useState( {
    current: location.pathname, // set the current selected item in menu, by default the current page
    collapsed: false,
    openKeys: []
  } );


  React.useEffect( () => {
    setMenuState( {
      ...menuState,
      current: location.pathname

    } );
  }, [ location, isAuthenticated ] );

  const handleClick = ( e ) => {
    console.log( 'click ', e );
    setMenuState( {
      ...menuState,
      current: e.key
    } );
  };

  return (
    <>
      <Menu
        mode={ props.mode }
        onClick={ handleClick }
        className='menu'
        theme='dark'
        selectedKeys={ [ menuState.current ] }
        style={ {
          lineHeight: '64px'
        } }
      >
        <Menu.Item key={ Routes.HOME }>
          <Link to={ Routes.HOME } style={ linkStyle }>Inicio</Link>
        </Menu.Item>

        <Menu.Item key={ Routes.PRODUCTS }>
          <Link to={ Routes.PRODUCTS } style={ linkStyle }>Productos</Link>
        </Menu.Item>

        <Menu.Item key={ Routes.CONTACT }>
          <Link to={ Routes.CONTACT } style={ linkStyle }>Contáctanos</Link>
        </Menu.Item>

        <Menu.Item key={ Routes.ABOUT }>
          <Link to={ Routes.ABOUT } style={ linkStyle }>About</Link>
        </Menu.Item>

        {
          isAuthenticated
            ? <AuthSubmenu user_type={currentUser.type}/>
            : <Menu.Item key={ Routes.LOGIN }>
              <Link to={ Routes.LOGIN }>
                {
                  isCheckingAuth
                    ? <LoadingOutlined />
                    : <><LoginOutlined /> Ingresar</>
                }
              </Link>
            </Menu.Item>
        }
      </Menu>
    </>
  );
};

export default Navigation;
