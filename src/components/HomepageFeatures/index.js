import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Miteinander für den Kiez',
    Svg: require('@site/static/img//SPD_Hand_5_rot-frei_RGB.svg').default,
    description: (
      <>
        Unser Kiez ist Heimat von XX Menschen. Nur gemeinsam und in Abstimung mit Anwohnern, Betrieben und auch den Gästen aus aller Welt kann dieser gestaltet werden. 
      </>
    ),
  },
  {
    title: 'Stark gegen Rechts',
    Svg: require('@site/static/img/SPD_Faust_rot-frei_RGB.svg').default,
    description: (
      <>
        Wir tolerieren keinerlei rechtes oder in sonstiger Weise diskriminierendes Gedankengut. Wir verstehen es als unsere Pflicht hier entschieden gegenzuwirken.
      </>
    ),
  },
  {
    title: 'Für ein modernes Mitte',
    Svg: require('@site/static/img/SPD_Web_rot-frei_RGB.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
