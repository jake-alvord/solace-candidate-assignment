import { Card } from "@/components/card";
import { Pill } from "./pill";
import { fetchFilteredAdvocates } from "../data/fetchFilteredAdvocates";

import type { Advocate } from "@/app/api/advocates/route";

export async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const advocates = await fetchFilteredAdvocates({ query, currentPage });

  if (!advocates?.length) {
    return (
      <div>
        <p className="text-xl py-4">No advocates found!</p>
        <p className="text-sm">Try changing your search term</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-between lg:mx-8">
      {advocates.map((advocate: Advocate) => (
        <Card key={advocate.phoneNumber}>
          <div className="rounded-t-lg bg-emerald-300 p-2">
            <p className="text-xl">
              {advocate.firstName} {advocate.lastName}, {advocate.degree}
            </p>
            <p className="text-sm">
              {advocate.city} | {advocate.phoneNumber}
            </p>
            <p className="text-sm">
              {advocate.yearsOfExperience} year
              {advocate.yearsOfExperience > 1 ? "s" : ""} of experience
            </p>
          </div>
          <div className="p-4">
            <p className="text-sm">Specialties</p>
            <div className="flex flex-wrap pl-1">
              {advocate.specialties.map((specialty: string) => (
                <Pill key={specialty} text={specialty} />
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
