import React from 'react';

import { 
    TextField, TextFieldHelperText
} from 'rmwc/TextField'

export const isValid = (field) => {
    return field && !field.valid && field.touched;
};

export const TextFieldControl = props => {
    const { formfield, label } = props;    
    return (
      <div>
        <TextField {...props} invalid={isValid(formfield)} />
        <TextFieldHelperText validationMsg={true}>
          {formfield &&
            ((formfield.errors &&
              formfield.errors.required &&
              `${label} is required`) ||
              (formfield &&
                formfield.errors &&
                formfield.errors.invalid &&
                `${label} is invalid`))}
        </TextFieldHelperText>
      </div>
    );
  };