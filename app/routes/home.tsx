import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

import type { LoaderFunctionArgs } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request }: LoaderFunctionArgs) {
  return { message: "Hello from loader" };
}


export default function Home() {
  return <Welcome />;
}
