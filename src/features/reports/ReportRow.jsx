import styled from "styled-components";
import { useNavigate } from "react-router";
import { format } from "date-fns";
import {
  IoCheckmark,
  IoClose,
  IoEyeOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { GoUnlink } from "react-icons/go";

import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";

import { useUpdateReport } from "./useUpdateReport";
import { useDeleteReport } from "./useDeleteReport";

import { MAX_WORDS } from "../../utils/constants";
import { collapseText, statusToTagColor } from "../../utils/helpers";
import ConfirmUpdateStatus from "../../ui/ConfirmUpdateStatus";

const ReportNumber = styled.p`
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--color-grey-400);
  font-family: "Sono";
`;

const StyledDate = styled.p`
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--color-grey-600);
  text-align: center;
`;

const IncidentDetails = styled.p`
  font-size: var(--font-md);
  font-weight: 500;
  color: var(--color-grey-600);
  hyphens: none;
`;

function ReportRow({ report }) {
  const {
    id: reportId,
    reportDate,
    incidentDetails,
    incidentDate,
    status,
  } = report;
  const { deleteReport, isDeleting } = useDeleteReport();
  const { updateReport, isUpdating } = useUpdateReport();
  const navigate = useNavigate();

  return (
    <Table.Row>
      <ReportNumber>{reportId.toString().padStart(4, "0")}</ReportNumber>
      <StyledDate>{format(new Date(reportDate), "MMM dd, yyyy")}</StyledDate>
      <IncidentDetails>
        {collapseText(incidentDetails, MAX_WORDS)}
      </IncidentDetails>
      <StyledDate>{format(new Date(incidentDate), "MMM dd, yyyy")}</StyledDate>
      <Tag type={statusToTagColor[status]}>{status}</Tag>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={reportId} />
          <Menus.List id={reportId}>
            <Menus.Button
              icon={<IoEyeOutline />}
              onClick={() => navigate(`/reports/${reportId}`)}
            >
              See details
            </Menus.Button>

            {status === "probing" && (
              <Modal.Open opens="solved-report">
                <Menus.Button icon={<IoCheckmark />}>
                  Mark as Solved
                </Menus.Button>
              </Modal.Open>
            )}

            {(status === "probing" || status === "unsolved") && (
              <>
                <Modal.Open opens="unrelated-report">
                  <Menus.Button icon={<GoUnlink />}>
                    Mark as Unrelated
                  </Menus.Button>
                </Modal.Open>
                <Modal.Open opens="false-report">
                  <Menus.Button icon={<IoClose />}>Mark as False</Menus.Button>
                </Modal.Open>
              </>
            )}

            <Modal.Open opens="delete-report">
              <Menus.Button icon={<IoTrashOutline />}>
                Delete report
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="solved-report">
          <ConfirmUpdateStatus
            resourceName="report"
            disabled={isUpdating}
            status="solved"
            onConfirm={() =>
              updateReport({
                reportData: { ...report, status: "solved" },
                id: reportId,
              })
            }
          />
        </Modal.Window>

        <Modal.Window name="unrelated-report">
          <ConfirmUpdateStatus
            resourceName="report"
            disabled={isUpdating}
            status="unrelated"
            onConfirm={() =>
              updateReport({
                reportData: { ...report, status: "unrelated" },
                id: reportId,
              })
            }
          />
        </Modal.Window>

        <Modal.Window name="false-report">
          <ConfirmUpdateStatus
            resourceName="report"
            disabled={isUpdating}
            status="false"
            type="danger"
            onConfirm={() =>
              updateReport({
                reportData: { ...report, status: "false" },
                id: reportId,
              })
            }
          />
        </Modal.Window>

        <Modal.Window name="delete-report">
          <ConfirmDelete
            resourceName="report"
            disabled={isDeleting}
            onConfirm={() => deleteReport(reportId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default ReportRow;
