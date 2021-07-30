import React from 'react';
import {Button, Col, Divider, Input, Row} from "antd";
import Title from "antd/lib/typography/Title";
import Map from "../components/Map";
import {PhoneOutlined, EnvironmentOutlined, WhatsAppOutlined} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import Text from "antd/lib/typography/Text";
const AboutPage = () => (
  <>


      <Row>
          <Map  googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDVvBLQCvz3SfQFOdSLUZ_Z5kot2imedeE"}
                containerElement={<Col xs={ 24 } sm={ 24 } md={ 12 } style={{height:'400px'}}></Col>}
                mapElement={<div style={{height:'100%'}}></div>}
                loadingElement={<p>Cargando...</p>}
          />



          <Col  xs={ 24 } sm={ 24 } md={ 12 }>
              <Title level={2} style={{textAlign:'center'}}>Mensaje de Contacto</Title>
              <Row>
                  <Input.Group >
                      <Row gutter={[10, 20]}>
                          <Col style={{paddingLeft:50}} xs={ 24 } sm={ 24 } md={ 12 }>
                              <Input placeholder={'Nombre'}/>
                          </Col>
                          <Col style={{paddingLeft:50}} xs={ 24 } sm={ 24 } md={ 12 }>
                              <Input placeholder={'Apellido'}/>
                          </Col>
                      </Row>
                      <Divider style={{paddingLeft:50}}></Divider>
                      <Row gutter={[10, 20]}>
                          <Col style={{paddingLeft:50}} xs={ 24 } sm={ 24 } md={ 12 }>
                              <Input placeholder={'Email'}/>
                          </Col>
                          <Col style={{paddingLeft:50}} xs={ 24 } sm={ 24 } md={ 12 }>
                              <Input placeholder={'Teléfono'}/>
                          </Col>
                      </Row>
                      <Divider style={{paddingLeft:50}}></Divider>

                      <Row gutter={[10, 20]}>
                          <Col style={{paddingLeft:50}} span={24}>
                              <TextArea rows={5} placeholder={'Ingrese su mensaje'}/>
                              <Button style={{marginTop:20}}>Enviar</Button>
                          </Col>

                      </Row>

                  </Input.Group>
              </Row>
          </Col>
      </Row>
      <Divider></Divider>
      <Row gutter={50}>
          <Col xs={ 24 } sm={ 12 } md={ 8 }>
              <Title style={{textAlign:'justify'}} level={3}><EnvironmentOutlined /> Diego García y Rodrigo de Ocampo, Sector El Recreo, S8-224</Title>
          </Col>

          <Col xs={ 24 } sm={ 12 } md={ 8 }>
              <Title style={{textAlign:'center'}} level={3}><WhatsAppOutlined />
                  <a href='https://wa.me/593981030192' target='_blank' rel='noopener noreferrer'>
                  +593 981030192</a>
              </Title>
          </Col>

          <Col xs={ 24 } sm={ 12 } md={ 8 }>
              <Title style={{textAlign:'center'}} level={3}><PhoneOutlined /> 02-738-825 </Title>
          </Col>
      </Row>
  </>
);

export default AboutPage;
