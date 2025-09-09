export async function loader() {
  return new Response("<h1>This is static API HTML</h1>", {
    headers: { "Content-Type": "text/html" },
  });
}