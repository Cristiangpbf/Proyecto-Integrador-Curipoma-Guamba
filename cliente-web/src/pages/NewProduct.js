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


const NewProduct = () => {

    const [form] = Form.useForm();

    const onFinish = async (productData) => {
        console.log( 'Recibidos valores del form en M onFinish ', productData );
        const { name, dimensions, flavor, texture, consumption_time, img_url, description, package_amount, category_id } = productData;

        try{
            const product = await API.post(`/categories/${category_id}/products`, {
                name,
                dimensions,
                flavor,
                texture,
                consumption_time,
                img_url,
                description,
                package_amount
            });
            console.log('Producto', product);
            message.success(<>Producto creado correctamente</>)
            form.resetFields();
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
                      form={form}
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
                        <Input prefix={ <FormOutlined /> } placeholder='Nombre del producto' />
                    </Form.Item>

                    <Form.Item name='dimensions'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese las dimensiones del producto'
                                   }
                               ] }
                               hasFeedback
                    >
                        <Input prefix={ <FormOutlined /> } placeholder='Dimensiones' />
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
                        <Input prefix={ <FormOutlined /> } placeholder='Sabor del producto' />
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
                        <Input prefix={ <FormOutlined /> } placeholder='Textura del producto' />
                    </Form.Item>

                    <Form.Item name='consumption_time'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese el tiempo de consumo'
                                   }
                               ] }
                               hasFeedback
                    >
                        <Input prefix={ <FormOutlined /> } placeholder='Tiempo estimado de consumo del producto' />
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
                        <Input prefix={ <FormOutlined /> } placeholder='Ingreso de imagen(Temporal)' />
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
                        <TextArea prefix={ <FormOutlined /> } rows={5} placeholder={'Descripción del producto'}/>
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
                        <Input prefix={ <FormOutlined /> } placeholder='Cantidad de elementos' />
                    </Form.Item>

                    <Form.Item name='category_id'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese el número de elementos en el producto'
                                   }
                               ] }
                               hasFeedback
                    >
                        <Select placeholder="Categoría" style={{ width: 120 }} >
                            <Option value={1}>Conos</Option>
                            <Option value={2}>Barquillos</Option>
                            <Option value={3} >Tulipanes</Option>
                            <Option value={4}>Bananas</Option>
                            <Option value={5}>Otros</Option>
                        </Select>
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