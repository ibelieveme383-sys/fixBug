export async function loader() {
  return new Response(JSON.stringify({ status: "ok", time: Date.now() }), {
    headers: { "Content-Type": "application/json" },
  });
}