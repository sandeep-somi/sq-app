import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './index.scss'

const Header = () => {
  return (
    <div className='sq-shadow'>
      <Container>
        <Row>
          <Col>
            <div className="sq-header d-flex justify-content-between py-4 align-items-center">
              <div className="sq-header__logo">
                <img src="images/asset_logo_main.png" alt="smartq" />
              </div>
              <div className="sq-header__search">
                <Form>
                  <Form.Control
                    placeholder='Search Item'
                  />
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header