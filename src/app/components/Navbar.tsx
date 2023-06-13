"use client";
import {
  Box,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
  Heading,
  Stack,
  IconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const NavLink = () => {};

export const Navbar = (props: any) => {
  const { path, href, target, children } = props;

  const LinkItem = () => {
    const router = useRouter();
    console.log("router.asParth", router.asPath);
    console.log("href", href);

    const active = router.asPath === href;
    const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
    return (
      <ChakraLink
        // as={NextLink}
        href={href}
        scroll={false}
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </ChakraLink>
    );
  };

  return (
    <Box
      as="nav"
      w="100%"
      // bg={useColorModeValue("#ffffff40", "#20202380")}
      bg={useColorModeValue("#20202380", "#ffffff40")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        p={2}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex direction="row" alignItems="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Box>Jared Delapasse</Box>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/interests">Interests</Link>
        </Stack>

        <Box flex={1} alignSelf="right">
          <Box>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem>About</MenuItem>
                <MenuItem>Experience</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
