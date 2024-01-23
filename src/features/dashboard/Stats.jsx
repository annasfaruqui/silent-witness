import {
  TbShieldCancel,
  TbShieldCheck,
  TbShieldExclamation,
  TbShieldQuestion,
  TbShieldSearch,
} from "react-icons/tb";

import Stat from "./Stat";

function Stats({ reports }) {
  const statuses = reports.map((report) => report.status);

  const solvedReports = statuses.filter((status) => status === "solved");
  const unsolvedReports = statuses.filter((status) => status === "unsolved");
  const probingReports = statuses.filter((status) => status === "probing");
  const falseReports = statuses.filter((status) => status === "false");
  const unrelatedReports = statuses.filter((status) => status === "unrelated");

  const numSolvedReports = solvedReports.length;
  const numUnsolvedReports = unsolvedReports.length;
  const numProbingReports = probingReports.length;
  const numFalseReports = falseReports.length;
  const numUnrelatedReports = unrelatedReports.length;

  return (
    <>
      <Stat
        title="Solved cases"
        color="green"
        icon={<TbShieldCheck />}
        value={numSolvedReports}
      />
      <Stat
        title="Unsolved cases"
        color="red"
        icon={<TbShieldExclamation />}
        value={numUnsolvedReports}
      />
      <Stat
        title="Probing cases"
        color="yellow"
        icon={<TbShieldSearch />}
        value={numProbingReports}
      />
      <Stat
        title="False cases"
        color="silver"
        icon={<TbShieldCancel />}
        value={numFalseReports}
      />
      <Stat
        title="Unrelated cases"
        color="purple"
        icon={<TbShieldQuestion />}
        value={numUnrelatedReports}
      />
    </>
  );
}

export default Stats;
