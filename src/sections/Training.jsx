import { GraduationCap, MapPin } from 'lucide-react';
import { training } from '../data/experience.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Training() {
  if (!training) return null;

  return (
    <section id="training" className="section" aria-labelledby="training-title">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Corporate training"
          id="training-title"
          title={<>Training developers <em>on campus.</em></>}
          lede={training.summary}
        />

        <Reveal className="training__head">
          <p className="training__eyebrow">
            <GraduationCap size={16} aria-hidden="true" /> Institutions I have trained at
          </p>
          <ul role="list" className="training__places">
            {training.institutions.map((inst) => (
              <li key={inst.name} className="training__place">
                <span className="training__place-name">{inst.name}</span>
                <span className="training__place-loc">
                  <MapPin size={12} aria-hidden="true" /> {inst.place}
                </span>
              </li>
            ))}
            <li className="training__place training__place--more">&amp; more institutions</li>
          </ul>
        </Reveal>

        {training.topics?.length > 0 && (
          <Reveal as="ul" role="list" className="tags training__topics">
            {training.topics.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </Reveal>
        )}

        {training.photos.length > 0 && (
          <ul role="list" className="training__gallery">
            {training.photos.map((p, i) => (
              <Reveal as="li" key={p.caption} delay={i * 0.06} className="training__photo">
                <figure>
                  <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
                  <figcaption>{p.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
