import React from 'react';
import {Button, Col, Form, Input, message, Row} from "antd";
import Cookies from "js-cookie";
import API from "../data";
import ErrorList from "../components/ErrorList";
import {translateMessage} from "../utils/translateMessage";
import Title from "antd/es/typography/Title";
import {UserOutlined} from "@ant-design/icons";
import withAuth from '../hocs/withAuth';


const NewProduct = () => {

    const onFinish = async (productData) => {
        console.log( 'Recibidos valores del form en M onFinish ', productData );
        const { name, dimensions, flavor, texture, consuption_time, img_url, description, package_amount} = productData;

        try{
            const product = await API.post('/products', {
                name,
                dimensions,
                flavor,
                texture,
                consuption_time,
                img_url,
                description,
                package_amount
            });
            console.log('Producto', product);
        }catch (e){
            console.error( 'No se pudo registrar el Producto', e );
            const errorList = e.error && <ErrorList errors={ e.error } />;
            message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
        }
    };

return(
    <>
        <Title level={2} style={ { textAlign: 'center' } }>Página ingreso nuevos productos</Title>

        <Row>
            <Col span={8}>
                <Form name='form'
                      className='form'
                      onFinish={ onFinish }
                >

                    <Form.Item name='name'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese el nombre del producto'
                                   }
                               ] }
                               hasFeedback
                    >
                        <Input prefix={ <UserOutlined /> } placeholder='Nombre del producto' />
                    </Form.Item>

                    <Form.Item name='dimensions'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese las dimenciones del producto'
                                   }
                               ] }
                               hasFeedback
                    >
                        <Input prefix={ <UserOutlined /> } placeholder='Dimenciones' />
                    </Form.Item>

                    <Form.Item name='flavor'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese el sabor del producto'
                                   }
                               ] }
                               hasFeedback
                    >
                        <Input prefix={ <UserOutlined /> } placeholder='Sabor del producto' />
                    </Form.Item>

                    <Form.Item name='texture'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese la textura del producto'
                                   }
                               ] }
                               hasFeedback
                    >
                        <Input prefix={ <UserOutlined /> } placeholder='Textura del producto' />
                    </Form.Item>

                    <Form.Item name='consuption_time'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese el tiempo de consumo'
                                   }
                               ] }
                               hasFeedback
                    >
                        <Input prefix={ <UserOutlined /> } placeholder='Tiempo estimado de consumo del producto' />
                    </Form.Item>

                    <Form.Item name='img_url'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese una url para la imagen'
                                   }
                               ] }
                               hasFeedback
                    >
                        <Input prefix={ <UserOutlined /> } placeholder='Ingreso de imagen(Temporal)' />
                    </Form.Item>

                    <Form.Item name='description'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese la descripción del producto'
                                   }
                               ] }
                               hasFeedback
                    >
                        <Input prefix={ <UserOutlined /> } placeholder='Descripción del producto' />
                    </Form.Item>

                    <Form.Item name='package_amount'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese el número de elementos en el producto'
                                   }
                               ] }
                               hasFeedback
                    >
                        <Input prefix={ <UserOutlined /> } placeholder='Cantidad de elementos' />
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit' >
                            Registrar Producto
                        </Button>
                    </Form.Item>

                </Form>

            </Col>
        </Row>

    </>
)
};

export default NewProduct;