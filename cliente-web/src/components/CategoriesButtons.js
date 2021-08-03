import React from 'react';
import { Skeleton, Card, Col, Row,  Button } from 'antd';
import ShowError from './ShowError';
import {useCategories} from "../data/useCategories";


const CategoriesButtons = (props ) => {



        const { categories, isLoading, isError } = useCategories();

        if( isLoading ) {
            return <Row justify='center' gutter={ 30 }>
                {
                    [ ...new Array( 3 ) ].map( ( _, i ) =>
                        <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                            <div style={ { textAlign: 'center' } }>
                                <Skeleton.Button style={ { width: 200 } } />
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

                <Row justify='center' gutter={20} >
                    {
                        categories.map( ( category, i ) => (
                            <Col  style={ { marginBottom: 30 } } key={ i }>
                                { category.name
                                    ? <Button>{category.name}</Button>
                                    : <div style={ { textAlign: 'center' } }>
                                        <Skeleton.Button style={ { width: 100 } } />
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

export default CategoriesButtons;
