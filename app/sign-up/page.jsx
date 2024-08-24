'use client'
import React, { useState, useEffect } from 'react';
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputGroup,
    InputRightElement,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Flex,
    CardHeader,
    Heading,
    Text,
    useToast,
  } from "@chakra-ui/react";
function SignUp() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    email.length == 0 ? setEmailError(true) : setEmailError(false);
    password.length == 0 ? setPassError(true) : setPassError(false);
  }, [email, password]);

  function verifyFields() {
    return !(emailError && passError);
  }
//   const { toggleColorMode } = useColorMode();
//   const formBackground = useColorModeValue('gray.100', 'gray.700');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ email, password, confirmPassword });
    };
    
    const handleSignUp = () => {
        
    }

  return (
    <Card maxW="xl">
      <CardHeader>
        <Heading size="md">Sign in to DoubtStack</Heading>
      </CardHeader>
      <CardBody>
              <form
                //   onSubmit={ }
              >
          <Flex gap="2.5" direction="column">
            <FormControl>
              <Input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Your email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {emailError && (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <InputGroup>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <InputRightElement width="4.5rem">
                                  <Button h="1.75rem" size="sm"
                                    //   onClick={ }
                                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {/* <ButtonGroup> */}
              <Button
                variant="outline"
                onClick={handleSignUp}
                isLoading={loading}
              >
                Sign up
              </Button>
              {/* <Button
                // onClick={}
                colorScheme="purple"
                isLoading={loading}
              >
                Sign in
              </Button>
            </ButtonGroup> */}
          </Flex>
        </form>
      </CardBody>
    </Card>
  );
}

export default SignUp;
