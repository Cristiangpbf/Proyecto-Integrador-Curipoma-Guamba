/**
 * Created by cristiang on 3/1/20
 */
import React from 'react';
import Routes from '../constants/routes';
import Navigation from './Navigation';
import { Layout, Row, Col, Button, Popover } from 'antd';
import { FacebookOutlined, InstagramOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
import logo from '../images/logo.png';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

/**
 * Este componente renderiza los elementos comunes para toda la aplicación
 *
 * Header (menu), Content y Footer
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const MainLayout = props => {
  console.log( 'MainLayout props ', props );
  return (
    <div className='app'>
      <Layout>
        <Row type='flex' justify='center' className='header-wrapper'>
          <Col span={ 20 }>
            <Header className='header'>
              <Row type='flex' justify='space-between' align='bottom'>
                <Col xs={ 24 } md={ 6 } className='logo-wrapper'>
                  <Link to={ Routes.HOME }>
                    <img className='logo' src={ logo } alt='Grupo Menta' /></Link>
                </Col>

                <Col md={ 14 } align='right' className='main-menu'>
                  <Navigation mode='horizontal' />
                </Col>

                <Col xs={ 2 } align='right' className='responsive-menu-button'>
                  <Popover content={ <Navigation mode='vertical' /> }
                           trigger='click'
                           placement='rightTop'
                           overlayClassName='responsive-menu-wrapper'>
                    <Button type='primary'>
                      <svg viewBox='64 64 896 896'
                           focusable='false'
                           className=''
                           data-icon='menu'
                           width='1em'
                           height='1em'
                           fill='currentColor'
                           aria-hidden='true'>
                        <path d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'></path>
                      </svg>
                    </Button>
                  </Popover>
                </Col>
              </Row>
            </Header>
          </Col>
        </Row>


        <Content className='content'>
          <Row type='flex' justify='center' style={ { flex: 'auto' } }>
            <Col xs={ 22 } md={ 20 }>
              { props.children }
            </Col>
          </Row>
        </Content>

        <Footer className='footer'>
          <Row>
            <Col xs={ { span: 24 } } md={ 8 } className='logo-blanco'>
              <img src={ logo } alt='Logo' height={ 50 } />
            </Col>

            <Col xs={ {
              span: 24,
              offset: 0
            } }
                 md={ {
                   span: 5,
                   offset: 3
                 } }
                 className='logo-menta'>
              {/*Elaborado por: <br />*/}
              <a rel='noopener noreferrer' target='_blank'>

              </a>
            </Col>

            <Col xs={ {
              span: 24,
              offset: 0
            } }
                 md={ {
                   span: 4,
                   offset: 4
                 } }
                 className='contact-links'>
              <p><strong>Contáctanos</strong></p>
              <p><MailOutlined /> <a href='mailto:pepepecas@gmail.com'>pepepecas@gmail.com</a></p>
              <p><WhatsAppOutlined /> <a href='https://wa.me/593981030191' target='_blank' rel='noopener noreferrer'>
                +593 981030191</a></p>
            </Col>
          </Row>

          <Row type='flex' justify='space-between' align='bottom'>
            <Col xs={ 24 } md={ 8 }>
              { moment().format( 'YYYY' ) }
            </Col>

            <Col xs={ 24 } md={ 4 } className='footer-links'>
              <Link to={ Routes.ABOUT } style={ { marginRight: 20 } }>Preguntas frecuentes</Link>
            </Col>
            <Col xs={ 24 } md={ 4 } className='footer-links'>
              <Link to={ Routes.ABOUT }>Términos y condiciones</Link>
            </Col>

            <Col xs={ 24 } md={ 8 } className='logos-social'>
              <strong>Síguenos en:</strong>
              <a href='https://www.facebook.com'
                 target='_blank'
                 rel='noopener noreferrer'
                 style={ {
                   marginLeft: 30,
                   marginRight: 30
                 } }>
                <FacebookOutlined />
              </a>

              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                <InstagramOutlined />
              </a>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </div>
  );
};

export default MainLayout;
