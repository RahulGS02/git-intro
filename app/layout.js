export const metadata = {
  title: "Welcome",
  description: "A simple Next.js welcome",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
