export default function HomePage() {
  return (
    <main style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif', 
      textAlign: 'center', 
      backgroundColor: '#E6F0FA', // baby blue background
      minHeight: '100vh' 
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome! 👋</h1>
      <img 
        src="/AVA.JPG" 
        alt="Ava Abadian" 
        style={{ 
          width: '220px', 
          borderRadius: '50%', 
          margin: '1rem auto' 
        }} 
      />
      <h2 style={{ marginTop: '1rem' }}>Hi, I'm Ava!</h2>
      <p style={{ maxWidth: '800px', margin: '1rem auto', fontSize: '1.1rem' }}>
        I'm a Cognitive Science major at UCSD with a specialization in Design and Interaction. 
        I’m passionate about UX design, neuroscience, and building technology that feels human.
      </p>
      <p style={{ fontSize: '1rem', maxWidth: '800px', margin: '1rem auto' }}>
        Explore my <a href="/projects" style={{ color: '#0070f3', textDecoration: 'underline' }}>projects</a>, 
        read about my <a href="/about" style={{ color: '#0070f3', textDecoration: 'underline' }}>story</a>, 
        or check out my <a href="/sketches" style={{ color: '#0070f3', textDecoration: 'underline' }}>sketches</a>.
      </p>
    </main>
  );
}
