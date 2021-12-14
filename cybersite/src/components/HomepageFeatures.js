import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    title: 'Next One',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly1.
      </>
    ),
  },
];

const Events = [
    {
        description: (
          <>
            Docusaurus was designed from the ground up to be easily installed and
            used to get your website up and running quickly1.
          </>
        ),
      },
]

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--2')}>
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
    <div className="container">
        <div className="row">
            <div className="col text--center">
                <h1>Upcoming Events 📅</h1>
            </div>
        </div>
        <div className="row">
                <div className="col text--center">
                    <h2>Meeting 1</h2>
                    <h3>Cybersecurity news over the break.</h3>
                    <h2>Meeting 2</h2>
                    <h3>Internship advice and how-to's</h3>
                    <h2>Meeting 3</h2>
                    <h3>Topic meeting on a topic to be decided soon</h3>
                </div>
            </div>
    </div>
  );
}
