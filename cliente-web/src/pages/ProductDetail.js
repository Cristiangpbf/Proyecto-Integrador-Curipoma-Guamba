import React, {useState} from 'react';
import CommentsList from '../components/CommentsList';
import { useProduct } from '../data/useProduct';
import ShowError from '../components/ShowError';
import withAuth from '../hocs/withAuth';
import {Link, useParams} from 'react-router-dom';
import {Button, Col, Divider, Image, Input, InputNumber, Row, Skeleton, Typography} from 'antd';
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import {useAuth} from "../providers/Auth";
import Routes from "../constants/routes";
import {EditOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import API from "../data";
import {useProductCategory} from "../data/useProductCategory";

const ProductDetail = () => {

    const auth = useAuth();
    let { id } = useParams();
    const product = useProduct( id );
    const [prodCat, setProdCat] = useState();
    // const prodCategory = useProductCategory(product.category_id);

    const fetchCategory = async(product) => {
        console.log( `mostrar id de producto: ${product}` );
        setProdCat( await API.get( `/product/${product}/category/` ));
    };

    return (
        <>
            {
                product.isLoading
                    ? <div>Cargando...</div>
                    : product.isError
                    ? <ShowError error={ product.isError } />
                    : <>
                        <Row justify={"center"}>
                            <Col  span={12}>
                                <Image src={product.product.img_url}/>
                            </Col>
                            <Col span={12}>
                                <Title style={{textAlign: 'center'}} level={3}>{product.product.name} ({product.product.category.name} ) {
                                    !auth.isAuthenticated
                                        ?<></>
                                        :auth.currentUser.type ==='admin'
                                        ?<>
                                            <Divider type={"vertical"}/>
                                            <Link to={ Routes.EDIT_PRODUCT_ID.replace( ':id', product.product.id ) }>Editar<EditOutlined /></Link>
                                        </>
                                        :<></>
                                }</Title>

                                <Divider/>

                                <Row>
                                    <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Descripción del producto <Divider type={"vertical"}/></Title></Col>

                                    <Col span={12}>
                                        <Typography>
                                            <Paragraph style={{textAlign: 'justify'}}>
                                                <Text >{product.product.description}</Text>
                                            </Paragraph>
                                        </Typography>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Dimensiones <Divider type={"vertical"}/></Title></Col>

                                    <Col span={12}>
                                        <Typography>
                                            <Paragraph style={{textAlign: 'justify'}}>
                                                <Text >{product.product.dimensions}</Text>
                                            </Paragraph>
                                        </Typography>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Sabor <Divider type={"vertical"}/></Title></Col>

                                    <Col span={12}>
                                        <Typography>
                                            <Paragraph style={{textAlign: 'justify'}}>
                                                <Text >{product.product.flavor}</Text>
                                            </Paragraph>
                                        </Typography>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Textura <Divider type={"vertical"}/></Title></Col>

                                    <Col span={12}>
                                        <Typography>
                                            <Paragraph style={{textAlign: 'justify'}}>
                                                <Text >{product.product.texture}</Text>
                                            </Paragraph>
                                        </Typography>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Unidades por paquete <Divider type={"vertical"}/></Title></Col>

                                    <Col span={12}>
                                        <Typography>
                                            <Paragraph style={{textAlign: 'justify'}}>
                                                <Text >{product.product.package_amount}</Text>
                                            </Paragraph>
                                        </Typography>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}><Title style={{textAlign: 'end'}} level={5}>Tiempo estimado de consumo <Divider type={"vertical"}/></Title></Col>

                                    <Col span={12}>
                                        <Typography>
                                            <Paragraph style={{textAlign: 'justify'}}>
                                                <Text >{product.product.consumption_time}</Text>
                                            </Paragraph>
                                        </Typography>
                                    </Col>
                                </Row>

                                <Col span={24}>
                                    {
                                        !auth.isAuthenticated
                                            ?<Paragraph style={{textAlign: 'center'}}>Inicie sesión <Link to={Routes.LOGIN}>aquí </Link>para poder comprar este producto.</Paragraph>
                                            :auth.currentUser.type==='client'
                                            ?<>
                                                <Title style={{textAlign: 'center'}} level={3}>Número de páquetes</Title>
                                                <Row justify={"center"}>
                                                    <Col style={{textAlign: 'center'}} span={10}><InputNumber  min={1} defaultValue={1}/></Col>
                                                    <Col span={10}><Button type="primary"><ShoppingCartOutlined />Agregar al carrito</Button></Col>
                                                </Row>
                                            </>
                                            :<></>


                                    }

                                </Col>

                            </Col>
                        </Row>
                    </>
            }


        </>
    );

};

export default (ProductDetail);