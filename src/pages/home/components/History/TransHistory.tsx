import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Historytable from "./Historytable";
import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const TransHistory = () => {
  return (
    <>
    <div className="">
    <Flex gap={4}>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="transparent"
            rounded="lg"
            style={{
              borderColor: "#555555",
              borderWidth: "2px",
              fontSize: "14px",
              width: "150px",
              display: "flex", // Add display: flex
              alignItems: "center", // Add align-items: center
            }}
          >
            <Box marginRight="2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 13h4.667v-1.5H2V13zm0-9v1.5h12V4H2zm0 5.25h8.333v-1.5H2v1.5z"
                  fill="white"
                ></path>
              </svg>
              &nbsp; Transaction
            </Box>
          </MenuButton>
          <MenuList>
            <MenuGroup title="" style={{ fontWeight: "bold" }}>
              <MenuItem style={{ color: "#dcdcdc" }}>Trade</MenuItem>
              <MenuItem style={{ color: "#dcdcdc" }}>Mint</MenuItem>
              <MenuItem style={{ color: "#dcdcdc" }}>Send</MenuItem>
              <MenuItem style={{ color: "#dcdcdc" }}>Receive</MenuItem>
              <MenuItem style={{ color: "#dcdcdc" }}>Other</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            colorScheme="transparent"
            rounded="lg"
            style={{
              borderColor: "#555555",
              borderWidth: "2px",
              fontSize: "14px",
              width: "150px",
              display: "flex", // Add display: flex
              alignItems: "center", // Add align-items: center
            }}
          >
            <Box marginRight="2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="7"
                  width="6"
                  height="6"
                  rx="3"
                  fill="white"
                ></rect>
                <path
                  d="M5.534 3C4.687 3 4 3.7 4 4.563v.931a4.14 4.14 0 011.713-.369c2.33 0 4.219 1.924 4.219 4.297A4.33 4.33 0 019.088 12h2.378c.847 0 1.534-.7 1.534-1.563V4.564C13 3.7 12.313 3 11.466 3H5.534z"
                  fill="white"
                ></path>
              </svg>
              &nbsp; Assets
            </Box>
          </MenuButton>
          <MenuList>
            <MenuGroup title="">
              <MenuItem style={{ fontWeight: "medium", color: "#DCDCDC" }}>
                All Assets
              </MenuItem>
              <MenuItem style={{ fontWeight: "medium", color: "#DCDCDC" }}>
                Token
              </MenuItem>
              <MenuItem style={{ fontWeight: "medium", color: "#DCDCDC" }}>
                NFTs
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>

      <Flex
        flexWrap="wrap" // Allow children to wrap to the next line on smaller screens
        justifyContent={{ base: "center", md: "space-between" }} // Center on mobile, space-between on larger screens
        alignItems="center"
      >
        {/* Input filed  */}
        <div className="mt-5">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Filter by Address,Protocol,Asset,Type"
              color="#dcdcdc"
              size="md"
              borderColor="transparent" // Set border color to transparent
              _focus={{ borderColor: "teal.400" }}
              _hover={{ borderColor: "gray.400" }} // Change border color on hover
            />
          </InputGroup>
        </div>
        {/* close input filed */}
        {/* Download svg */}
        <Button
          color="#dcdcdc"
          variant="outline"
          border="1px solid #555555" // Add this line for the border
          // _hover={{
          //   borderColor: 'transparent', // Specify the hover color
          // }}
        >
          Download CSV
        </Button>
      </Flex>

      {/* Close Download Svg */}
      {/* History table components here */}
      <Historytable />
      {/* close History table components here */}
    </div>
     
    </>
  );
};

export default TransHistory;
