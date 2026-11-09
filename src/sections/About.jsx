import { site } from '../data/site.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import teachingPhoto from '../assets/about-teaching.webp';

export default function About() {
  const { about } = site;
  const stats = site.stats.filter((s) => s.value !== null && s.value !== '');

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading index="01" eyebrow="About" id="about-title" title={<>Engineering the <em>details</em> people feel.</>} />

        <div className="about">
          <Reveal className="about__portrait">
            <figure className="portrait">
              <div className="portrait__frame">
                <img
                  src={teachingPhoto}
                  alt={`${site.name} leading a coding session in front of a lecture hall of students`}
                  width="592"
                  height="764"
                  loading="lazy"
                  decoding="async"
                />
                <span className="portrait__tag" aria-hidden="true">
                  <span className="portrait__tag-dot" /> Training developers
                </span>
                <span className="portrait__corner portrait__corner--tl" aria-hidden="true" />
                <span className="portrait__corner portrait__corner--br" aria-hidden="true" />
              </div>
              <figcaption>
                <span>{site.name}</span>
                <span>{site.role}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="about__body">
            <Reveal>
              {about.summary.map((p, i) => (
                <p key={i} className={i === 0 ? 'about__lead' : 'about__text'}>
                  {p}
                </p>
              ))}
            </Reveal>

            <ol role="list" className="principles">
              {about.philosophy.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.06} className="principle">
                  <span className="principle__n">0{i + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            {about.goals && (
              <Reveal as="p" className="about__goal">
                <span className="about__goal-label">Next</span>
                {about.goals}
              </Reveal>
            )}

            {stats.length > 0 && (
              <Reveal as="dl" className="stats">
                {stats.map((s) => (
                  <div key={s.label} className="stat">
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
