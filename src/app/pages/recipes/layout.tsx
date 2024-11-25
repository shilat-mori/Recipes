"use client"
import Header from "../../components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
      </QueryClientProvider>
    </div>
  );
}
