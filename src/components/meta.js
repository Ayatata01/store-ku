import Head from "next/head";

export default function Meta(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico?v=1" />
    </Head>
  );
}
