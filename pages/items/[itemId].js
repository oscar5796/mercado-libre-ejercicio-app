import Layout from "../../components/Layout"
import { useRouter } from 'next/router'
import { urlBuild } from '../../apiRequests/urlBuild';
import Section from "../../components/Section/Section";
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Head from 'next/head';

const ProductDetailView = ({itemData}) => {

  return (
    <Layout>
      <Head>
        <title>{`${itemData.title} | MercadoLibre`}</title>
        <meta name="description" content={ itemData.title.slice(0, 140) }/>
      </Head>
      <Section>
        <ProductDetail productDetail={ itemData }/>
      </Section>
    </Layout>
  )
}

export default ProductDetailView;

export async function getServerSideProps(context) {
  const url = urlBuild({endpointBaseUrlName:"items", urlParams: {id: context.params.itemId}});
  const res = await fetch(url);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      itemData: data.item
    }
  }
}
