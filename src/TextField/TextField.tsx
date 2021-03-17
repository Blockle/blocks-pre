import { FieldProps, useField } from '@blockle/form';
import { FC, useState } from 'react';
import { Box } from '../Box';
import { cx } from '../cx';
import './text-field.css';

interface Props extends FieldProps<string>, ValidationOptions {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'password' | 'email' | 'tel';
  errorMessages?: { [key in ErrorCodes]?: React.ReactNode };
  disabled?: boolean;
}

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

const TextField: FC<Props> = ({
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
  disabled,
}) => {
  const [focus, setFocus] = useState(false);
  const field = useField(name, {
    value,
    validate: validate({ required, pattern, minLength, maxLength }),
    onChange,
  });

  const invalid = field.invalid && field.touched;

  return (
    <Box
      position="relative"
      color={invalid ? 'warning' : focus ? 'primary' : 'white'}
      paddingBottom="large"
      className={cx('TextField', disabled && 'is-disabled')}
    >
      <input
        autoComplete="off"
        className={cx('TextField-Input', field.value && 'is-filled', invalid && 'is-invalid')}
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
        disabled={disabled}
      />
      <Box
        component="label"
        display="block"
        htmlFor={`Input-${name}`}
        color={invalid ? 'warning' : 'gray'}
        className={cx('TextField-Label', field.value && 'is-visible')}
        paddingX="xsmall"
        fontSize="xsmall"
        paddingTop="xsmall"
        backgroundColor="white"
      >
        {label}
      </Box>

      {invalid && (
        <Box color="warning" className="TextField-Bottom" fontSize="small">
          {(field.validationMessage && errorMessages[field.validationMessage as ErrorCodes]) ||
            field.validationMessage}
        </Box>
      )}
    </Box>
  );
};

export default TextField;
