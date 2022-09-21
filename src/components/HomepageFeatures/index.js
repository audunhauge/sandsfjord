import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Beskytt fjorden',
    Svg: require('@site/static/img/sandsfjord_ok.svg').default,
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Hva kan vi gjøre i felleskap for å bevare fjorden vår.
      </>
    ),
  },
  {
    title: 'En fjord i endring',
    Svg: require('@site/static/img/sandsfjord_bad.svg').default,
    //Png: require('@site/static/img/logo.png').default,
    description: (
      <>
        Sandsfjorden er i endring. Ny planer legges som vil endre hele fjorden 
        og påvirke miljøet for alle som har tilhold rundt denne.
      </>
    ),
  },
  
  {
    title: 'Sammen står vi sterkt',
    Svg: require('@site/static/img/sandsfjord_bra.svg').default,
    description: (
      <>
        Organisasjonen LSL gjør det mulig for oss å nå fram
        med våre synspunkt om fremtiden for fjorden vår.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
