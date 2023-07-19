import React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import styles from './baseComponents.module.css';

const TextInput = (props) => {
  const { error } = props;
  return (
    <TextField
      fullWidth
      size="small"
      variant="filled"
      inputProps={{ style: { fontSize: 14 } }}
      {...props}
      helperText={error}
      error={Boolean(error)}
    />
  );
};
const BottonBox = (props) => {
  const { children, left, right } = props;
  const alignment = left ? 'flex-start' : right ? 'flex-end' : 'center';
  return (
    <div id={styles.buttonBox} style={{ justifyContent: alignment }}>
      {children}
    </div>
  );
};

const TwoColumnInputBox = (props) => {
  const { children } = props;
  return <div id={styles.twoColumnInputBox}>{children}</div>;
};

const SelectInput = (props) => {
  const { menuItems, conversionObject, label, formikProps, disabled } = props;

  return (
    <FormControl variant="filled" fullWidth size="small">
      <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        {...formikProps}
        disabled={disabled}
        {...props}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} value={item}>
            {conversionObject[item]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { TextInput, BottonBox, TwoColumnInputBox, SelectInput };
