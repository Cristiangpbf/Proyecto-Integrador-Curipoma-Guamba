import React from 'react';
import Routes from '../constants/routes';
import API from '../data/index';
import {Button, message, Modal, Popover, Row,  Space, Table, Typography} from 'antd';
import {
    PlusCircleOutlined,
    LineChartOutlined,
    EditOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons';
import ErrorList from '../components/ErrorList';
import {translateMessage} from '../utils/translateMessage';
import '../styles/register.css';
import {Link} from "react-router-dom";
import {useEmployeesList} from "../data/useEmployeesList";
import ShowError from "../components/ShowError";

const {Title} = Typography;

const {confirm} = Modal;

const onFinish = async (id) => {
    console.log('Recibido id del empleado', id);
    try {
        const prodDel = await API.delete(`/employees/${id}`);
        console.log('Empleado eliminado', prodDel);
        message.success(<>Empleado eliminado correctamente</>)
        window.location.reload(true);
    } catch (e) {
        console.error('No se pudo eliminar el Producto', e);
        const errorList = e.error && <ErrorList errors={e.error}/>;
        message.error(<>{translateMessage(e.message)}{errorList}</>);
    }
};

const EmployeesList = () => {

    const {employees, isLoading, isError} = useEmployeesList();

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email'
        }, {
            title: 'Teléfono',
            dataIndex: 'phone',
            key: 'phone'
        }, {
            title: 'Cédula',
            dataIndex: 'dni',
            key: 'dni'
        }, {
            title: 'Creado el',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (text, record) => (
                <p>{record.created_at.substring(0, 10)}</p>
            )
        }, {
            title: 'Actualizado el',
            dataIndex: 'updated_at',
            key: 'updated_at',
            render: (text, record) => (
                <p>{record.updated_at.substring(0, 10)}</p>
            )
        }, {
            title: 'Opciones',
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => (
                <Space size="small">
                    <Link to={Routes.EMPLOYEE_PROD.replace(':id', record.id)}>
                        <Popover title="Ver producción">
                            <Button shape="circle" type={"primary"}><LineChartOutlined/></Button>
                        </Popover>
                    </Link>
                    <Link to={Routes.EDIT_EMPLOYEE_ID.replace(':id', record.id)}>
                        <Popover title="Editar Perfil">
                            <Button shape="circle"><EditOutlined/></Button>
                        </Popover>
                    </Link>
                    <Popover title="Eliminar este Empleado">
                        <Button shape="circle" danger onClick={
                            function showConfirm(id) {
                                confirm({
                                    title: '¿Está seguro de quiere eliminar este producto?',
                                    icon: <ExclamationCircleOutlined/>,
                                    content: 'Esta acción no se puede deshacer',
                                    onOk() {
                                        onFinish(record.id)
                                    },
                                    onCancel() {
                                    },
                                });
                            }
                        }><DeleteOutlined style={{color: "red"}}/></Button>
                    </Popover>


                </Space>
            ),
        },
    ];

    if (isLoading) {
        return <Row justify='center' gutter={30}>
            <Table
                bordered
                loading={true}
                columns={columns}/>
        </Row>;
    }

    if (isError) {
        return <ShowError error={isError}/>;
    }

    return (
        <>
            <Title style={{textAlign: 'center'}}>LISTA DE EMPLEADOS</Title>
            <Link to={Routes.NEW_EMPLOYEE}><Button style={{marginBottom: 30}} type={"primary"}><PlusCircleOutlined/>Nuevo
                empleado</Button></Link>
            <Table bordered
                   size={'small'}
                   pagination={false}
                   columns={columns}
                   rowKey={record => record.id}
                   dataSource={employees}/>

        </>
    );
};

export default (EmployeesList);
