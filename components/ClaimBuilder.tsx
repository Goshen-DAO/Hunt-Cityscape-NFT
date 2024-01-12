import {
    MediaRenderer,
    Web3Button,
    useContract,
    useContractMetadata,
  } from "@thirdweb-dev/react";
  import { BUILDER_ADDRESS } from "../const/addresses";
  import { Box, Container, Flex, Heading, useToast } from "@chakra-ui/react";
  
  export function ClaimBuilder() {
    const toast = useToast();
    const { contract } = useContract(BUILDER_ADDRESS);
    const { data: metadata } = useContractMetadata(contract);
  
    const handleClaimSuccess = () => {
      toast({
        title: "Claim Successful",
        description: "You have successfully claimed a Builder.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    };
  
    const handleClaimError = (error: any) => {
      console.error("Error during claim:", error);
      // Display an error message
      toast({
        title: "Claim Error",
        description: "Something went wrong while claiming a Builder.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    };
  
    const handleClaimSubmit = () => {
      console.log("Claim transaction submitted");
    };
  
    return (
      <Container maxW={"1200px"}>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"50vh"}
        >
          <Heading>Get a Builder to start building</Heading>
          <Box borderRadius={"8px"} overflow={"hidden"} my={10}>
            <MediaRenderer src={metadata?.image} height="300px" width="300px" />
          </Box>
  
          <Web3Button
            contractAddress={BUILDER_ADDRESS}
            action={(contract) => contract.erc721.claim(1)}
            onSuccess={handleClaimSuccess}
            onError={handleClaimError}
            onSubmit={handleClaimSubmit}
          >
            Get your own Builder
          </Web3Button>
        </Flex>
      </Container>
    );
  }
  