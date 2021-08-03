import React from 'react';
import {Button, Col, Form, Input, message, Row, Select} from "antd";
import Cookies from "js-cookie";
import API from "../data";
import ErrorList from "../components/ErrorList";
import {translateMessage} from "../utils/translateMessage";
import Title from "antd/es/typography/Title";
import {FormOutlined} from "@ant-design/icons";
import withAuth from '../hocs/withAuth';
import {Option} from "antd/lib/mentions";
import TextArea from "antd/lib/input/TextArea";


const NewEmployee = () => {

    const [form] = Form.useForm();

    const onFinish = async (employeeData) => {
        console.log( 'Recibidos valores del form en M onFinish ', employeeData );
        const { name, email, phone, dni } = employeeData;
        try{
            const employee = await API.post('/employees', {
                name, email, phone, dni
            });
            console.log('Empleado', employee);
            message.success(<>Empleado creado correctamente</>)
            form.resetFields();
        }catch (e){
            console.error( 'No se pudo registrar el Usuario', e );
            const errorList = e.error && <ErrorList errors={ e.error } />;
            message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
        }
    };

    return(
        <>
            <Title level={2} style={ { textAlign: 'center' } }>Página ingreso nuevo empleado</Title>

            <Row>
                <Col span={8}>
                    <Form name='form'
                          form={form}
                          className='form'
                          onFinish={ onFinish }
                    >

                        <Form.Item name='name'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese el nombre del empleado'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <FormOutlined /> } placeholder='Nombre del empleado' />
                        </Form.Item>

                        <Form.Item name='email'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese un email para el empleado'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <FormOutlined /> } placeholder='Correo electrónico' />
                        </Form.Item>

                        <Form.Item name='phone'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese un número de teléfono'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <FormOutlined /> } placeholder='Número de teléfono' />
                        </Form.Item>

                        <Form.Item name='dni'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese la cédula del empleado'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <FormOutlined /> } placeholder='Documento de identidad' />
                        </Form.Item>

                        <Form.Item>
                            <Button type='primary' htmlType='submit' >
                                Registrar Empleado
                            </Button>
                        </Form.Item>

                    </Form>

                </Col>
            </Row>

        </>
    )
};

export default NewEmployee;