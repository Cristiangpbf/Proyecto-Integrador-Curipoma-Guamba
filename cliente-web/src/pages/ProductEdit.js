import React from 'react';
import CommentsList from '../components/CommentsList';
import {useProduct} from '../data/useProduct';
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

const ProductEdit = () => {

    const auth = useAuth();
    let {id} = useParams();
    const [form] = Form.useForm();
    const product = useProduct(id);

        const onFinish = async (productData) => {
            console.log( 'Recibidos valores del form en onFinish ', productData );
            const { name, dimensions, flavor, texture, consumption_time, img_url, description, package_amount, category_id } = productData;

            try{
                const prod = await API.put(`/products/${product.product.id}`, {
                    name,
                    dimensions,
                    flavor,
                    texture,
                    consumption_time,
                    img_url,
                    description,
                    package_amount,
                    category_id
                });
                console.log('Producto', prod);
                message.success(<>Producto editado correctamente</>)
            }catch (e){
                console.error( 'No se pudo editar el Producto', e );
                const errorList = e.error && <ErrorList errors={ e.error } />;
                message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
            }
        };

    return (
        <>
            {
                product.isLoading
                    ? <div>Cargando...</div>
                    : product.isError
                    ? <ShowError error={product.isError}/>
                    : <>
                        <Form name='form'
                              form={form}
                              className='form'
                              onFinish={ onFinish }
                              initialValues={{
                                  name: `${product.product.name}`,
                                  dimensions: `${product.product.dimensions}`,
                                  flavor: `${product.product.flavor}`,
                                  texture: `${product.product.texture}`,
                                  consumption_time: `${product.product.consumption_time}`,
                                  img_url: `${product.product.img_url}`,
                                  description: `${product.product.description}`,
                                  package_amount: `${product.product.package_amount}`
                              }}
                        >
                            <Row justify={"center"}>
                                <Col span={12}>
                                    <Image src={product.product.img_url}/>
                                </Col>
                                <Col span={12}>
                                    <Row>
                                        <Col span={12}>
                                            <Title style={{textAlign: 'end'}} level={5}>Nombre del producto <Divider type={"vertical"}/></Title>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item name='name'
                                                       rules={[
                                                           {
                                                               required: true,
                                                               message: 'Ingresrar un nombre'
                                                           }
                                                       ]}
                                                       hasFeedback
                                            >
                                                <Input placeholder='Nombre'/>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Descripción del
                                            producto <Divider type={"vertical"}/></Title></Col>

                                        <Col span={12}>
                                            <Form.Item name='description'
                                                       rules={[
                                                           {
                                                               required: true,
                                                               message: 'Ingresa una descripción'
                                                           }
                                                       ]}
                                                       hasFeedback
                                            >
                                                <TextArea rows={5} placeholder={'Ingrese una descripción'}/>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Dimensiones <Divider
                                            type={"vertical"}/></Title></Col>

                                        <Col span={12}>
                                            <Form.Item name='dimensions'
                                                       rules={ [
                                                           {
                                                               required: true,
                                                               message: 'Ingresa las dimensiones'
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Input placeholder='Dimensiones' />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Sabor <Divider
                                            type={"vertical"}/></Title></Col>

                                        <Col span={12}>
                                            <Form.Item name='flavor'
                                                       rules={ [
                                                           {
                                                               required: true,
                                                               message: 'Ingresa el sabor'
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Input placeholder='Sabor' />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Textura <Divider
                                            type={"vertical"}/></Title></Col>

                                        <Col span={12}>
                                            <Form.Item name='texture'
                                                       rules={ [
                                                           {
                                                               required: true,
                                                               message: 'Ingresa la textura'
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Input placeholder='Textura' />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Unidades por
                                            paquete <Divider type={"vertical"}/></Title></Col>

                                        <Col span={12}>
                                            <Form.Item name='package_amount'
                                                       rules={ [
                                                           {
                                                               required: true,
                                                               message: 'Ingrese el contenido del paquete'
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Input placeholder='Unidades en el paquete' />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Tiempo estimado de
                                            consumo <Divider type={"vertical"}/></Title></Col>

                                        <Col span={12}>
                                            <Form.Item name='consumption_time'
                                                       rules={ [
                                                           {
                                                               required: true,
                                                               message: 'Ingrese el tiempo de consumo'
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Input placeholder='Tiempo de consumo' />
                                            </Form.Item>
                                        </Col>


                                    </Row><Row>
                                        <Col span={12} style={{textAlign: 'end'}}>
                                            <Form.Item name='category_id'
                                                       rules={ [
                                                           {
                                                               required: false
                                                           }
                                                       ] }
                                                       hasFeedback
                                            >
                                                <Select defaultValue={product.product.category.id}  style={{ width: 120 }} >
                                                    <Option value={1}>Conos</Option>
                                                    <Option value={2}>Barquillos</Option>
                                                    <Option value={3}>Tulipanes</Option>
                                                    <Option value={4}>Bananas</Option>
                                                    <Option value={5}>Otros</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item>
                                                <Button type='primary' htmlType='submit' >
                                                    Guardar cambios
                                                </Button>
                                            </Form.Item>
                                        </Col>

                                    </Row>
                                </Col>
                            </Row>

                        </Form>

                    </>
            }


        </>
    );

}
;

export default ( ProductEdit );