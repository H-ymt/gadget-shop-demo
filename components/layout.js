import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Gadget Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
