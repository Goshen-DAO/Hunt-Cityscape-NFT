import type { AppProps } from "next/app";
import Head from "next/head";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  localWallet,
  embeddedWallet,
  trustWallet,
  rainbowWallet,
} from "@thirdweb-dev/react";
import { Mumbai, Polygon } from "@thirdweb-dev/chains";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/global.css";

const clientAPI = process.env.THIRDWEB_API_KEY as string;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThirdwebProvider
        activeChain={Polygon}
        clientId={clientAPI}
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet(),
          walletConnect(),
          safeWallet({
            personalWallets: [
              metamaskWallet(),
              coinbaseWallet(),
              walletConnect(),
              localWallet(),
              embeddedWallet({
                recommended: true,
                auth: {
                  options: [
                    "email",
                    "google",
                    "apple",
                    "facebook",
                  ],
                },
              }),
              trustWallet(),
              rainbowWallet(),
            ],
          }),
          localWallet(),
          embeddedWallet({
            recommended: true,
            auth: {
              options: [
                "email",
                "google",
                "apple",
                "facebook",
              ],
            },
          }),
          trustWallet(),
          rainbowWallet(),
        ]}
      >
        <Head>
          <title>Hunt Cityscape - #1 On-chain Play-And-Earn Game on Polygon Network </title>
          <meta
            name="description"
            content="Get ready for Hunt Cityscape – an NFT idle game dedicated to the vibrant community of hunt.town. Immerse yourself in a unique experience where building production earns you valuable Hunt Shards."
          />
          <meta property="og:image" content="/mine.png" />
          <meta name="twitter:card" content="/mine.png" />
          <meta name="twitter:image" content="/mine.png" />

          {/* Favicon */}
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

          {/* Apple Touch icon */}
          <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png" />

          {/* Android icons */}
          <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

          {/* Web Manifest */}
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <NavBar />
        <Component {...pageProps} />

      </ThirdwebProvider>
    </ChakraProvider>
  );
}

export default MyApp;
