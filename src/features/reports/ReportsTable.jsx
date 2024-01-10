import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import ReportRow from "./ReportRow";

import { useReports } from "./useReports";
import styled from "styled-components";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";

const CenterDiv = styled.div`
  text-align: center;
`;

function ReportsTable() {
  const { isPending, reports, count } = useReports();

  if (isPending) return <Spinner />;
  if (!reports.length) return <Empty resourceName="reports" />;

  return (
    <Menus>
      <Table columns="0.15fr 0.5fr 2fr 0.6fr 0.3fr 0.1fr">
        <Table.Header>
          <CenterDiv>No.</CenterDiv>
          <CenterDiv>Reported on</CenterDiv>
          <div>incident Details</div>
          <CenterDiv>incident Date</CenterDiv>
          <div>status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={reports}
          render={(report) => <ReportRow report={report} key={report.id} />}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default ReportsTable;
