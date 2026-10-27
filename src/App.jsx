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
  {
    name: 'Maya Lin',
    title: 'Senior UI/UX Engineer',
    company: 'Circle City Tech',
    talkTitle: 'Accessible Design Systems in Action',
    summary:
      'A deep dive into building inclusive web experiences from the ground up. Learn how to combine semantic HTML and React components to meet rigorous accessibility standards effortlessly.',
    topics: [
      'Writing meaningful alt text and ARIA attributes',
      'Designing high-contrast color palettes',
      'Keyboard navigation best practices',
    ],
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Elena Rostova',
    title: 'Full Stack Architect',
    company: 'Midwest Digital',
    talkTitle: 'Deploying Jamstack Apps to Production',
    summary:
      'Demystifying modern static site hosting and continuous deployment pipelines. Discover how to push React apps live in seconds with robust CI/CD workflows.',
    topics: [
      'Preparing production builds locally',
      'Automating Netlify branch previews',
      'Managing environment variables securely',
    ],
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
  },
];

export default function App() {
  return (
    <div className="app-container">
      <header className="event-header">
        <h1>Circle City Dev Night</h1>
        <p>Tuesday, October 27, 2026 | Event Room at the JW Marriott, Indianapolis</p>
      </header>

      <main className="speakers-grid">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} speaker={speaker} />
        ))}
      </main>

      <footer className="app-footer">
        <p>Built for NEWM N317.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          View GitHub Repository
        </a>
      </footer>
    </div>
  );
}
