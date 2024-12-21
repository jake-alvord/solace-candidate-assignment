const BASE_URL = "http://localhost:3000";

export async function fetchFilteredAdvocates({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const params = query
    ? new URLSearchParams({
        query,
        page: currentPage.toString(),
      })
    : new URLSearchParams({ page: currentPage.toString() });

  const response = await fetch(`${BASE_URL}/api/advocates?${params}`, {
    method: "GET",
  });
  const { data } = await response.json();

  return response.ok ? data : Promise.reject("Something went wrong");
}
