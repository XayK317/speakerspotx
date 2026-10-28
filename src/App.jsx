import SpeakerCard from './components/SpeakerCard';
import './App.css';

const speakers = [
  {
    name: 'Tevita Fale',
    title: 'Lead Event Strategist',
    company: 'Alchemax',
    talkTitle: 'Unlocking Potential: Underfunded Communities & Niche Markets',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    topics: [
      'Understand how to tap into hidden networking events in underfunded communities and local areas',
      'Portfolio critiques and how to market yourself',
      'Auditing your image to your event and career applications',
    ],
    image: '/watermarked_img_10288054447789573469.png',
  },
];

export default function App() {
  return (
    <div className="app-container">
      <header className="event-header">
        <h1>Circle City Dev Night</h1>
        <p>Tuesday, October 27, 2026 at 2pm | Conference Room A at the JW Marriott, Indianapolis</p>
      </header>

      <main className="speakers-grid">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} speaker={speaker} />
        ))}
      </main>

    </div>
  );
}
