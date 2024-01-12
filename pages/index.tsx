import {
  ChakraProvider,
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const DynamicButton = dynamic(
  () => import("@chakra-ui/react").then((module) => ({ default: module.Button })),
  { ssr: false }
);

const DiscordButton = () => (
  <a
    href="https://discord.gg/48yUEUdTVz"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#7289DA", // Discord color
      color: "#FFFFFF",
      padding: "10px 20px",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "bold",
      marginTop: '20px',
    }}
  >
    <FontAwesomeIcon icon={faDiscord} style={{ marginRight: '10px' }} />
    Join our Discord
  </a>
);

const Index: React.FC = () => (
  <ChakraProvider>
    <Container maxW="container.lg" centerContent>
      {/* Welcome Section */}
      <Box textAlign="center" padding="6">
        <Heading as="h1" size="xl">
          Welcome to Hunt Cityscape
        </Heading>
        <Text fontSize="lg" mt="4">
          Explore the vibrant world of hunt.town in an NFT idle game. Build your city, earn Hunt Shards, and collect unique NFTs.
        </Text>
        {/* Play Now Button */}
        <Link href="/play" passHref>
          <DynamicButton colorScheme="red" size="lg" mt="4">
            Play Now
          </DynamicButton>
        </Link>
        {/* Cityscape Images */}
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justify="center"
        >
          <Image
            src="/mine.png"
            alt="Hunt Cityscape"
            mt="6"
            maxW="100%"
            maxHeight="400px"
            borderRadius="10px"
            objectFit="cover"
          />
        </Flex>
      </Box>

      {/* About Section */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", md: "row" }}
        padding="6"
        bgColor="gray.100"
      >
        <Box textAlign="center" maxW={{ base: "100%", md: "45%" }}>
          <Heading as="h2" size="lg">
            About Hunt Cityscape
          </Heading>
          <Text fontSize="md" mt="4">
            Hunt Cityscape is an NFT idle game where building production earns you valuable Hunt Shards. Join the community and start building your digital city today.
          </Text>
        </Box>
        <Image
          src="/too.png"
          alt="About Hunt Cityscape"
          mt={{ base: "6", md: "0" }}
          maxW="100%"
          maxHeight="400px"
          borderRadius="10px"
          objectFit="cover"
        />
      </Flex>

      {/* Key Features Section */}
      <Box textAlign="center" padding="6">
        <Heading as="h2" size="lg">
          Key Features
        </Heading>
        <Text fontSize="md" mt="4">
          <strong>Build Your City:</strong> Start with basic structures and watch your cityscape grow as you earn more Hunt Shards.
          <br />
          <strong>Earn Hunt Shards:</strong> Idle away as your buildings produce, accumulating Hunt Shards over time. The more you build, the more you earn!
          <br />
          <strong>Exclusive NFTs:</strong> Each building in your city is represented by a unique NFT. Collect and trade these digital treasures within the hunt.town community.
        </Text>
      </Box>

      {/* Community-Centric Gameplay Section */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column-reverse", md: "row" }}
        padding="6"
      >
        <Image
          src="/barn.png"
          alt="Community-Centric Gameplay"
          mt={{ base: "6", md: "0" }}
          maxW="100%"
          maxHeight="400px"
          borderRadius="10px"
          objectFit="cover"
        />
        <Box textAlign="center" maxW={{ base: "100%", md: "45%" }}>
          <Heading as="h2" size="lg">
            Community-Centric Gameplay
          </Heading>
          <Text fontSize="md" mt="4">
            <strong>Collaborate and Trade:</strong> Engage with fellow players, collaborate on building projects, and trade your NFTs to enhance your cityscape.
            <br />
            <strong>Compete for Rewards:</strong> Participate in community challenges and events to earn extra Hunt Shards and exclusive rewards.
            <br />
            <strong>Interactive Elements:</strong> Unlock special features and surprises within your cityscape, adding an extra layer of engagement to your idle gameplay.
          </Text>
        </Box>
      </Flex>

      {/* Sustainability and Innovation Section */}
      <Box textAlign="center" padding="6">
        <Heading as="h2" size="lg">
          Sustainability and Innovation
        </Heading>
        <Text fontSize="md" mt="4">
          <strong>Blockchain Transparency:</strong> Hunt Cityscape utilizes blockchain technology for secure and transparent transactions, ensuring a sustainable and eco-friendly gaming experience.
        </Text>
      </Box>

      {/* How to Get Started Section */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", md: "row" }}
        padding="6"
        bgColor="gray.100"
      >
        <Box textAlign="center" maxW={{ base: "100%", md: "45%" }}>
          <Heading as="h2" size="lg">
            How to Get Started
          </Heading>
          <Text fontSize="md" mt="4">
          <strong>Get Your Builder:</strong> Enlist your builder to shape and construct your city.
          <br />
            <strong>Build Your City:</strong> Start with the basics and expand your cityscape by strategically placing new structures.
            <br />
            <strong>Earn Hunt Shards:</strong> Idle gameplay allows you to accumulate Hunt Shards over time, even when you're not actively playing.
            <br />
            <strong>Collect NFTs:</strong> Each building is represented by a unique NFT. Collect, trade, and showcase your digital assets within the hunt.town community.
            <br />
            <strong>Engage with the Community:</strong> Join events, collaborate with other players, and stay tuned for updates and exclusive giveaways.
          </Text>
        </Box>
        <Image
          src="/sawmill.png"
          alt="How to Get Started"
          mt={{ base: "6", md: "0" }}
          maxW="100%"
          maxHeight="400px"
          borderRadius="10px"
          objectFit="cover"
        />
      </Flex>

      {/* Discord CTA Button */}
      <DiscordButton />
    </Container>
  </ChakraProvider>
);

export default Index;
