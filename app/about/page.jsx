export default function AboutPage() {
    return (
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h1>
  
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Hi! I’m <strong>Ava Abadian</strong> — a Cognitive Science major with a specialization in Design & Interaction at UC San Diego.
          I started as a pre-med student studying neuroscience, but eventually found my passion in the world of design.
          Now I’m exploring how I can bring together the brain and behavior with the art of human-centered design.
        </p>
  
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginTop: '1.5rem' }}>
          I’m still growing in this field and excited to keep learning — I see myself as a lifelong learner who’s curious about everything.
          If I could have a superpower, it would be knowing everything about every field (seriously!).
          Whether it’s design, science, or the human experience, I want to keep evolving.
        </p>
  
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginTop: '1.5rem' }}>
          Outside of school and work, I love photography, traveling, being in nature, working out, and listening to music.
          One of my biggest dreams is to build a career that lets me work remotely, see the world, and one day give back to my parents —
          because everything I’m doing now is all because of their love and sacrifices. 💛
        </p>
  
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginTop: '2rem', fontStyle: 'italic', color: '#444' }}>
          If you're curious about my academic interests, check out this 
          {" "}
          <a href="https://cogsci.ucsd.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'underline' }}>
            link to UCSD Cognitive Science Department
          </a>.
        </p>
      </main>
    );
  }
  