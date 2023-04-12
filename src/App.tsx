import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { IoCloseOutline } from "react-icons/io5";
import japanImage from "./assets/index 1.png";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useRadioGroup } from "@chakra-ui/radio";
import CustomRadio from "./components/CustomRadio";
import { Checkbox } from "@chakra-ui/checkbox";

const Header = () => {
  return (
    <Box
      backgroundColor="#262626"
      w="full"
      position="fixed"
      top="0"
      zIndex={10}
      p="4"
    >
      <HStack px="4" alignItems="flex-start" justifyContent="space-between">
        <Heading as="h1" color="white" fontWeight="700">
          Choose the form of payment
        </Heading>
        <Box pt="3.5">
          <Icon as={IoCloseOutline} w="6" h="6" color="white" fill="white" />
        </Box>
      </HStack>
    </Box>
  );
};

const UserCard = () => {
  return (
    <Box
      w="full"
      borderWidth="1px"
      borderColor="#D3DEE9"
      borderRadius="20px"
      bg="#F7FAFC"
      p="4"
    >
      <HStack justifyContent="space-between">
        <HStack spacing="26px">
          <Avatar
            name="John"
            bg="#EDF2F7"
            sx={{
              "& > div": {
                fontSize: "20px",
                color: "#262626",
              },
            }}
          />
          <Box>
            <Heading as="h1" fontSize="lg" fontWeight="600">
              John
            </Heading>
            <Text as="h1" fontWeight="500" color="#718096">
              (88) 99602-2404
            </Text>
          </Box>
        </HStack>
        <Button>Log out</Button>
      </HStack>
    </Box>
  );
};

const SelectedServiceForm = () => {
  return (
    <Stack mt="4" spacing="4">
      <FormControl>
        <FormLabel fontWeight="600">Enter your location</FormLabel>
        <Input
          placeholder="Enter address"
          borderColor="#D3DEE9"
          _placeholder={{
            color: "#D3DEE9",
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel fontWeight="600">Note (optional)</FormLabel>
        <Input
          placeholder="Enter text here"
          borderColor="#D3DEE9"
          _placeholder={{
            color: "#D3DEE9",
          }}
        />
      </FormControl>
    </Stack>
  );
};

const SelectedService = () => {
  return (
    <Box mt="8">
      <Heading as="h1" mb="4" size="lg" fontWeight="700">
        Selected service
      </Heading>
      <Box
        w="full"
        borderWidth="1px"
        borderColor="#D3DEE9"
        borderRadius="20px"
        p="4"
      >
        <HStack spacing="4">
          <Image src={japanImage} w="20" h="20" borderRadius="12px" />
          <Stack>
            <Heading as="h1" size="md" fontWeight="600">
              Japanese lessons
            </Heading>
            <HStack>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H18V2C18 1.73478 17.8946 1.48043 17.7071 1.29289C17.5196 1.10536 17.2652 1 17 1C16.7348 1 16.4804 1.10536 16.2929 1.29289C16.1054 1.48043 16 1.73478 16 2V3H8V2C8 1.73478 7.89464 1.48043 7.70711 1.29289C7.51957 1.10536 7.26522 1 7 1C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V20C2 20.7956 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H19C19.7956 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7956 22 20V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3ZM20 20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V11H20V20ZM20 9H4V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H6V6C6 6.26522 6.10536 6.51957 6.29289 6.70711C6.48043 6.89464 6.73478 7 7 7C7.26522 7 7.51957 6.89464 7.70711 6.70711C7.89464 6.51957 8 6.26522 8 6V5H16V6C16 6.26522 16.1054 6.51957 16.2929 6.70711C16.4804 6.89464 16.7348 7 17 7C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V9Z"
                  fill="#718096"
                />
              </svg>
              <Text fontWeight="500" color="#718096" fontSize="sm">
                Nov 7, 2020 · 11:30
              </Text>
            </HStack>
            <HStack>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1054 3.72549C17.3362 1.98039 14.9365 1 12.4343 1C9.9322 1 7.53254 1.98039 5.76326 3.72549C3.99397 5.47059 3 7.83745 3 10.3054C3 12.7733 3.99397 15.1402 5.76326 16.8853L11.6227 22.6756C11.7261 22.7784 11.849 22.86 11.9845 22.9157C12.12 22.9713 12.2653 23 12.4121 23C12.5589 23 12.7042 22.9713 12.8397 22.9157C12.9752 22.86 13.0982 22.7784 13.2015 22.6756L19.1054 16.8305C20.8673 15.0926 21.8571 12.7356 21.8571 10.278C21.8571 7.82032 20.8673 5.46333 19.1054 3.72549ZM17.5155 15.2623L12.4343 20.2959L7.3532 15.2623C6.34936 14.2712 5.66594 13.0089 5.38934 11.6349C5.11273 10.2608 5.25535 8.8367 5.79917 7.54258C6.343 6.24846 7.2636 5.14241 8.44462 4.36426C9.62564 3.58611 11.0141 3.17078 12.4343 3.17078C13.8546 3.17078 15.243 3.58611 16.4241 4.36426C17.6051 5.14241 18.5257 6.24846 19.0695 7.54258C19.6133 8.8367 19.756 10.2608 19.4794 11.6349C19.2027 13.0089 18.5193 14.2712 17.5155 15.2623Z"
                  fill="#718096"
                />
                <circle cx="12" cy="10.5" r="1.5" fill="#718096" />
              </svg>

              <Text fontWeight="500" color="#718096" fontSize="sm">
                Client`s place
              </Text>
            </HStack>
            <Text fontWeight="600" fontSize="xl">
              Rp. 350.000
            </Text>
          </Stack>
        </HStack>
      </Box>
      <SelectedServiceForm />
    </Box>
  );
};

const PayOptions = () => {
  const options = [
    {
      label: "Cash",
      value: "cash",
    },
    {
      label: "Credit Card",
      value: "cc",
    },
    {
      label: "eWallet/ Virtual bank",
      value: "virtual",
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "payment",
    defaultValue: "cash",
    onChange: console.log,
  });

  const group = getRootProps();
  return (
    <Box mt="40px">
      <Heading as="h1" mb="4" size="lg" fontWeight="700">
        Choose a way to pay
      </Heading>
      <SimpleGrid columns={2} gap="4" {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value: value.value });
          return (
            <CustomRadio key={value.value} {...radio}>
              {value.label}
            </CustomRadio>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

const TermConditions = () => {
  return (
    <HStack mt="8" spacing="4" alignItems="flex-start" mb="8">
      <Box pt="2.5">
        <Checkbox colorScheme="brand" />
      </Box>
      <Text fontWeight="500" color="#718096">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,{" "}
        <Link color="#1E21FF" textDecoration="underline">
          sed do eiusmod
        </Link>
      </Text>
    </HStack>
  );
};

const Footer = () => {
  return (
    <Center position="fixed" left="0" right="0" w="full" bottom="0" bg="white">
      <HStack
        w="full"
        p="4"
        borderTopWidth="1px"
        borderTopColor="#D3DEE9"
        h="20"
        alignItems="center"
      >
        <HStack justifyContent="space-between" w="full">
          <Button
            colorScheme="brand"
            variant="unstyled"
            textAlign="left"
            size="lg"
          >
            Previous
          </Button>
          <Button colorScheme="brand" size="lg">
            Continue
          </Button>
        </HStack>
      </HStack>
    </Center>
  );
};

function App() {
  return (
    <Container centerContent position="relative" px="0">
      <Header />
      <Box w="full" px="4" mb="100px" mt="140px">
        <UserCard />
        <SelectedService />
        <PayOptions />
        <TermConditions />
      </Box>
      <Footer />
    </Container>
  );
}

export default App;
