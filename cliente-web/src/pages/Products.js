import React, { useState } from 'react';
import API from '../data';
import { translateMessage } from '../utils/translateMessage';
import ProductsList from '../components/ProductsList';
import ArticleForm from '../components/ArticleForm';
import { Button, message, Skeleton, Row, Col } from 'antd';
import { useAuth } from '../providers/Auth';
import { useCategories } from '../data/useCategories';
import ShowError from '../components/ShowError';
import { mutate } from 'swr';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";

/**
 * Fetch Products from DB
 */
export const fetchProducts = async(products) => {
  console.log( `Show data fetched. Products: ${ JSON.stringify( products ) }` );

  return await API.get( '/products' );
};

/**
 * Products list page
 * @param props
 * @constructor
 */
const Products = (props ) => {

  const [ visible, setVisible ] = useState( false );
  const categories = JSON.stringify( useCategories() );

  const auth = useAuth();

  // const { auth, currentUser } = useAuth();




  /**
   * Executed after the form is submitted
   * Fetches all the articles and refreshes the list
   * Closes the modal
   */
  const afterCreate = async() => {
    try {
      // show skeleton
      await mutate( '/products', async articles => {
        return { data: [ {}, ...articles.data ] };
      }, false );

      await mutate( '/products' );
      setVisible( false ); // close the modal
    } catch( error ) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      );

      message.error( translateMessage( error.message ) );
    }
  };

  return (
    <div>
      {
        auth.isAuthenticated && auth.currentUser.type==='admin' &&
        <Link to={ Routes.NEW_PRODUCT } >
          <Button style={ {margin: 20}}
                  type='primary'
                  onClick={ () => {
                    setVisible( true );
                  } }
          >
            Nuevo Producto
          </Button>
        </Link>
      }

      {/*{*/}
      {/*  categories.isLoading*/}
      {/*    ? <Row type='flex' justify='center'>*/}
      {/*      <Col>*/}
      {/*        <Skeleton.Button active />*/}
      {/*        <Skeleton.Button active />*/}
      {/*        <Skeleton.Button active />*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*    : categories.isError*/}
      {/*    ? <ShowError error={ categories.isError } />*/}
      {/*    : <>Cargaron las categorías </>*/}
      {/*}*/}

      <ProductsList />
    </div>
  );
};


export default Products;
