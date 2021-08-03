import React from 'react';
import ShowError from '../components/ShowError';
import withAuth from '../hocs/withAuth';
import {Link, useParams} from 'react-router-dom';
import {Button, Col, Divider, Form, Image, Input, InputNumber, message, Row, Select, Skeleton, Typography} from 'antd';
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import {useAuth} from "../providers/Auth";
import Routes from "../constants/routes";
import {ShoppingCartOutlined} from "@ant-design/icons";
import API from "../data";
import ErrorList from "../components/ErrorList";
import {translateMessage} from "../utils/translateMessage";
import {Option} from "antd/lib/mentions";
import TextArea from "antd/lib/input/TextArea";
import {useEmployee} from "../data/useEmployee";

const ProductEdit = () => {

        const auth = useAuth();
        let {id} = useParams();
        const [form] = Form.useForm();
        const employee = useEmployee(id);

        const onFinish = async (employeeData) => {
            console.log( 'Recibidos valores del form en onFinish ', employeeData );
            const { name, email, phone, dni} = employeeData;
            try{
                const empleado = await API.put(`/employees/${employee.employee.id}`, {
                    name, email, phone, dni
                });
                console.log('Empleado', empleado);
                message.success(<>Empleado editado correctamente</>)
            }catch (e){
                console.error( 'No se pudo editar el Empleado', e );
                const errorList = e.error && <ErrorList errors={ e.error } />;
                message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
            }
        };

        return (
            <>
                {
                    employee.isLoading
                        ? <div>Cargando...</div>
                        : employee.isError
                        ? <ShowError error={employee.isError}/>
                        : <>
                            <Form name='form'
                                  form={form}
                                  className='form'
                                  onFinish={ onFinish }
                                  initialValues={{
                                      name: `${employee.employee.name}`,
                                      email: `${employee.employee.email}`,
                                      phone: `${employee.employee.phone}`,
                                      dni: `${employee.employee.dni}`
                                  }}
                            >
                                <Row justify={"center"}>
                                    <Col span={12}>
                                        <Row>
                                            <Col span={12}>
                                                <Title style={{textAlign: 'end'}} level={5}>Nombre del empleado <Divider type={"vertical"}/></Title>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item name='name'
                                                           rules={[
                                                               {
                                                                   required: true,
                                                                   message: 'Ingresrar un nombre par el empleado'
                                                               }
                                                           ]}
                                                           hasFeedback                                                >
                                                    <Input placeholder='Nombre'/>
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={12}><Title style={{textAlign: 'end'}} level={5}>E-mail<Divider type={"vertical"}/></Title></Col>

                                            <Col span={12}>
                                                <Form.Item name='email'
                                                           rules={[
                                                               {
                                                                   required: true,
                                                                   message: 'Ingrese un email para el empleado'
                                                               }
                                                           ]}
                                                           hasFeedback
                                                >
                                                    <Input placeholder={'e-mail'}/>
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Teléfono <Divider
                                                type={"vertical"}/></Title></Col>

                                            <Col span={12}>
                                                <Form.Item name='phone'
                                                           rules={ [
                                                               {
                                                                   required: true,
                                                                   message: 'Ingrese un número de teléfono'
                                                               }
                                                           ] }
                                                           hasFeedback
                                                >
                                                    <Input placeholder='Teléfono' />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Cédula de identidad <Divider
                                                type={"vertical"}/></Title></Col>

                                            <Col span={12}>
                                                <Form.Item name='dni'
                                                           rules={ [
                                                               {
                                                                   required: true,
                                                                   message: 'Ingrese una cédula'
                                                               }
                                                           ] }
                                                           hasFeedback
                                                >
                                                    <Input placeholder='Cédula' />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Col span={12}>
                                            <Form.Item>
                                                <Button type='primary' htmlType='submit' >
                                                    Guardar cambios
                                                </Button>
                                            </Form.Item>
                                        </Col>

                                    </Col>
                                </Row>

                            </Form>

                        </>
                }


            </>
        );

    }
;

export default (ProductEdit);