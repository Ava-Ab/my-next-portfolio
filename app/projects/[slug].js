export default function ProjectPage({ params }) {
    return (
      <main>
        <h1>Project: {params.slug}</h1>
        <p>This is one of Ava’s featured works: {params.slug}</p>
      </main>
    );
  }
  