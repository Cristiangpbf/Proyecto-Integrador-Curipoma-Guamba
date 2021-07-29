import React from 'react';
import Routes from '../constants/routes';
import API from '../data/index';
import {Button, Col, Form, Input, message, Row, Typography} from 'antd';
import {
    UserOutlined, TeamOutlined, IdcardOutlined, PhoneOutlined, HomeOutlined
} from '@ant-design/icons';
import ErrorList from '../components/ErrorList';
import { translateMessage } from '../utils/translateMessage';
import '../styles/register.css';
import {useAuth} from "../providers/Auth";

const { Title } = Typography;

const CliEditPerfil = () => {

    const { currentUser ,  setCurrentUser } = useAuth();

    const onFinish = async( userData ) => {
        console.log( 'Received values of form: ', userData );
        const { name, business_name, ruc , phone , address} = userData;

        try {
            const user = await API.put( '/user', {
                name,
                business_name,
                ruc ,
                phone ,
                address
            } );

            console.log( 'User put', user );
            setCurrentUser( user.data ); //Posible conflicto por numero de campos
        } catch( e ) {
            console.error( 'No se pudo actualizar el usuario', e );
            const errorList = e.error && <ErrorList errors={ e.error } />;
            message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
        }
    };

    return (
        <>
            <Title style={ { textAlign: 'center' } }>Información del perfil</Title>

            <Row justify='center' className='login'>
                <Col span={ 8 }>
                    <Form name='register-form'
                          className='register-form'
                          initialValues={ {
                              name: `${currentUser.name}`,
                              business_name: `${currentUser.business_name}`,
                              ruc:`${currentUser.ruc}`,
                              phone: `${currentUser.phone}` ,
                              address:`${currentUser.address}`
                          } }
                          onFinish={ onFinish }
                    >
                        <Form.Item name='name'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresa tu nombre'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <UserOutlined /> } placeholder='Nombre' />
                        </Form.Item>

                        <Form.Item name='business_name'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresa el nombre de tu empresa'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <TeamOutlined /> } placeholder='Nombre de la Empresa' />
                        </Form.Item>

                        <Form.Item name='ruc'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese su número de ruc'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <IdcardOutlined /> } placeholder='Número de ruc' />
                        </Form.Item>

                        <Form.Item name='phone'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese su número de teléfono'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <PhoneOutlined /> } placeholder='Número de teléfono' />
                        </Form.Item>

                        <Form.Item name='address'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingrese su dirección'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <HomeOutlined /> } placeholder='Dirección' />
                        </Form.Item>

                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='login-form-button'>
                                Guardar
                            </Button>
                        </Form.Item>

                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default ( CliEditPerfil );
