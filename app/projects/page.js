export default function ProjectsPage() {
  return (
    <main
      style={{
        padding: '3rem 1.5rem',
        fontFamily: 'Segoe UI, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fdfdfd',
        minHeight: '80vh',
      }}
    >
      <h1 style={{ fontSize: '2.75rem', color: '#333', marginBottom: '1rem' }}>
        🚀 Projects in Progress
      </h1>

      <p style={{ fontSize: '1.25rem', textAlign: 'center', maxWidth: '700px', color: '#444' }}>
        I’m currently putting together some  UX case studies that mix cognitive science
        with human-centered design. These projects reflect my journey as a designer with a curious mind.
      </p>

      <div
        style={{
          backgroundColor: '#e8f0fe',
          color: '#1a237e',
          padding: '1.5rem',
          marginTop: '2rem',
          borderRadius: '10px',
          maxWidth: '600px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        }}
      >
        <p style={{ fontSize: '1.1rem', margin: 0 }}>
          ✨ Cool things are coming soon — check back for updates!
        </p>
      </div>

      <p
        style={{
          fontSize: '1rem',
          color: '#777',
          marginTop: '2rem',
          textAlign: 'center',
        }}
      >
        Dynamic project pages are coming soon (e.g., <code>/projects/my-first-project</code>) — stay tuned!
      </p>
    </main>
  );
}
