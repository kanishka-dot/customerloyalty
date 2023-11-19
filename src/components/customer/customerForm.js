import React from 'react';
import { Col, Row, Button, Form} from 'reactstrap';
import InputField from '../common/inputField';


export default function CustomerForm({formsumbit, handelTextChange, onSubmitForm, handleReset, InputFieldParameter, customerInfo, formReset, classes}) {
  return (
      <Form >
        <Row>
          {InputFieldParameter.map((input) => (
            <Col md={6} key={input.id}>
              <InputField key={input.id} fieldParameter={input} errorMessage={input.errorMessage} fieldValue={customerInfo[input.name]}
                handelTextChange={handelTextChange} fieldReset={formReset} selectFieldValues={classes}/>
            </Col>
          ))}
        </Row>
        <Row  style={{justifyContent:"end"}}>
          <Col md={3}>
            <Button color="success" onClick={onSubmitForm} block>{formsumbit}</Button>
          </Col>
          <Col md={3}>
            <Button color="warning" onClick={handleReset} block>Reset</Button>
          </Col>
        </Row>
      </Form>);
}

