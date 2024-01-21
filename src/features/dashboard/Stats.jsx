import {
  TbShield,
  TbShieldCancel,
  TbShieldCheck,
  TbShieldExclamation,
  TbShieldHalf,
  TbShieldSearch,
} from "react-icons/tb";

import Stat from "./Stat";

function Stats({ reports }) {
  const numReports = reports.length;

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

  const percentageSolved = ((numSolvedReports / numReports) * 100).toFixed(2);
  const percentageUnsolved = ((numUnsolvedReports / numReports) * 100).toFixed(
    2
  );
  const percentageProbing = ((numProbingReports / numReports) * 100).toFixed(2);
  const percentageFalse = ((numFalseReports / numReports) * 100).toFixed(2);
  const percentageUnrelated = (
    (numUnrelatedReports / numReports) *
    100
  ).toFixed(2);

  return (
    <>
      <Stat title="Total" color="blue" icon={<TbShield />} value={numReports} />
      <Stat
        title="Solved %"
        color="green"
        icon={<TbShieldCheck />}
        value={percentageSolved}
      />
      <Stat
        title="Unsolved %"
        color="red"
        icon={<TbShieldExclamation />}
        value={percentageUnsolved}
      />
      <Stat
        title="Probing %"
        color="yellow"
        icon={<TbShieldSearch />}
        value={percentageProbing}
      />
      <Stat
        title="False %"
        color="silver"
        icon={<TbShieldCancel />}
        value={percentageFalse}
      />
      <Stat
        title="Unrelated %"
        color="purple"
        icon={<TbShieldHalf />}
        value={percentageUnrelated}
      />
    </>
  );
}

export default Stats;
