import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Simple to Use</>,
    description: (
      <>
        RoWifi offers the most basic and amazing simple to use set up, this includes three offered binds, groupbinds, rankbinds &amp; custombinds!
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    description: (
      <>
        You can focus on managing your group. RoWifi will take care of your server role management.
      </>
    ),
  },
  {
    title: <>Powered by C#</>,
    description: (
      <>
        RoWifi harnesses the power of C# to ensure a smooth and seamless experience.
      </>
    ),
  },
  {
    title: <>Incredible Support Team</>,
    description: (
      <>
        Our SUPPORT TEAM is always there for your daily needs and concerns, they strive to help and bring efficient support on a daily basis! 
        You may find us on our discord support server for more information.
      </>
    ),
  },
  {
    title: <>Highly Customizable</>,
    description: (
      <>
        RoWifi allows you to create endless possibilities such as multiple group and rank binds, 
        and most importantly, you can use custombinds that provides more customizing power to you!
      </>
    ),
  },
  {
    title: <>Unique Blacklist System</>,
    description: (
      <>
        RoWifi doesn't just only offer simple basic features, but a BLACKLIST SYSTEM! 
        The system itself allows you to blacklist any group or user of your own desires, 
        we allow you define your own blacklists to assure that you have nothing but the best control over it!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Welcome`}
      description="The Bind Oriented Roblox-Discord Verification Bot">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/about')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
