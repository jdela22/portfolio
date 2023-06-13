"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./lib/theme";
const ThemeProvider = ({ children }: any) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
