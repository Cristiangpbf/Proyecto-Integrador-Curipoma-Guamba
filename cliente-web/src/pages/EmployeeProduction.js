import React, {useState} from 'react';
import CommentsList from '../components/CommentsList';
import {useProduct} from '../data/useProduct';
import ShowError from '../components/ShowError';
import withAuth from '../hocs/withAuth';
import {Link, useParams} from 'react-router-dom';
import {Button, Col, Divider, Form, Image, Input, message, Modal, Popover, Row, Select, Space, Spin, Table} from 'antd';
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Routes from "../constants/routes";
import {
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined, SaveOutlined
} from "@ant-design/icons";
import API from "../data";
import ErrorList from "../components/ErrorList";
import {translateMessage} from "../utils/translateMessage";
import {Option} from "antd/lib/mentions";
import {useEmployeeProduction} from "../data/useEmployeeProduction";
import {useEmployeesList} from "../data/useEmployeesList";
import {useEmployee} from "../data/useEmployee";
import TextArea from "antd/lib/input/TextArea";

const {confirm} = Modal;



const onFinish = async (id) => {
    console.log('Recibido id del registro prod', id);
    try {
        const production = await API.delete(`/productions/${id}`);
        console.log('Produccion eliminada', production);
        message.success(<>Producción eliminada correctamente</>)
        window.location.reload(false);
    } catch (e) {
        console.error('No se pudo eliminar el registro', e);
        const errorList = e.error && <ErrorList errors={e.error}/>;
        message.error(<>{translateMessage(e.message)}{errorList}</>);
    }
};



const EmployeeProduction = () => {

        let {id} = useParams();
        const employeeprod = useEmployeeProduction(id);
        const employee = useEmployee(id);
        const employees = useEmployeesList();

        const columns = [
            {
                title: 'Producto',
                dataIndex: 'product.name',
                key: 'product.name',
                render: (text, record) => (
                    <p>{record.product.name}</p>
                )
            }, {
                title: 'Cantidad',
                dataIndex: 'total_sales',
                key: 'total_sales'
            }, {
                title: 'Tiempo',
                dataIndex: 'time',
                key: 'time'
            }, {
                title: 'Litros',
                dataIndex: 'liters',
                key: 'liters'
            }, {
                title: 'Desempeño',
                dataIndex: 'performance',
                key: 'dni'
            }, {
                title: 'Fecha',
                dataIndex: 'date',
                key: 'date',
                render: (text, record) => (
                    <p>{record.date.substring(0, 10)}</p>
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

        const onChange = (e) => {
            return (
                <>
                    <Title style={{font: 500}}>El id es {e}</Title>
                </>
            )
        }

        return (
            <>
                <Row>
                    <Space size={"large"}>
                        <Col><Title level={4}>Empleado: </Title></Col>
                        <Col>
                            {
                                employee.isLoading
                                    ? <Paragraph> <Spin/>Cargando lista de empleados <Spin/></Paragraph>
                                    : employee.isError
                                    ? <ShowError error={employee.isError}/>
                                    : <Select onChange={onChange} defaultValue={employee.employee.id} style={{width: 300}}>
                                        {
                                            employees.isLoading
                                                ? <Option>Cargando...</Option>
                                                : employees.isError
                                                ? <ShowError error={employees.isError}/>
                                                : <>
                                                    {
                                                        employees.employees.map((emp, i) => (
                                                            <Option value={emp.id} key={i}>
                                                                <Link
                                                                    to={Routes.EMPLOYEE_PROD.replace(':id', emp.id)}>{emp.name}</Link>
                                                            </Option>
                                                        ))
                                                    }
                                                </>
                                        }
                                    </Select>
                            }

                        </Col>
                        {/*<Col>*/}
                        {/*    <Button type={"primary"}> Consultar Producción</Button>*/}
                        {/*</Col>*/}
                    </Space>
                </Row>
                <Row>
                    {
                        employeeprod.isLoading
                            ? <Row justify='center' gutter={30}>
                                <Table
                                    bordered
                                    loading={true}
                                    columns={columns}/>
                            </Row>
                            : employeeprod.isError
                            ? <ShowError error={employeeprod.isError}/>
                            : <Table bordered
                                     size={'small'}
                                     style={{marginTop: 30}}
                                     pagination={false}
                                     columns={columns}
                                     rowKey={record => record.id}
                                     dataSource={employeeprod.employeeprod}
                            />
                    }

                </Row>

            </>
        );

    }
;

export default (EmployeeProduction);