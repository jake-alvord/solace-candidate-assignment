import db from "..";
import { advocates } from "@/db/schema";
import { ilike, or, sql, asc } from "drizzle-orm";

const PAGE_SIZE = 25;

export async function searchAdvocates({
  query,
  page,
}: {
  query: string | null;
  page: number;
}) {
  if (query) {
    const data = await db
      .select()
      .from(advocates)
      .where(
        or(
          ilike(advocates.city, `%${query}%`),
          ilike(advocates.firstName, `%${query}%`),
          ilike(advocates.lastName, `%${query}%`),
          sql`${advocates.specialties}::text ILIKE ${`%${query}%`}`
        )
      )
      .orderBy(asc(advocates.lastName))
      .limit(PAGE_SIZE)
      .offset((page - 1) * PAGE_SIZE);

    return data;
  }

  const data = await db
    .select()
    .from(advocates)
    .limit(PAGE_SIZE)
    .offest((page - 1) * PAGE_SIZE);

  return data;
}
