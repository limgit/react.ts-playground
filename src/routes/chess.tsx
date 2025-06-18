import { Chess } from "@/pages/chess";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chess")({
  component: Chess,
});
