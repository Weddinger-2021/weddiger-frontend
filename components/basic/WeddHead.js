import Head from 'next/head';

export default function WeddHead(props){
    return(
        <Head>
        <title>{props.title}</title>
        <link rel="icon" href="../img/logo-wedd.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sevillana&display=swap" rel="stylesheet"/>
      </Head>
    )
}