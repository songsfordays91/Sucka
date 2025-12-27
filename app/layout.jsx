import "../styles/globals.css";

export const metadata = {
  title: "Regal Creations",
  description: "AI song creator, designs and digital shop by Romaldo Franco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
