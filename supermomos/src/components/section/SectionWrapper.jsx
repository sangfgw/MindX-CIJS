/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

const SectionWrapper = ({ children }) => {
  return <Box sx={{ paddingX: "7rem" /* 112px */ }}>{children}</Box>;
};

export default SectionWrapper;
