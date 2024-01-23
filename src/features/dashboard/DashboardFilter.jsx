import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="previous"
      options={[
        { value: "7", label: "Last 7 days" },
        { value: "15", label: "Last 15 days" },
        { value: "30", label: "Last 30 days" },
      ]}
    />
  );
}

export default DashboardFilter;
