import React from 'react';
import ArticleList from '../components/ArticleList';
import { useArticleList } from '../data/useArticleList';
import ShowError from '../components/ShowError';
import {Col, Row} from "antd";
import { Image } from 'antd';
import conos from '../images/Conos_de_helados.jpg';
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

const HomePage = () => {
  const articles = useArticleList();

  return (
    <>
      <h1 className='page-title'>
        <p> Bienvenido a Cono Superior</p>
      </h1>

        <Row justify={"space-around"}>
            <Col span={10}>
                <Row justify={"center"}>
                    <Title level={3} style={{fontWeight: "bold"}} >Nosotros</Title>
                </Row>
                <Row>
                    <Text style={{textAlign: 'justify'}} strong >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien nisi, venenatis ut efficitur quis, consequat nec leo. Pellentesque eu erat tellus. In a rutrum lorem. Nam odio velit, aliquet nec eleifend at, lobortis sit amet mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi non pharetra urna. Sed congue nulla congue massa maximus.</Text>
                </Row>
            </Col>
            <Col span={6}>
                <Row >
                    <Image width={300} src={ conos} />
                </Row>
            </Col>
        </Row>
      {
        articles.isLoading
          ? 'Cargando...'
          : articles.isError
          ? <ShowError error={ articles.isError } />
          : <ArticleList articles={ articles.articles } />
      }
    </>
  );
};


export default HomePage;
