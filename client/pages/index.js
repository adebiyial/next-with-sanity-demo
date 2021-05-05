import Link from 'next/link';

export default function Home() {
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
