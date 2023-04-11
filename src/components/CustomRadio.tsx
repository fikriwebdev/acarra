import { Box } from "@chakra-ui/layout";
import { UseRadioProps, useRadio } from "@chakra-ui/radio";
import React from "react";

export default function CustomRadio(
  props?: UseRadioProps & { children: React.ReactNode }
) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="12px"
        h="100px"
        bg="#EDF2F7"
        _checked={{
          bg: "white",

          borderColor: "#262626",
          borderWidth: "2px",
        }}
        _focus={{
          outline: "none",
        }}
        px={5}
        py={3}
        fontSize="30px"
        fontWeight="600"
        color="#262626"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {props?.children}
      </Box>
    </Box>
  );
}
