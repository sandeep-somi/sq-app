import React from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const getSubmenu = (labels, menus) => {
  const submenu = [];
  for (const label of labels) {
    const menu = menus.hasOwnProperty(label) ? menus[label] : {};
    submenu.push({
      ...menu,
      label: label,
    });
  }
  return submenu;
}

const Option = ({ data = {} }) => {
  const sessions = data && data.sessionlist || [];
  const [showAddons, setShowAddons] = React.useState(false);
  const { subOptions = [] } = useSelector(state => state.options);
  const addons = getSubmenu(data.submenu || [], subOptions);
  const shouldShowAddons = !!(data && data.submenu && data.submenu.length)
  return (
    <div className="sq-option">
      <Row>
        <Col md={2} className="sq-option__specs">
          <div className="sq-option__specs-image">
            <img src={data.imageurl} alt={data.foodname} />
          </div>
        </Col>
        <Col md={8} className="sq-option__titles">
          <h2>{data.foodname}</h2>
          <p>{data.fooddescription}</p>
          {!showAddons && shouldShowAddons && <Button size="sm" onClick={() => setShowAddons(true)}>Add-ons</Button>}
        </Col>
        <Col md={2} className='sq-option__price'>
          <p>${(data.price || 0).toFixed(2)}</p>
        </Col>
      </Row>
      {showAddons && shouldShowAddons && <>
        <div className="sq-spliter"></div>
        <Row>
          <Col>
            <div className='d-flex justify-content-between align-items-center'>
              <h2 className='sq-h2 m-0'>{data.foodname} Add-ons</h2>
              <span className="sq-link" onClick={() => setShowAddons(false)}>Cancel</span>
            </div>
            <div className="sq-accordion">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Choose Topping</Accordion.Header>
                  <Accordion.Body>
                    {addons && addons.map((addon, index) => {
                      return (
                        <div className="sq-addon-item d-flex align-items-center justify-content-between" key={index}>
                          <div className="d-flex align-items-center">
                            <Form.Check

                            />
                            <div className="sq-addon-item__img">
                              <img src={addon.imageurl} alt={addon.label} />
                            </div>
                            <span>{addon.label}</span>
                          </div>
                          <div className="sq-addon-item__price">
                            <p>${(addon.price || 0).toFixed(2)}</p>
                          </div>
                        </div>
                      )
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </>}

      <div className="sq-spliter"></div>
      <Row>
        <Col md={3}>
          <label>Quantity</label>
          <Form.Control
            placeholder='Qty'
            type="number"
          />
        </Col>
        <Col md={6}>
          <label>Session</label>
          <Form.Select>
            {sessions.map((sess, index) => (<option key={index}>{sess}</option>))}
          </Form.Select>
        </Col>
        <Col md={3}>
          <label>Sub Total</label>
          <Form.Control />
        </Col>
      </Row>

      <Row>
        <Col md={9} className="pt-2">
          <label>Note to Kitchen</label>
          <Form.Control
            as="textarea"
          />
        </Col>
        <Col md={3} className="pt-2 d-flex flex-column flex-items-end justify-content-end">
          <Button>Add to Cart</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Option;