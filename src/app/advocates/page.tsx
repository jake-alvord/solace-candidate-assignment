import { Suspense } from "react";
import { Search } from "@/components/search";
import { Table } from "./components/table";

export default async function Advocates(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <div className="pb-6">
        <p className="text-xl pb-2">Search</p>
        <Search />
      </div>
      <Suspense
        key={query + currentPage}
        fallback={<p className="text-xl py-4">Loading...</p>}
      >
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
