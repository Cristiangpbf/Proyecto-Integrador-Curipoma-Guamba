import React from 'react';
import ShowError from '../components/ShowError';
import {Link, useParams} from 'react-router-dom';
import {Button, Col, message, Modal, Popover, Row, Select, Space, Spin, Table} from 'antd';
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Routes from "../constants/routes";
import {DeleteOutlined,PlusCircleOutlined, EditOutlined,ExclamationCircleOutlined } from "@ant-design/icons";
import API from "../data";
import ErrorList from "../components/ErrorList";
import {translateMessage} from "../utils/translateMessage";
import {Option} from "antd/lib/mentions";
import {useEmployeeProduction} from "../data/useEmployeeProduction";
import {useOrdersAdmin} from "../data/useOrdersAdmin";

const {confirm} = Modal;

const onFinish = async (id) => {
    console.log('Recibido id del registro prod', id);
    try {
        const production = await API.delete(`/productions/${id}`);
        console.log('Produccion eliminada', production);
        message.success(<>Orden eliminada correctamente</>)
        window.location.reload(true);
    } catch (e) {
        console.error('No se pudo eliminar el registro', e);
        const errorList = e.error && <ErrorList errors={e.error}/>;
        message.error(<>{translateMessage(e.message)}{errorList}</>);
    }
};



const AdminOrders = () => {

        let {id} = useParams();
        const orders = useOrdersAdmin();

        const columns = [
            {
                title: 'Cliente',
                dataIndex: 'user.name',
                key: 'user.name',
                render: (text, record) => (
                    <p>{record.user.name}</p>
                )
            },{
                title: 'Estado',
                dataIndex: 'state',
                key: 'state'
            }, {
                title: 'Fecha de entrega',
                dataIndex: 'delivery_date',
                key: 'delivery_date'
            }, {
                title: 'Orden generada el',
                dataIndex: 'created_at',
                key: 'created_at',
                render: (text, record) => (
                    <p>{record.created_at.substring(0, 10)}</p>
                )
            }, {
                title: 'Ultima actualización',
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
                        <Link to={Routes.EMPLOYEE_PROD_EDIT.replace(':id', record.id)}>
                            <Popover title="Editar este registro">
                                <Button shape="circle" ><EditOutlined/></Button>
                            </Popover>
                        </Link>
                        <Popover title="Eliminar este registro">
                            <Button shape="circle" danger
                                    onClick={
                                        function showConfirm(id) {
                                            confirm({
                                                title: '¿Está seguro de quiere eliminar este registro?',
                                                icon: <ExclamationCircleOutlined/>,
                                                content: 'Esta acción no se puede deshacer',
                                                onOk() {
                                                    onFinish(record.id)
                                                    // console.log(record)
                                                },
                                                onCancel() {
                                                },
                                            });
                                        }}
                            ><DeleteOutlined style={{color: "red"}}/></Button>
                        </Popover>


                    </Space>
                ),
            },
        ];

        // const onChange = (e) => {
        //     return (
        //         <>
        //             <Title style={{font: 500}}>El id es {e}</Title>
        //         </>
        //     )
        // }

        return (
            <>
                {/*Filtrado Futuro*/}
                {/*<Row>*/}
                {/*    <Space size={"large"}>*/}
                {/*        <Col><Title level={4}>Estados: </Title></Col>*/}
                {/*        <Col>*/}
                {/*            {*/}
                {/*                orders.isLoading*/}
                {/*                    ? <Paragraph> <Spin/>Cargando lista de empleados <Spin/></Paragraph>*/}
                {/*                    : orders.isError*/}
                {/*                    ? <ShowError error={orders.isError}/>*/}
                {/*                    : <Select defaultValue={orders.orders.id} style={{width: 300}}>*/}
                {/*                        {*/}
                {/*                            orders.isLoading*/}
                {/*                                ? <Option>Cargando...</Option>*/}
                {/*                                : orders.isError*/}
                {/*                                ? <ShowError error={orders.isError}/>*/}
                {/*                                : <>*/}
                {/*                                    {*/}
                {/*                                        orders.orders.map((emp, i) => (*/}
                {/*                                            <Option value={emp.id} key={i}>*/}
                {/*                                                <Link*/}
                {/*                                                    to={Routes.EMPLOYEE_PROD.replace(':id', emp.id)}>{emp.id}</Link>*/}
                {/*                                            </Option>*/}
                {/*                                        ))*/}
                {/*                                    }*/}
                {/*                                </>*/}
                {/*                        }*/}
                {/*                    </Select>*/}
                {/*            }*/}

                {/*        </Col>*/}

                {/*    </Space>*/}
                {/*</Row>*/}
                <Row >
                    <Col span={24}>
                        <Link to={Routes.EMPLOYEE_PROD_NEW.replace(':id', id)}>
                            <Button style={{marginTop:15}} type={"primary"}> <PlusCircleOutlined /> Registrar una orden </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    {
                        orders.isLoading
                            ? <Row justify='center'>
                                <Table
                                    bordered style={{marginTop: 15}}
                                    loading={true}
                                    columns={columns}/>
                            </Row>
                            : orders.isError
                            ? <ShowError error={orders.isError}/>
                            : <Table bordered
                                     size={'small'}
                                     style={{marginTop: 15}}
                                     pagination={false}
                                     columns={columns}
                                     rowKey={record => record.id}
                                     dataSource={orders.orders}
                                     expandable={{
                                         expandedRowRender: record => <p>{record.comment}</p>,
                                         rowExpandable: record => record.comment !== null,
                                         childrenColumnName: 'Comnetario'
                                     }}
                            />
                    }

                </Row>

            </>
        );

    }
;

export default (AdminOrders);