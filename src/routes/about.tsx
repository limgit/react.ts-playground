import { createFileRoute } from "@tanstack/react-router";

function About() {
  return <div>Hello from About!</div>;
}

export const Route = createFileRoute("/about")({
  component: About,
});
