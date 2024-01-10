import {
  TbShield,
  TbShieldBolt,
  TbShieldCancel,
  TbShieldCheck,
  TbShieldExclamation,
} from "react-icons/tb";

import Stat from "./Stat";

function Stats({ reports }) {
  const numReports = reports.length;

  const statuses = reports.map((report) => report.status);
  const solvedReports = statuses.filter((status) => status === "solved");
  const unsolvedReports = statuses.filter((status) => status === "unsolved");
  const probingReports = statuses.filter((status) => status === "probing");
  const falseReports = statuses.filter((status) => status === "false");

  const numSolvedReports = solvedReports.length;
  const numUnsolvedReports = unsolvedReports.length;
  const numProbingReports = probingReports.length;
  const numFalseReports = falseReports.length;

  return (
    <>
      <Stat
        title="Total cases"
        color="blue"
        icon={<TbShield />}
        value={numReports}
      />
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
        icon={<TbShieldBolt />}
        value={numProbingReports}
      />
      <Stat
        title="False cases"
        color="silver"
        icon={<TbShieldCancel />}
        value={numFalseReports}
      />
    </>
  );
}

export default Stats;
