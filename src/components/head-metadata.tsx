import Head from "next/head";

const MetadataHead = ({ title }: { title: string }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content="Best shop cart ever" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default MetadataHead;
