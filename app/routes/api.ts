export async function action({ request }: { request: Request }) {
  return new Response(JSON.stringify({ message: "Hello, world!" }));
}
