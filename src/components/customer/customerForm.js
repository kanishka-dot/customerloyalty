import React from 'react';
import { Col, Row, Button, Form} from 'reactstrap';
import InputField from '../common/InputField';


export default function CustomerForm({ handelTextChange, onSubmitForm, handleReset, InputFieldParameter, fieldValue, formReset, classes}) {
  return (
      <Form >
        <Row>
          {InputFieldParameter.map((input) => (
            <Col md={6} key={input.id}>
              <InputField key={input.id} fieldParameter={input} errorMessage={input.errorMessage} fieldValue={fieldValue[input.name]}
                handelTextChange={handelTextChange} fieldReset={formReset} selectFieldValues={classes}/>
            </Col>
          ))}
        </Row>
        <Row  style={{justifyContent:"end"}}>
          <Col md={3}>
            <Button color="success" onClick={onSubmitForm} block>Save</Button>
          </Col>
          <Col md={3}>
            <Button color="warning" onClick={handleReset} block>Reset</Button>
          </Col>
        </Row>
      </Form>);
}

