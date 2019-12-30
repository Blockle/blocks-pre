import React, { useState } from 'react';
import { useField, FieldProps } from '@blockle/form';

import './input.css';

import { cx } from '../cx';

type Props = FieldProps<string> & {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'password' | 'email';
} & ValidationOptions;

type ValidationOptions = {
  required?: boolean;
  pattern?: RegExp;
};

const validate = ({ required, pattern }: ValidationOptions) => (value: string) => {
  if (required && !value) {
    return 'required';
  }

  if (pattern && !pattern.test(value)) {
    return 'pattern_mismatch';
  }

  return null;
};

const TextField = ({
  label,
  name,
  placeholder,
  value = '',
  required,
  pattern,
  type = 'text',
}: Props) => {
  const [focus, setFocus] = useState(false);
  const field = useField(name, {
    value,
    validate: validate({ required, pattern }),
  });
  // const { value, setValue, invalid } = useForm<string>({
  //   name,
  //   value: pValue,
  //   validate: validate({ required, pattern }),
  // });

  return (
    <div className={cx('TextField', field.invalid && 'is-invalid')}>
      <label
        htmlFor={`Input-${name}`}
        className={cx(
          'TextField-Label',
          field.value && 'is-floating',
          focus && 'is-focused',
          field.invalid && 'is-invalid',
        )}
      >
        {label}
      </label>
      <input
        autoComplete="off"
        className="TextField-Input"
        id={`Input-${name}`}
        name={name}
        onBlur={() => setFocus(false)}
        onChange={event => field.setValue(event.target.value)}
        onFocus={() => setFocus(true)}
        placeholder={placeholder || label}
        type={type}
        value={field.value}
      />
      <div className="TextField-Bar" />

      {field.invalid && <div className="TextField-Bottom">* {field.validationMessage}</div>}
    </div>
  );
};

export default TextField;
