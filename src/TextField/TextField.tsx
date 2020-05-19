import { FieldProps, useField } from '@blockle/form';
import React, { useState } from 'react';
import { Box } from '../Box';
import { cx } from '../cx';
import './text-field.css';

type Props = FieldProps<string> & {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'password' | 'email' | 'tel';
  errorMessages?: { [key in ErrorCodes]?: React.ReactNode };
} & ValidationOptions;

type ErrorCodes = 'required' | 'patternMismatch' | 'minLength' | 'maxLength';

type ValidationOptions = {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
};

const validate = ({ required, pattern, minLength, maxLength }: ValidationOptions) => (
  value: string,
) => {
  if (required && !value) {
    return 'required';
  }

  if (pattern && !pattern.test(value)) {
    return 'pattern';
  }

  if (minLength && value.length < minLength) {
    return 'minLength';
  }

  if (maxLength && value.length > maxLength) {
    return 'maxLength';
  }

  return null;
};

const TextField = ({
  label,
  name,
  onChange,
  pattern,
  placeholder,
  required,
  type = 'text',
  value = '',
  errorMessages = {},
  minLength,
  maxLength,
}: Props) => {
  const [focus, setFocus] = useState(false);
  const field = useField(name, {
    value,
    validate: validate({ required, pattern, minLength, maxLength }),
    onChange,
  });

  const invalid = field.invalid && (field.dirty || field.touched);

  return (
    <Box
      className="TextField"
      position="relative"
      color={invalid ? 'warning' : focus ? 'primary' : 'white'}
    >
      <Box
        component="label"
        display="block"
        htmlFor={`Input-${name}`}
        color={focus ? 'primary' : 'gray'}
        className={cx('TextField-Label', field.value && 'is-floating')}
      >
        {label}
      </Box>
      <input
        autoComplete="off"
        className="TextField-Input"
        id={`Input-${name}`}
        name={name}
        onBlur={() => {
          setFocus(false);
          field.setTouched();
        }}
        onChange={(event) => field.setValue(event.target.value)}
        onFocus={() => {
          setFocus(true);
        }}
        placeholder={placeholder || label}
        type={type}
        value={field.value}
      />
      <div className="TextField-Bar" />

      {invalid && (
        <Box color="warning" className="TextField-Bottom">
          {(field.validationMessage && errorMessages[field.validationMessage as ErrorCodes]) ||
            field.validationMessage}
        </Box>
      )}
    </Box>
  );
};

export default TextField;
