import Link from 'next/link';
import client from '../lib/sanity';

export default function Home({ data }) {
  const { siteHeaderData, homepageData } = data;

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="siteHeader-nav__container">
            <h1 className="site-header__logo">Next.js + Sanity CMS</h1>
            <Link href="/">
              <a className="site-header__cta">Clone Repo</a>
            </Link>
          </div>
        </div>
      </header>
      <section className="homepage-hero">
        <div className="container">
          <div className="homepageHero-container">
            <div className="homepage-copySection__container">
              <section className="homepageHero-copy__section">
                <h1 className="homepageHero-title">Glass Building At The End Of A Shadowed Street Photo</h1>
                <p className="homepageHero-subtitle">Photo of a glass building at the end of a tall shadowed street.</p>
                <Link href="/">
                  <a className="homepageHero-cta">Read the article</a>
                </Link>
              </section>
              <section className="homepage-graphic__section">
                <figure>
                  <img className="homepage-img" src="/glass-building-at-the-end-of-a-shadowed-street.jpg" alt="" />
                  <figcaption>
                    Photo by:{' '}
                    <Link href="https://burst.shopify.com/@justinopk">
                      <a>Choi Pyungkyu</a>
                    </Link>
                  </figcaption>
                </figure>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const siteHeaderQuery = `*[_type == "siteheader"][0] {
  title,
  repoURL {
    current
  }
}`;

// Create a query called homepageQuery
const homepageQuery = `*[_type == "homepage"][0] {
  title,
  subtitle,
  "ctaUrl": cta {
    current
        },
  image {
    ...asset->
  }
}`;

export async function getStaticProps() {
  const homepageData = await client.fetch(homepageQuery);
  const siteHeaderData = await client.fetch(siteHeaderQuery);

  const data = { homepageData, siteHeaderData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
