import React from 'react';
import Title from "antd/es/typography/Title";
import {Card, Col, Row} from "antd";

import userCli from '../images/ClientHome/user.png';
import clockCli from '../images/ClientHome/clock.png';
import cartCli from '../images/ClientHome/shopping-cart-empty-side-view.png';
import teamCli from '../images/ClientHome/team.png';
import team2Cli from '../images/ClientHome/team2.png';
import productCli from '../images/ClientHome/product.png';
import prodCli from '../images/ClientHome/prod.png';

import {useAuth} from "../providers/Auth";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";

const AuthHome = ({user_type}) => {
    const {currentUser} = useAuth();
    console.log('Tipo de usuario', user_type);
    if (user_type === 'admin') {
        return (
            <>
                <Title level={2} className='page-title'> Saludos {currentUser && currentUser.name} (ADMIN)</Title>

                <Row justify='center' gutter={30}>

                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}}>
                        <Link to={Routes.ADMIN_ORDERS}>
                            <Card
                                hoverable
                                style={{background: "transparent"}}
                            >
                                <Row justify={"center"}>
                                    <div style={{textAlign: 'center'}}>
                                        <img alt={'userCli-img'} width={150} style={{margin: 20}} src={cartCli}/>
                                    </div>
                                </Row>
                                <Row justify={"center"}>
                                    <Title level={2}> PEDIDOS </Title>
                                </Row>
                            </Card>
                        </Link>
                    </Col>

                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}}>
                        <Link to={Routes.HOME}>
                            <Card
                                hoverable
                                style={{background: "transparent"}}
                            >
                                <Row justify={"center"}>
                                    <div style={{textAlign: 'center'}}>
                                        <img alt={'teamCli-img'} width={150} style={{margin: 20}} src={teamCli}/>
                                    </div>
                                </Row>
                                <Row justify={"center"}>
                                    <Title level={2}> CLIENTES </Title>
                                </Row>
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}}>
                        <Link to={Routes.EMPLOYEES}>
                            <Card
                                hoverable
                                style={{background: "transparent"}}
                            >
                                <Row justify={"center"}>
                                    <div style={{textAlign: 'center'}}>
                                        <img alt={'cartCli-img'} width={150} style={{margin: 20}} src={team2Cli}/>
                                    </div>
                                </Row>
                                <Row justify={"center"}>
                                    <Title level={2}> EMPLEADOS </Title>
                                </Row>
                            </Card>
                        </Link>
                    </Col>

                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}}>
                        <Link to={Routes.PRODUCTS}>
                            <Card
                                hoverable
                                style={{background: "transparent"}}
                            >
                                <Row justify={"center"}>
                                    <div style={{textAlign: 'center'}}>
                                        <img alt={'userCli-img'} width={150} style={{margin: 20}} src={productCli}/>
                                    </div>
                                </Row>
                                <Row justify={"center"}>
                                    <Title level={2}> PRODUCTOS </Title>
                                </Row>
                            </Card>
                        </Link>
                    </Col>

                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}}>
                        <Link to={Routes.EMPLOYEE_PROD.replace(':id', 1)}>
                            <Card
                                hoverable
                                style={{background: "transparent"}}
                            >
                                <Row justify={"center"}>
                                    <div style={{textAlign: 'center'}}>
                                        <img alt={'prodCli-img'} width={150} style={{margin: 20}} src={prodCli}/>
                                    </div>
                                </Row>
                                <Row justify={"center"}>
                                    <Title level={2}> PRODUCCIÓN </Title>
                                </Row>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </>
        );
    } else {
        return (
            <>
                <Title level={2} className='page-title'> Saludos {currentUser && currentUser.name} </Title>

                <Row justify='center' gutter={30}>

                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}}>
                        <Link to={Routes.CLI_EDIT_PERFIL}>
                            <Card
                                hoverable
                                style={{background: "transparent"}}
                            >
                                <Row justify={"center"}>
                                    <div style={{textAlign: 'center'}}>
                                        <img alt={'userCli-img'} width={150} style={{margin: 20}} src={userCli}/>
                                    </div>
                                </Row>
                                <Row justify={"center"}>
                                    <Title level={3}> EDITAR PERFIL </Title>
                                </Row>
                            </Card>
                        </Link>
                    </Col>

                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}}>
                        <Link to={Routes.CLI_ORDERS_LIST}>
                            <Card
                                hoverable
                                style={{background: "transparent"}}
                            >
                                <Row justify={"center"}>
                                    <div style={{textAlign: 'center'}}>
                                        <img alt={'clockCli-img'} width={150} style={{margin: 20}} src={clockCli}/>
                                    </div>
                                </Row>
                                <Row justify={"center"}>
                                    <Title level={3}> LISTA DE PEDIDOS </Title>
                                </Row>
                            </Card>
                        </Link>
                    </Col>

                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}}>
                        <Link to={Routes.PRODUCTS}>
                            <Card
                                hoverable
                                style={{background: "transparent"}}
                            >
                                <Row justify={"center"}>
                                    <div style={{textAlign: 'center'}}>
                                        <img alt={'cartCli-img'} width={150} style={{margin: 20}} src={cartCli}/>
                                    </div>
                                </Row>
                                <Row justify={"center"}>
                                    <Title level={3}> SOLICITAR PRODUCTOS </Title>
                                </Row>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </>
        );
    }
};

export default AuthHome;