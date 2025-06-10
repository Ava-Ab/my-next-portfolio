export default function ProjectsPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#fdfdfd' }}>
      <h1 style={{ fontSize: '2rem', color: '#333', textAlign: 'center' }}>🚀 Projects in Progress</h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '700px', margin: '1rem auto', color: '#444' }}>
        I’m currently putting together some UX case studies that mix cognitive science with human-centered design.
        These projects reflect my journey as a designer with a curious mind.
      </p>
      <div style={{ textAlign: 'center' }}>
        <button style={{ padding: '1rem', backgroundColor: '#eef', borderRadius: '10px', border: 'none', fontSize: '1rem' }}>
          ✨ Cool things are coming soon — check back for updates!
        </button>
      </div>

      <hr style={{ margin: '3rem 0', border: 'none', borderTop: '1px solid #ccc' }} />

      <h2 style={{ fontSize: '1.75rem', color: '#111' }}>📘 Design 1 Projects</h2>
      <p style={{ fontSize: '1rem', maxWidth: '700px', marginBottom: '2rem' }}>
        Here are a few of my early projects from the Design 1 course at UC San Diego.
        These represent the start of my design journey and include explorations in layout,
        user needs, and interaction.
      </p>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', color: '#222' }}>📝 Project 1: Contextual Design</h3>
          <p>This project focused on understanding user context and mapping out interactions. (Group project)</p>
          <a href="/Project1.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'underline' }}>
            View Project 1 PDF
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', color: '#222' }}>📐 Project 2: Product Redesign</h3>
          <p>We analyzed an everyday product and proposed improvements to its design based on user needs and feedback. (Group project)</p>
          <a href="/Project2.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'underline' }}>
            View Project 2 PDF
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', color: '#222' }}>🧠 Project 3: Interface Innovation</h3>
          <p>This was a more open-ended exploration focused on developing interface concepts at different physical scales (inch/foot/yard). (Group project)</p>
          <a href="/project3.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'underline' }}>
            View Project 3 PDF
          </a>
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', color: '#222' }}>📘 Final Project: Design Case Study</h3>
          <p>This paper represents my final project, where I synthesized design theory with practical user-centered methods. It reflects both my personal design growth and academic learning.</p>
          <a href="/final-project-paper.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'underline' }}>
            View Final Project PDF
          </a>
        </div>
      </section>
    </main>
  );
}
