import Header from '../components/Header';
import Head from 'next/head';

export default function Layout({ children, searchTerm }) {
  return (
    <div>
      <Head>
        <link
          href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.2/mercadolibre/favicon.svg"
          rel="icon"
        ></link>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      </Head>
      <Header searchTerm={searchTerm}/>
      {children}
    </div>
  );
}

