export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>header</header>
      {children}
      <footer>footer</footer>{" "}
    </div>
  );
}
