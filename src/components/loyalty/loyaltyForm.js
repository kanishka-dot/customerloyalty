import React from 'react';
import { Col, Row, Button, Form} from 'reactstrap';
import InputField from '../common/InputField';


export default function LoyaltyForm({handelTextChange, onPointAdd, onPointsDeduct, InputFieldParameter, fieldValue, formReset, selectOption, cutomerName}) {
  return (
      <Form >
        <Row>
          {InputFieldParameter.map((input) => (
            <Col md={6} key={input.id}>
              <InputField key={input.id} fieldParameter={input} errorMessage={input.errorMessage} fieldValue={fieldValue[input.name]}
                handelTextChange={handelTextChange} fieldReset={formReset} selectFieldValues={selectOption}/>
            </Col>
          ))}
          <h3>{cutomerName}</h3>
        </Row>
        <Row  style={{justifyContent:"end"}}>
          <Col md={3}>
            <Button color="primary" onClick={onPointAdd} block>Add</Button>
          </Col>
          <Col md={3}>
            <Button color="danger" onClick={onPointsDeduct} block>Deduct</Button>
          </Col>
        </Row>
      </Form>);
}

