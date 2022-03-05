import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { meta } from '../../constants';
import Menu from '../Common/Menu/Menu';
import Options from '../Common/Options';
import PageTitle from '../Common/PageTitle';
import Cart from '../Common/Cart';

const Home = () => {
  return (
    <div className="sq-home">
      <Container>
        <Row>
          <Col>
            <PageTitle label={meta.home.title} />
          </Col>
        </Row>
        <Row>
          <Col className="sq-home__menu-wrapper" md={1}><Menu /></Col>
          <Col md={8}><Options /></Col>
          <Col md={3}><Cart /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;