import { FieldProps, useField } from '@blockle/form';
import { cx } from 'cx';
import { Icon } from 'Icon';
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '../Box';
import './dropdown.css';

type Props = FieldProps<string> & {
  children: React.ReactNode;
  placeholder?: string;
  onChange?: (value: string) => void;
  errorMessages?: { [key in ErrorCodes]?: React.ReactNode };
} & ValidationOptions;

type ErrorCodes = 'required' | 'patternMismatch' | 'minLength' | 'maxLength';

type ValidationOptions = {
  required?: boolean;
};

const validate = ({ required }: ValidationOptions) => (value: string) => {
  if (required && !value) {
    return 'required';
  }

  return null;
};

const Dropdown = ({
  name,
  onChange,
  placeholder,
  required,
  value,
  errorMessages = {},
  children,
}: Props) => {
  const ref = useRef<HTMLSelectElement>(null);
  const [focus, setFocus] = useState(false);
  const field = useField(name, {
    value: value || '',
    validate: validate({ required }),
    onChange,
  });

  const invalid = field.invalid && (field.dirty || field.touched);

  useEffect(() => {
    if (ref.current) {
      const { value } = ref.current;

      if (value && value !== field.value) {
        field.setValue(value);
      }
    }
  }, [children]);

  return (
    <Box
      position="relative"
      display="inline-block"
      color={invalid ? 'warning' : focus ? 'primary' : 'black'}
    >
      <Box
        ref={ref}
        component="select"
        className={cx('Dropdown-select', invalid && 'is-invalid')}
        color="black"
        fontSize="medium"
        paddingY="xsmall"
        paddingLeft="small"
        paddingRight="large"
        name={name}
        id={`Dropdown-${name}`}
        value={field.value}
        onBlur={() => {
          setFocus(false);
          field.setTouched();
        }}
        onChange={(event: React.FormEvent<HTMLSelectElement>) => {
          field.setValue(event.currentTarget.value);
        }}
        onFocus={() => {
          setFocus(true);
        }}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </Box>
      <Box className="Dropdown-icon" paddingRight="xsmall">
        <Icon name="selector" label="" color="black" size="xsmall" />
      </Box>
    </Box>
  );
};

export default Dropdown;
