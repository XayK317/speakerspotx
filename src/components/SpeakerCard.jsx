import TopicList from './TopicList';
import './SpeakerCard.css';

export default function SpeakerCard({ speaker }) {
  return (
    <article className="speaker-card">
      <img
        src={speaker.image}
        alt={`Headshot of ${speaker.name}`}
        className="speaker-img"
      />
      <h2>{speaker.name}</h2>
      <p className="speaker-title">
        {speaker.title} at {speaker.company}
      </p>
      <h3 className="talk-title">“{speaker.talkTitle}”</h3>
      <p className="talk-summary">{speaker.summary}</p>
      <TopicList topics={speaker.topics} />
    </article>
  );
}
