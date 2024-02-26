import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'USANDO LINUX',
    Svg : require('@site/static/img/tux.svg').default,
    description: (
      <>
       En esta guía usaremos Linux por lo que es indespensable tenerlo instalado.
      </>
    ),
  },
  {
    title: 'USA EL INTERPRETE QUE GUSTES',
    Svg: require('@site/static/img/powershell.svg').default,
    description: (
      <>
        Powershell, Gitbash, Zsh o hasta la simple CMD
      </>
    ),
  },
  {
    title: 'USA LA PLATAFORMA QUE GUSTES',
    Svg: require('@site/static/img/gitlab.svg').default,
    description: (
      <>
        Gitlab o Github, no es necesario que te compliques tanto
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
