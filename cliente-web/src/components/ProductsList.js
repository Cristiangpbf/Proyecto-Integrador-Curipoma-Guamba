import React, { useEffect, useState } from 'react';
import { Skeleton, Card, Col, Row, Radio, Typography, Button } from 'antd';
import Routes from '../constants/routes';
import {ShoppingCartOutlined} from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { useProductsList } from '../data/useProductsList';
import ShowError from './ShowError';
import {useAuth} from "../providers/Auth";

const { Text } = Typography;

const ProductsList = (props ) => {

    const auth = useAuth();

    const { products, isLoading, isError, mutate } = useProductsList();

    const handleChangeCategory = ( e ) => {
      // setArticles( props.articles.filter( ( article ) => e.target.value === 'all' || article.category_data.id ===
      // e.target.value ) );
    };

    if( isLoading ) {
      return <Row justify='center' gutter={ 30 }>
        {
          [ ...new Array( 9 ) ].map( ( _, i ) =>
            <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
              <div style={ { textAlign: 'center' } }>
                <Skeleton.Image style={ { width: 200 } } />
                <Card title='' extra='' cover='' loading />
              </div>
            </Col>
          )
        }
      </Row>;
    }

    if( isError ) {
      return <ShowError error={ isError } />;
    }

    return (
      <>
        <Row justify='center' gutter={ 30 }>
          {
            products.map( ( product, i ) => (
              <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                { product.name
                  ? <Card
                    title={ product.name }
                    extra={ <Link to={ Routes.PRODUCT_ID.replace( ':id', product.id ) }>Más</Link> }
                    cover={
                      <img alt={ `${product.name}_IMAGE` }
                           src={ `${ product.img_url }` } /> }
                  >
                        {auth.isAuthenticated?<Button><ShoppingCartOutlined />Añadir al carrito</Button>:<></>}

                    <p> { product.description }</p>
                  </Card>
                  : <div style={ { textAlign: 'center' } }>
                    <Skeleton.Image style={ { width: 200 } } />
                    <Card title='' extra='' cover='' loading />
                  </div>
                }
              </Col>


            ) )
          }
        </Row>
      </>
    );
  }
;

export default ProductsList;
