import React, {useState } from 'react';
import {Skeleton, Card, Col, Row,  Modal, Button, Divider, message} from 'antd';
import Routes from '../constants/routes';
import {ShoppingCartOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined} from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { useProductsList } from '../data/useProductsList';
import ShowError from './ShowError';
import {useAuth} from "../providers/Auth";
import API from "../data";
import ErrorList from "./ErrorList";
import {translateMessage} from "../utils/translateMessage";

const { confirm } = Modal;

const onFinish = async (id) => {
    console.log( 'Recibido id del producto', id );
    try{
        const prodDel = await API.delete(`/products/${id}`);
        console.log('Producto eliminado', prodDel);
        message.success(<>Producto eliminado correctamente</>)
        window.location.reload(false);
    }catch (e){
        console.error( 'No se pudo eliminar el Producto', e );
        const errorList = e.error && <ErrorList errors={ e.error } />;
        message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
    }
};



const ProductsList = (props ) => {

    const auth = useAuth();
    const {products, isLoading, isError } = useProductsList() ;
    const [prods, setProds] = useState({});

    // const showPromiseConfirm=((id)=>{
    //     confirm({
    //         title: '¿Está seguro de quere eliminar este producto?',
    //         icon: <ExclamationCircleOutlined />,
    //         content: 'Esta acción no se puede deshacer',
    //         onOk() {
    //             onFinish(id)
    //         },
    //         onCancel() {},
    //     });
    // })

    // useEffect(()=>{
    //     console.log('useEffectProds',products)
    //     if(typeof products !== 'undefined'){
    //         setProds(products);
    //         console.log('prods luego de setProds',prods)
    //     }
    //
    // },[products])

    // var prods = products;

    // const  onChange  = async  ( e ) => {
    //   if(e.target.value!==6){
    //       setProds(await API.get( `/products/category/${e.target.value}`))
    //   }
    // };

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


          {/*<CategoriesButtons/>*/}

          {/*<Radio.Group onChange={onChange()} value={value}>*/}
          {/*    <Radio.Button value={6}>Todos</Radio.Button>*/}
          {/*    <Radio.Button value={1}>Conos</Radio.Button>*/}
          {/*    <Radio.Button value={2}>Barquillos</Radio.Button>*/}
          {/*    <Radio.Button value={3}>Tulipanes</Radio.Button>*/}
          {/*    <Radio.Button value={4}>Bananas</Radio.Button>*/}
          {/*    <Radio.Button value={5}>Otros</Radio.Button>*/}
          {/*</Radio.Group>*/}

        <Row justify='center' gutter={ 30 }>
          {
              products.map( ( product, i ) => (
              <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                { product.name
                  ? <Card
                    title={ `${product.name} (${product.category.name})` }
                    extra={
                        <>
                            <Row>
                                <Col>
                                    <Link to={ Routes.PRODUCT_ID.replace( ':id', product.id ) }>Más</Link>
                                    {
                                        !auth.isAuthenticated
                                            ?<></>
                                            :auth.currentUser.type ==='admin'
                                            ?<>
                                                <Divider type={"vertical"}/>
                                                <Link to={ Routes.EDIT_PRODUCT_ID.replace( ':id', product.id ) }>
                                                    <Button>
                                                        <EditOutlined />
                                                    </Button>
                                                </Link>
                                                <Button onClick={
                                                    function showConfirm(id) {
                                                        confirm({
                                                            title: '¿Está seguro de quiere eliminar este producto?',
                                                            icon: <ExclamationCircleOutlined />,
                                                            content: 'Esta acción no se puede deshacer',
                                                            onOk() {
                                                                onFinish(product.id)
                                                            },
                                                            onCancel() {},
                                                        });
                                                    }
                                                } >
                                                    <DeleteOutlined />
                                                </Button>
                                            </>
                                            :<></>
                                    }
                                </Col>
                            </Row>
                        </>
                    }
                    cover={
                      <img alt={ `${product.name}_IMAGE` }
                           src={ `${ product.img_url }` } /> }
                  >
                        {
                            !auth.isAuthenticated
                                ?<></>
                                :auth.currentUser.type ==='client'
                                ?<>
                                    <Button><ShoppingCartOutlined />Añadir al carrito</Button>
                                </>
                                :<></>
                        }

                    <div>
                        <p> { product.description }</p>
                    </div>
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
  };
export default ProductsList;
