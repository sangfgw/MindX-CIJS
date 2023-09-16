import classes from "./Input.module.css";
import { Input, Box } from "@mui/material";

/* eslint-disable react/prop-types */
const FormInput = ({ labelName, ...config }) => {
  return (
    <Box className={classes["input-group"]}>
      {labelName && <label htmlFor={config.id}>{labelName}</label>}
      <Input {...config} className={classes["sign-up-input"]} />
    </Box>
  );
};

export default FormInput;
