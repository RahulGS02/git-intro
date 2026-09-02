export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>👋 Welcome!</h1>
        <p style={styles.subtitle}>
           welcome back to page built with Next.js.
        </p>
        <a href="https://nextjs.org/docs" style={styles.button}>
          Get Started
        </a>
      </div>
    </main>
  );
}

const styles = {
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    fontFamily: "system-ui, sans-serif",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "48px 40px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    maxWidth: "420px",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0 0 12px",
    color: "#0f172a",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#475569",
    margin: "0 0 24px",
  },
  button: {
    display: "inline-block",
    padding: "12px 24px",
    background: "#0f172a",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600,
  },
};
