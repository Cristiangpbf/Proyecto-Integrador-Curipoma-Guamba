import React from 'react';
import ShowError from '../components/ShowError';
import {useParams} from 'react-router-dom';
import {Button, Col, Divider, Form, Input, message, Row, Select,} from 'antd';
import Title from "antd/lib/typography/Title";
import {SaveOutlined} from "@ant-design/icons";
import API from "../data";
import ErrorList from "../components/ErrorList";
import {translateMessage} from "../utils/translateMessage";
import {Option} from "antd/lib/mentions";
import {useProduction} from "../data/useProduction";
import {useProductsList} from "../data/useProductsList";

const EmployeeProductionEdit = () => {

        let {id} = useParams();
        const [form] = Form.useForm();
        const production = useProduction(id);
        const products = useProductsList();


        const onFinish = async (productionData) => {
            console.log('Recibidos valores del form en onFinish ', productionData);
            const {total_sales, liters, time, performance, product_id} = productionData;

            try {
                const prod = await API.put(`/productions/${production.production.id}`, {
                    total_sales, liters, time, performance, product_id
                });
                console.log('Producto', prod);
                message.success(<>
                    Producto editado correctamente
                </>)

            } catch (e) {
                console.error('No se pudo editar el Producto', e);
                const errorList = e.error && <ErrorList errors={e.error}/>;
                message.error(<>{translateMessage(e.message)}{errorList}</>);
            }
        };

        return (
            <>
                {
                    production.isLoading
                        ? <div>Cargando...</div>
                        : production.isError
                        ? <ShowError error={production.isError}/>
                        : <>
                            <Form name='form'
                                  form={form}
                                  className='form'
                                  onFinish={onFinish}
                                  initialValues={{
                                      total_sales: `${production.production.total_sales}`,
                                      liters: `${production.production.liters}`,
                                      time: `${production.production.time}`,
                                      performance: `${production.production.performance}`
                                  }}
                            >
                                <Row justify={"center"}>

                                    <Col span={12}>
                                        <Title style={{textAlign: 'end'}} level={5}>Cantidad<Divider
                                            type={"vertical"}/></Title>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name='total_sales'
                                                   rules={[
                                                       {
                                                           required: true,
                                                           message: 'Ingresrar una cantidad'
                                                       }
                                                   ]}
                                                   hasFeedback
                                        >
                                            <Input placeholder='Total de elementos'/>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}>
                                        <Title style={{textAlign: 'end'}} level={5}>
                                            Litros de material<Divider type={"vertical"}/>
                                        </Title>
                                    </Col>

                                    <Col span={12}>
                                        <Form.Item name='liters'
                                                   rules={[
                                                       {
                                                           required: true,
                                                           message: 'Ingresar la cantidad de litros producidos'
                                                       }
                                                   ]}
                                                   hasFeedback
                                        >
                                            <Input placeholder={'Litros'}/>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Tiempo<Divider
                                        type={"vertical"}/></Title>
                                    </Col>

                                    <Col span={12}>
                                        <Form.Item name='time'
                                                   rules={[
                                                       {
                                                           required: true,
                                                           message: 'Ingresar el tiempo'
                                                       }
                                                   ]}
                                                   hasFeedback
                                        >
                                            <Input placeholder='Tiempo'/>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Desempeño<Divider
                                        type={"vertical"}/></Title></Col>

                                    <Col span={12}>
                                        <Form.Item name='performance'
                                                   rules={[
                                                       {
                                                           required: true,
                                                           message: 'Escoja un valor para el desempeño'
                                                       }
                                                   ]}
                                                   hasFeedback
                                        >
                                            <Select defaultValue={production.production.performance} style={{width: 120}}>
                                                <Option value={'Excelente'}>Excelente</Option>
                                                <Option value={'Regular'}>Regular</Option>
                                                <Option value={'Mejorable'}>Mejorable</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Producto<Divider
                                        type={"vertical"}/></Title></Col>

                                    <Col span={12}>
                                        <Form.Item name='product_id'
                                                   hasFeedback
                                        >
                                            {
                                                products.isLoading
                                                    ? <>Cargando...</>
                                                    : products.isError
                                                    ? <ShowError error={products.isError}/>
                                                    : <Select
                                                        defaultValue={production.production.product.id}
                                                        style={{width: 120}}>
                                                            {
                                                                products.products.map((product, i) => (
                                                                    <Option value={product.id}>
                                                                        {product.name}
                                                                    </Option>
                                                                ))
                                                            }
                                                    </Select>
                                            }

                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={24} style={{textAlign: 'center'}}>
                                        <Form.Item>
                                            <Button type='primary' htmlType='submit' icon={<SaveOutlined/>}>
                                                Guardar cambios
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>

                            </Form>

                        </>
                }


            </>
        );

    }
;

export default (EmployeeProductionEdit);