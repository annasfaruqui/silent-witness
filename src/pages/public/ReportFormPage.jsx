import PageArticle from "../../ui/PageArticle";
import HeadingGroup from "../../ui/HeadingGroup";
import CreateReportForm from "../../features/reports/CreateReportForm";

import { useScrollToTop } from "../../hooks/useScrollToTop";

function ReportFormPage() {
  useScrollToTop();

  return (
    <PageArticle>
      <div>
        <div style={{ marginBottom: "2rem" }}>
          <HeadingGroup
            heading="Report form"
            subHeading="Submit detailed information to report an incident effectively and securely"
            textCenter={true}
          />
        </div>
        <CreateReportForm />
      </div>
    </PageArticle>
  );
}

export default ReportFormPage;
