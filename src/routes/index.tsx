import { IntervalRefreshButton } from "@/components/IntervalRefreshButton";
import { createFileRoute } from "@tanstack/react-router";

function Index() {
  return (
    <div>
      <IntervalRefreshButton
        intervalSeconds={10}
        onRefresh={() => console.log("Hello from the button")}
      />
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});
