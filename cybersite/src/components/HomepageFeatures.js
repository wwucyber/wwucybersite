import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Security Documentation',
    Svg: require('../../static/img/computer-svgrepo-com.svg').default,
    description: (
      <>
        View our <a href="docs/welcome"><b>Docs</b></a> section, which features competiton-oriented infosec reference material for use during club events.
      </>
    ),
  },
  {
    title: 'Get Involved',
    Svg: require('../../static/img/group-svgrepo-com.svg').default,
    description: (
      <>
        Interested in <a href="/join"><b>joining</b></a> the club? Take part in our weekly security meetings and/or compete on behalf of the university.
      </>
    ),
  },
  {
    title: 'Stay Up to Date',
    Svg: require('../../static/img/user-svgrepo-com.svg').default,
    description: (
      <>
        Record of our recent activity may be found <a href="/blog"><b>here</b></a>. Ensure you don't miss anything <a href="/blog"><b>important</b></a> by joining our <a href="/blog"><b>Discord</b></a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}