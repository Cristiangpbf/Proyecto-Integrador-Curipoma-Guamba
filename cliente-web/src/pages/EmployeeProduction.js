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
import {useEmployeesList} from "../data/useEmployeesList";
import {useEmployee} from "../data/useEmployee";

const {confirm} = Modal;

const onFinish = async (id) => {
    console.log('Recibido id del registro prod', id);
    try {
        const production = await API.delete(`/productions/${id}`);
        console.log('Produccion eliminada', production);
        message.success(<>Producción eliminada correctamente</>)
        window.location.reload(true);
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

                    </Space>
                </Row>
                <Row >
                    <Col span={24}>
                        <Link to={Routes.EMPLOYEE_PROD_NEW.replace(':id', id)}>
                            <Button style={{marginTop:15}} type={"primary"}> <PlusCircleOutlined /> Registrar producción </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    {
                        employeeprod.isLoading
                            ? <Row justify='center'>
                                <Table
                                    bordered style={{marginTop: 15}}
                                    loading={true}
                                    columns={columns}/>
                            </Row>
                            : employeeprod.isError
                            ? <ShowError error={employeeprod.isError}/>
                            : <Table bordered
                                     size={'small'}
                                     style={{marginTop: 15}}
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