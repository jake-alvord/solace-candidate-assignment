export default function AdvocatesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container lg:p-6 lg:w-8/12">
      <h1 className="text-2xl pb-4">Solace Advocates</h1>
      {children}
    </div>
  );
}
