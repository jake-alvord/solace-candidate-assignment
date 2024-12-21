export function Card({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="rounded-lg shadow min-h-full mb-4 lg:w-5/12 xs:w-full">
      {children}
    </div>
  );
}
