import {
  useBalance,
  useDisconnect,
  useAddress,
  ConnectWallet,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import Link from "next/link";
import { useQRCode } from "next-qrcode";
import {
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  Box, // Add this import for Box
} from "@chakra-ui/react";

function AccountPage() {
  // Fetch native currency balance
  const nativeCurrencyBalance = useBalance();
  const disconnect = useDisconnect();
  const address = useAddress();
  const [isCopied, setIsCopied] = useState(false);
  const { Canvas } = useQRCode();

  // Replace tokenAddresses with an array of token addresses and symbols
  const tokens = [
    {
      address: "0x8E7EA09028b4F385A44A3CeB6c1a372a52c0e897",
      symbol: "$HSHRDS",
    },
    { address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", symbol: "$USDC" },
  ];

  const tokenBalances = tokens.map((token) => {
    const { data, isLoading } = useBalance(token.address);

    return {
      data,
      isLoading,
      tokenSymbol: token.symbol,
    };
  });

  function copyToClipboard(text: string) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000); // Reset copied state after 3 seconds
  }

  function numberWithCommas(x: number | string): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Container maxW={"1440px"} py={4}>
      {address ? (
        <Flex flexDirection={["column", "column", "row"]}>
          <Link href="/play">
            <Button mb={4}>Back</Button>
          </Link>
          <Flex
            flexDirection={"column"}
            mr={[0, 0, 8]}
            p={10}
            alignItems={["center"]}
          >
            <ConnectWallet
              theme={"dark"}
              btnTitle={"Login"}
              modalTitle={"Connect"}
              switchToActiveChain={true}
              modalSize={"wide"}
              welcomeScreen={{}}
              modalTitleIconUrl={""}
              detailsBtn={() => {
                return (
                  <Canvas
                    text={address}
                    options={{
                      width: 128,
                    }}
                  />
                );
              }}
            />
            <Flex alignItems="center" mt={[1, 1, 0]}>
              <Text as="b">UID</Text>
            </Flex>
            <Flex alignItems="center" mt={[1, 1, 0]}>
              <Text
                fontSize={"sm"}
                textAlign={["center"]}
                borderRadius={4}
                pr={2}
              >
                {address}
              </Text>
            </Flex>

            <Flex alignItems="center" mt={[4, 4, 0]}>
              <Button size="sm" onClick={() => copyToClipboard(address)}>
                {isCopied ? "Copied!" : "Copy UID"}
              </Button>
            </Flex>
            <Flex alignItems="center" mt={[4, 4, 0]}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Button onClick={disconnect}>Logout</Button>
            </Flex>
          </Flex>
          <Box>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={3}
            >
              {tokenBalances.map((balance) => (
                <Box
                  key={balance.tokenSymbol}
                  bg="gray.100"
                  p={4}
                  borderRadius="md"
                >
                  <Heading as="h3" size="md" mb={2}>
                    {balance.isLoading
                      ? "Loading..."
                      : `${balance.tokenSymbol}`}
                  </Heading>
                  <Text>
                    {balance.isLoading
                      ? "Loading..."
                      : balance.data
                      ? numberWithCommas(
                          parseFloat(balance.data.displayValue).toFixed(2)
                        )
                      : `No balance available for ${balance.tokenSymbol}.`}
                  </Text>
                </Box>
              ))}

              {/* Display native currency balance */}
              <Box bg="gray.100" p={4} borderRadius="md">
                <Heading as="h3" size="md" mb={1}>
                  {nativeCurrencyBalance.isLoading
                    ? "Loading..."
                    : "Native Currency Balance:"}
                </Heading>
                <Text>
                  {nativeCurrencyBalance.isLoading
                    ? "Loading..."
                    : nativeCurrencyBalance.data
                    ? `${nativeCurrencyBalance.data.symbol} Balance: ${nativeCurrencyBalance.data.displayValue}`
                    : "No native currency balance available."}
                </Text>
              </Box>
            </Grid>
          </Box>
        </Flex>
      ) : (
        <Flex justifyContent="center" alignItems="center" height="100vh">
          <ConnectWallet
            theme={"dark"}
            btnTitle={"Login"}
            modalTitle={"Connect"}
            switchToActiveChain={true}
            modalSize={"wide"}
            welcomeScreen={{}}
            modalTitleIconUrl={""}
            detailsBtn={() => {
              return <Text></Text>;
            }}
          />
        </Flex>
      )}
    </Container>
  );
}

export default AccountPage;
