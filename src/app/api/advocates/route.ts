import { searchAdvocates } from "@/db/advocates/search";

export interface Advocate {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: number;
}

export async function GET(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);

    const query = url.searchParams.get("query");
    const page = parseInt(url.searchParams.get("page") ?? "1") ?? 1;

    const data = await searchAdvocates({ query, page });

    return Response.json({ data });
  } catch (err) {
    return Response.json({ message: "something went wrong" });
  }
}
