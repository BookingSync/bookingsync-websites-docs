import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

const FeatureList = [
  {
    title: 'Theme Structure',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        Understand layouts, templates, and assets that shape a theme.
      </>
    ),
  },
  {
    title: 'Liquid Reference',
    Svg: require('@site/static/img/focus.svg').default,

    description: (
      <>
        Use tags, filters, and objects to render dynamic content.
      </>
    ),
  },
  {
    title: 'Reusable Snippets',
    Svg: require('@site/static/img/universe.svg').default,
    description: (
      <>
        Compose reusable UI with snippets and includes.
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
        <Heading as="h3">{title}</Heading>
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
