import React from 'react';
import Routes from '../constants/routes';
import API from '../data/index';
import {Button, Col, Form, Input, message, Row, Space, Table, Typography} from 'antd';
import {
    UserOutlined, TeamOutlined, IdcardOutlined, PhoneOutlined, HomeOutlined
} from '@ant-design/icons';
import ErrorList from '../components/ErrorList';
import { translateMessage } from '../utils/translateMessage';
import '../styles/register.css';
import {useAuth} from "../providers/Auth";

const { Title } = Typography;

const CliOrdersList = () => {

    const columns = [
        {
            title: 'Estado',
            dataIndex: 'name',
            key: 'name'
        },{
            title: 'Producto',
            dataIndex: 'product',
            key: 'name'
        },{
            title: 'Cantidad',
            dataIndex: 'amount',
            key: 'name'
        },{
            title: 'Fecha Solicitud',
            dataIndex: 'order_date',
            key: 'name'
        },{
            title: 'Fecha Entrega',
            dataIndex: 'delivery_date',
            key: 'name'
        },{
            title: 'Opciones',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Space size="middle">
                    <a>Ver más</a>
                    <a>Borrar</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            product: 'Conos',
            amount: '3',
            order_date: '01/01/2021',
            delivery_date: '01/02/2021'
        }]

    return (
        <>
            <Title style={ { textAlign: 'center' } }>LISTA DE PEDIDOS</Title>

            <Table columns={columns} dataSource={data} />

        </>
    );
};

export default ( CliOrdersList );
