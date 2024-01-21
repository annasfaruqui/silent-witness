import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="previous"
      options={[
        { value: "15", label: "Last 15 days" },
        { value: "30", label: "Last 30 days" },
        { value: "90", label: "Last 90 days" },
        { value: "all-time", label: "All time" },
      ]}
    />
  );
}

export default DashboardFilter;
