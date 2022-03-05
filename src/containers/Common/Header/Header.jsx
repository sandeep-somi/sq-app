import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { search, clear } from '../../../store/search';
import './index.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { query } = useSelector(state => state.search);

  return (
    <div className='sq-shadow'>
      <Container>
        <Row>
          <Col>
            <div className="sq-header d-flex justify-content-between py-4 align-items-center">
              <div className="sq-header__logo">
                <img src="images/asset_logo_main.webp" alt="smartq" />
              </div>
              <div className={classNames("sq-header__search", { "sq-header__search-has-clear": query })}>
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Form.Group>
                    <Form.Control
                      placeholder="Search Item"
                      value={query}
                      onChange={(e) => dispatch(search(e.target.value))}
                    />
                    {query && <span onClick={() => dispatch(clear())}>+</span>}
                  </Form.Group>
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