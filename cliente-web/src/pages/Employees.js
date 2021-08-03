import React from 'react';
import Routes from '../constants/routes';
import API from '../data/index';
import {Button, Card, Col, Form, Input, message, Popover, Row, Skeleton, Space, Table, Typography} from 'antd';
import {
    PlusCircleOutlined, LineChartOutlined, EditOutlined, PhoneOutlined, DeleteOutlined, BookOutlined
} from '@ant-design/icons';
import ErrorList from '../components/ErrorList';
import { translateMessage } from '../utils/translateMessage';
import '../styles/register.css';
import {useAuth} from "../providers/Auth";
import {Link} from "react-router-dom";
import {useEmployeesList} from "../data/useEmployeesList";
import ShowError from "../components/ShowError";

const { Title } = Typography;

const CliOrdersList = () => {

    const {employees, isLoading, isError } = useEmployeesList() ;

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name'
        },{
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email'
        },{
            title: 'Teléfono',
            dataIndex: 'phone',
            key: 'phone'
        },{
            title: 'Cédula',
            dataIndex: 'dni',
            key: 'dni'
        },{
            title: 'Creado el',
            dataIndex: 'created_at',
            key: 'created_at',
            render:(text, record)=>(
                <p>{record.created_at.substring(0,10)}</p>
            )
        },{
            title: 'Actualizado el',
            dataIndex: 'updated_at',
            key: 'updated_at',
            render:(text, record)=>(
                <p>{record.updated_at.substring(0,10)}</p>
            )
        },{
            title: 'Opciones',
            dataIndex: 'id',
            key: 'id',
            render: ( text, record) => (
                <Space size="small">
                    <Link >
                        <Popover title="Ver producción">
                            <Button><LineChartOutlined /></Button>
                        </Popover>
                    </Link>
                    <Link to={ Routes.EDIT_EMPLOYEE_ID.replace( ':id', record.id )}>
                        <Popover title="Editar Perfil">
                            <Button><EditOutlined /></Button>
                        </Popover>
                    </Link>
                    <Link>
                        <Popover title="Eliminar este Empleado">
                            <Button onClick={()=>{console.log(`El id de este elemento es `, record.id)}} ><DeleteOutlined /></Button>
                        </Popover>

                    </Link>

                </Space>
            ),
        },
    ];

    if( isLoading ) {
        return <Row justify='center' gutter={ 30 }>
            <Table
                bordered
                loading={true}
                columns={columns}  />
        </Row>;
    }

    if( isError ) {
        return <ShowError error={ isError } />;
    }

    return (
        <>
            {console.log(employees)}
            <Title style={ { textAlign: 'center' } }>LISTA DE EMPLEADOS</Title>
            <Link to={Routes.NEW_EMPLOYEE}><Button type={"primary"}><PlusCircleOutlined />Nuevo empleado</Button></Link>
            <Table bordered
                   size={'small'}
                   pagination={false}
                   columns={columns}
                   rowKey={record=>record.id}
                   dataSource={employees}  />

        </>
    );
};

export default ( CliOrdersList );
