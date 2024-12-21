"use client";

import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function Search() {
  const [temporaryTerm, setTemporaryTerm] = useState<string>("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string): void {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
      params.set("page", "1");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === "Enter") {
      handleSearch(temporaryTerm.trim());
    }
  }

  return (
    <div className="flex pl-2 md:w-8/12">
      <div className="flex flex-col flex-1 pr-5">
        <input
          className="peer block w-full rounded-md border border-gray-400 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder="Search for advocates"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTemporaryTerm(e.target.value);
          }}
          value={temporaryTerm}
          onKeyDown={handleKeyDown}
        />
        <div className="flex p-2 justify-between w-full">
          <p className="text-xs">
            Current Search: {searchParams.get("query")?.toString() || "None"}
          </p>
          <p
            className="text-xs cursor-pointer underline"
            onClick={() => handleSearch("")}
          >
            Reset Search
          </p>
        </div>
      </div>
      <button
        className="w-min h-min p-2 border border-gray-300 rounded-md"
        onClick={() => handleSearch(temporaryTerm.trim())}
      >
        Search
      </button>
    </div>
  );
}
