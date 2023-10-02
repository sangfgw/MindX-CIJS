/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";

const SectionWrapper = ({ children }) => {
  return <Stack direction="column">{children}</Stack>;
};

export default SectionWrapper;
