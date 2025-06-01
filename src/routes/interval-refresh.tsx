import { IntervalRefresh } from "@/pages/interval-refresh";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/interval-refresh")({
  component: IntervalRefresh,
});
