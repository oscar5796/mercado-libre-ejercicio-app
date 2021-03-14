import Layout from "../../components/Layout";
import ListItems from '../../components/ListItems/ListItems';
import { urlBuild } from '../../apiRequests/urlBuild';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useItems } from '../../customHooks/useItems';
import Section from "../../components/Section/Section";

const SearchResultsPage = ({}) => {
  const router = useRouter();
  const { search } = router.query;

  const url = urlBuild({endpointBaseUrlName:"items", queryParams: {q: search, limit: 4}});
  const result = useItems(url);

  return (
    <Layout searchTerm={search} >
      <Head>
        <title>{`${search} | MercadoLibre`}</title>
      </Head>
      <Section>
        {
          search && !result.isLoading && !result.error ? <ListItems items={result.items.items} /> : null
        }
      </Section>
    </Layout>
  )
}

export default SearchResultsPage;