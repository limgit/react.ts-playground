import { IntervalRefreshButton } from "@/components/IntervalRefreshButton";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { buttonPosition, containerStyle } from "./style.css";

export function IntervalRefresh() {
  const query = useQuery({
    queryKey: ["interval-refresh"],
    queryFn: () => {
      const requestTime = Date.now();
      return new Promise<{
        requestTime: number;
        resolveTime: number;
      }>((resolve) => {
        setTimeout(() => {
          resolve({
            requestTime,
            resolveTime: Date.now(),
          });
        }, 2000);
      });
    },
  });

  return (
    <div className={containerStyle}>
      <h3>Interval refresh demonstration</h3>
      <p>isFetching: {query.isFetching ? "Yes" : "No"}</p>
      <p>data: {query.data === undefined ? "undefined" : "fetched"}</p>
      {query.data && (
        <>
          <p>
            Requested at {format(query.data.requestTime, "yyyy-MM-dd HH:mm:ss")}
          </p>
          <p>
            Resolved at {format(query.data.resolveTime, "yyyy-MM-dd HH:mm:ss")}
          </p>
        </>
      )}
      <IntervalRefreshButton
        intervalSeconds={10}
        onRefresh={() => query.refetch()}
        className={buttonPosition}
      />
    </div>
  );
}
