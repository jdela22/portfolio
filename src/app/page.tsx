"use client";
import Image from "next/image";
import { Container, Center, Text, Heading, Flex } from "@chakra-ui/react";
export default function Home() {
  return (
    <Container>
      {/* <Flex direction="column" alignItems="center"> */}
      <Heading variant="home-section">About Me</Heading>
      <Text>
        Hi! My name is Jared Delapasse. I'm a fullstack developer based out of
        Houston, Texas. While my day job usually consists of
        building/maintaining various enterprise dotnet projects to pay the
        bills, this website serves as a playground for me to stay up to date on
        the latest trends that are happening on my true passion, the web.
      </Text>
      {/* </Flex> */}
    </Container>
  );
}
