import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ReportsTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "solved", label: "Solved" },
          { value: "unsolved", label: "Unsolved" },
          { value: "probing", label: "Probing" },
          { value: "unrelated", label: "Unrelated" },
          { value: "false", label: "False" },
        ]}
      />

      <SortBy
        options={[
          {
            value: "reportNumber-asc",
            label: "Sort by report number (ascending)",
          },
          {
            value: "reportNumber-desc",
            label: "Sort by report number (descending)",
          },
          {
            value: "reportDate-desc",
            label: "Sort by report date (recent first)",
          },
          {
            value: "reportDate-asc",
            label: "Sort by report date (earlier first)",
          },
          {
            value: "incidentDate-desc",
            label: "Sort by incident date (recent first)",
          },
          {
            value: "incidentDate-asc",
            label: "Sort by incident date (earlier first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default ReportsTableOperations;
