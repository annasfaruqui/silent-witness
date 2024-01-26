import styled from "styled-components";
import { HiArrowLeft } from "react-icons/hi2";

import ReportDetails from "./ReportDetails";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonWithArrow from "../../ui/ButtonWithArrow";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmUpdateStatus from "../../ui/ConfirmUpdateStatus";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useReport } from "./useReport";
import { useDeleteReport } from "./useDeleteReport";
import { useUpdateReport } from "./useUpdateReport";
import { statusToTagColor } from "../../utils/helpers";

const HeadingBox = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function Report() {
  const { report, isPending } = useReport();
  const { isDeleting, deleteReport } = useDeleteReport();
  const { isUpdating, updateReport } = useUpdateReport();
  const moveBack = useMoveBack();

  if (isPending) return <Spinner />;
  if (!report) return <Empty resourceName="report" />;

  const { id: reportId, status } = report;

  return (
    <>
      <Row type="horizontal">
        <HeadingBox>
          <Heading as="h1">Report #{reportId}</Heading>
          <Tag type={statusToTagColor[status]}>{status}</Tag>
        </HeadingBox>
        <ButtonWithArrow onClick={moveBack} gap="1" $variation="secondary">
          <span>
            <HiArrowLeft />
          </span>
          Go back
        </ButtonWithArrow>
      </Row>

      <ReportDetails report={report} />

      <ButtonGroup>
        <Modal>
          {status === "unsolved" && (
            <>
              <Modal.Open opens="probe">
                <Button>Start investigation</Button>
              </Modal.Open>
            </>
          )}

          {status === "probing" && (
            <Modal.Open opens="solved">
              <Button>Mark as solved</Button>
            </Modal.Open>
          )}

          {(status === "probing" || status === "unsolved") && (
            <>
              <Modal.Open opens="unrelated">
                <Button $variation="secondary">Mark as unrelated report</Button>
              </Modal.Open>
              <Modal.Open opens="false">
                <Button $variation="danger">Mark as false report</Button>
              </Modal.Open>
            </>
          )}

          <Modal.Open opens="delete">
            <Button $variation="danger">Delete report</Button>
          </Modal.Open>

          <>
            <Modal.Window name="probe">
              <ConfirmUpdateStatus
                resourceName="report"
                status="probing"
                disabled={isUpdating}
                onConfirm={() =>
                  updateReport({
                    reportData: { ...report, status: "probing" },
                    id: reportId,
                  })
                }
              />
            </Modal.Window>

            <Modal.Window name="solved">
              <ConfirmUpdateStatus
                resourceName="report"
                status="solved"
                disabled={isUpdating}
                onConfirm={() =>
                  updateReport({
                    reportData: { ...report, status: "solved" },
                    id: reportId,
                  })
                }
              />
            </Modal.Window>

            <Modal.Window name="unrelated">
              <ConfirmUpdateStatus
                resourceName="report"
                status="unrelated"
                disabled={isUpdating}
                onConfirm={() =>
                  updateReport({
                    reportData: { ...report, status: "unrelated" },
                    id: reportId,
                  })
                }
              />
            </Modal.Window>

            <Modal.Window name="false">
              <ConfirmUpdateStatus
                resourceName="report"
                status="false"
                type="danger"
                disabled={isUpdating}
                onConfirm={() =>
                  updateReport({
                    reportData: { ...report, status: "false" },
                    id: reportId,
                  })
                }
              />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="report"
                disabled={isDeleting}
                onConfirm={() =>
                  deleteReport(reportId, {
                    onSettled: moveBack,
                  })
                }
              />
            </Modal.Window>
          </>
        </Modal>

        <Button $variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default Report;
