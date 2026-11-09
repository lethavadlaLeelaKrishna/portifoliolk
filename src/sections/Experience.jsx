import { useState } from 'react';
import { experience } from '../data/experience.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

const TRACKS = [
  { id: 'all', label: 'All' },
  { id: 'development', label: 'Development' },
  { id: 'teaching', label: 'Teaching' },
];

export default function Experience() {
  const [track, setTrack] = useState('all');
  const items = track === 'all' ? experience : experience.filter((e) => e.type === track);
  const hasBoth = new Set(experience.map((e) => e.type)).size > 1;

  return (
    <section id="experience" className="section section--alt" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Journey"
          id="experience-title"
          title={<>Building products, and <em>teaching</em> others to.</>}
        />

        {hasBoth && (
          <div className="tracks" role="group" aria-label="Filter experience">
            {TRACKS.map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={track === t.id}
                className={`filter filter--${t.id} ${track === t.id ? 'is-active' : ''}`}
                onClick={() => setTrack(t.id)}
              >
                {t.id !== 'all' && <span className={`track-dot track-dot--${t.id}`} aria-hidden="true" />}
                {t.label}
              </button>
            ))}
          </div>
        )}

        <ol role="list" className="timeline">
          {items.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${job.role}`} delay={i * 0.05} className={`timeline__item timeline__item--${job.type}`}>
              <div className="timeline__when">
                <span className="timeline__period">{job.period}</span>
                <span className={`track-badge track-badge--${job.type}`}>
                  {job.type === 'teaching' ? 'Teaching' : 'Development'}
                </span>
              </div>
              <span className="timeline__node" aria-hidden="true" />
              <div className="timeline__card">
                <h3 className="timeline__role">{job.role}</h3>
                <p className="timeline__company">
                  {job.company}
                  {job.location && <span> · {job.location}</span>}
                </p>
                <p className="timeline__summary">{job.summary}</p>
                <ul role="list" className="timeline__points">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <ul role="list" className="tags">
                  {job.tech.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
