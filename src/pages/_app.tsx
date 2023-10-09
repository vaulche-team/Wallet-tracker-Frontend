import { AppProps } from "next/app";
// import Layout from '../components/layout'
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import "@/src/global.css";
import { ChakraProvider } from "@chakra-ui/react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
