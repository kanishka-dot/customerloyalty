import React, { useEffect, useState } from 'react';
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';

function InputField({ fieldParameter, errorMessage, fieldValue, handelTextChange, fieldReset, selectFieldValues}) {

  const [isFocused, setFocus] = useState(false);
  const [error, setError] = useState("");

  function setFocused(e) {
    setFocus(true);
    if (fieldParameter.pattern.test(e.target.value)) {
      setError("")
    } else {
      setError(errorMessage)
    }
  }

  useEffect(() => {
    setError("")
    setFocus(false);
  }, [fieldReset]);

  return (
    <FormGroup>
      <Label for={fieldParameter.name} >{fieldParameter.label}</Label>
      {fieldParameter.type !== "select" ?
        <Input type={fieldParameter.type} name={fieldParameter.name}
          value={fieldValue} onChange={handelTextChange} onBlur={setFocused}   {...isFocused ? { ...error === "" ? { valid: true } : { invalid: true } } : { valid: false }} />
        :
        <Input type={fieldParameter.type} name={fieldParameter.name}
          value={fieldValue} onChange={handelTextChange} onBlur={setFocused}   {...isFocused ? { ...error === "" ? { valid: true } : { invalid: true } } : { valid: false }} >
          {selectFieldValues === undefined? [] : selectFieldValues.map((foption) => (
            <option key={foption.classroomId}>
              {foption.classroomName}
            </option>
          ))}
        </Input>
      }
      <FormFeedback  {...isFocused ? { ...error === "" ? { valid: true } : { invalid: true } } : { valid: false }}  >
        {error}
      </FormFeedback>
    </FormGroup>
  );
}

export default InputField;