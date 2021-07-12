import Head from 'next/head';

export default function WeddHead(props){
    return(
        <Head>
        <title>{props.title}</title>
        <link rel="icon" href="img/logo-wedd.png" />
      </Head>
    )
}