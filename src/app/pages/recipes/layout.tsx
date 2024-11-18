import Header from "../../components/Header";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
}
