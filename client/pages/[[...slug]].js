import delve from 'dlv';
import ErrorPage from 'next/error';
import Layout from '../components/layout';
import dynamic from 'next/dynamic';
const BlockManager = dynamic(
  () => import('../components/shared/BlockManager'),
  { ssr: false }
);
import { getData, handleRedirection } from '../utils';
import { getLocalizedParams } from '../utils/localize';

const Universals = ({ global, pageData, preview }) => {
  if (pageData === null) {
    return <ErrorPage statusCode={404} />;
  }
  console.log('pageData', pageData)
  const blocks = delve(pageData, 'attributes.blocks');
  return (
    <Layout global={global} pageData={pageData} type="pages" preview={preview}>
      {blocks && (
        <BlockManager
          blocks={blocks}
          type="collectionType"
          contentType="page"
          pageData={pageData}
        />
      )}
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query);
  console.log('context-: ', context)
  console.log('slug-', slug, locale)
  try {
    const data = getData(
      slug,
      locale,
      'page',
      'collectionType',
      context.preview
    );

    console.log('page页面即将请求的接口地址-: ', delve(data, 'data'))
    const res = await fetch(delve(data, 'data'));
    const json = await res.json();

    console.log(json)
    if (!json.data.length) {
      return handleRedirection(context.preview, null);
    }

    return {
      props: { pageData: json.data[0], preview: context.preview || null },
    };
  } catch (error) {
    return {
      props: { pageData: null },
    };
  }
}

export default Universals;