import React from 'react';
import {
    LoadingOutlined, LogoutOutlined,
    UserOutlined,  UsergroupAddOutlined,
    IdcardOutlined,ShoppingCartOutlined,
    LineChartOutlined, ShoppingOutlined,
    ScheduleOutlined, BarsOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import Routes from "../constants/routes";
import {Link} from "react-router-dom";
import {useAuth} from "../providers/Auth";


const AuthSubmenu = ({ user_type } ) => {
    const {  isCheckingAuth, currentUser } = useAuth();

    if(user_type==='admin'){
        return(
            <Menu.SubMenu icon={ <UserOutlined /> } title={ currentUser && currentUser.name }>
                <Menu.Item key='setting:1'><ScheduleOutlined /> Pedidos</Menu.Item>
                <Menu.Item key='setting:2'><UsergroupAddOutlined /> Clientes</Menu.Item>
                <Menu.Item key='setting:3'><UsergroupAddOutlined /> Empleados</Menu.Item>
                <Menu.Item key='setting:4'><BarsOutlined /> Productos</Menu.Item>
                <Menu.Item key='setting:5'><LineChartOutlined /> Producción</Menu.Item>

                <Menu.Item key={ Routes.LOGIN }>
                    <Link to={ Routes.LOGOUT } className='logout-link'>
                        {
                            isCheckingAuth
                                ? <LoadingOutlined />
                                : <><LogoutOutlined /> Salir</>
                        }
                    </Link>
                </Menu.Item>
            </Menu.SubMenu>
        )
    }else{
        return(
            <Menu.SubMenu icon={ <UserOutlined /> } title={ currentUser && currentUser.name }>
                <Menu.Item key='setting:1'><IdcardOutlined /> Editar perfil</Menu.Item>
                <Menu.Item key='setting:2'><ShoppingCartOutlined /> Lista de pedidos</Menu.Item>
                <Menu.Item key='setting:3'><ShoppingOutlined /> Solicitar productos</Menu.Item>

                <Menu.Item key={ Routes.LOGIN }>
                    <Link to={ Routes.LOGOUT } className='logout-link'>
                        {
                            isCheckingAuth
                                ? <LoadingOutlined />
                                : <><LogoutOutlined /> Salir</>
                        }
                    </Link>
                </Menu.Item>
            </Menu.SubMenu>
        )
    }
}

export default AuthSubmenu;