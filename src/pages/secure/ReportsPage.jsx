import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ReportsTable from "../../features/reports/ReportsTable";
import ReportsTableOperations from "../../features/reports/ReportsTableOperations";

function ReportsPage() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Reports</Heading>
        <ReportsTableOperations />
      </Row>

      <Row>
        <ReportsTable />
      </Row>
    </>
  );
}

export default ReportsPage;
