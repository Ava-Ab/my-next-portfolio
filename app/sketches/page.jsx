export default function SketchesPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Sketches & Concepts</h1>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        This page showcases in-progress ideas and early explorations. Here, you'll find concepts that reflect ongoing iterations and my personal journey through COGS 125.
      </p>

      <ul style={{ marginTop: '1.5rem', fontSize: '1.05rem' }}>
        <li><strong>🩺 MedTerm Translator:</strong> A real-time tool to help tech professionals understand medical terms in hospital settings.</li>
        <li><strong>♻️ Dissolvable Packaging:</strong> Sustainable product packaging inspired by material like dissolvable medicine capsules.</li>
        <li><strong>🗣️ Accent & Language Translator:</strong> A device/app that improves understanding between people with different dialects and cultural tones.</li>
      </ul>

      <h2 style={{ marginTop: '3rem', fontSize: '1.8rem' }}>🖋 Interface Sketches</h2>

      <p style={{ fontSize: '1.05rem', marginTop: '1rem' }}>
        <strong>⌚ Inch-Scale: Smartwatch Reminder Assistant</strong><br />
        A smartwatch interface designed for students with ADHD or busy schedules. The device vibrates as class or meeting times approach and offers expandable, scrollable icons that link to flashcards, planners, and quick to-dos.
        <br />
        <a href="/Inch-final.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          View Inch-Scale PDF
        </a>
      </p>

      <p style={{ fontSize: '1.05rem', marginTop: '1.5rem' }}>
        <strong>📱 Foot-Scale: Personal Routine Companion</strong><br />
        A flexible tablet- or iPad-based interface that tracks daily routines through visual prompts and interactive scheduling tools. Designed to assist individuals in habit tracking, focus, and wellness reminders.
        <br />
        <a href="/Foot-final.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          View Foot-Scale PDF
        </a>
      </p>

      <p style={{ fontSize: '1.05rem', marginTop: '1.5rem' }}>
        <strong>🖥️ Yard-Scale: Collective Focus Space</strong><br />
        A public shared space display showing real-time focus status, break timers, and affirmations. Ideal for group study rooms or community spaces where subtle visual reinforcement encourages structure and co-working motivation.
        <br />
        <a href="/yard-final.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          View Yard-Scale PDF
        </a>
      </p>

      <p style={{ fontStyle: 'italic', marginTop: '2rem', color: '#555' }}>
        These ideas are still evolving ,thank you for checking this page hope you come back soon and see more of my projects!
      </p>
    </main>
  );
}
