import Head from "next/head";

const MetadataHead = ({ title }: { title: string }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content="Salesforce interview project" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default MetadataHead;
