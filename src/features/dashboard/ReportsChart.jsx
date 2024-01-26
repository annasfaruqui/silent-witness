import styled from "styled-components";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import Heading from "../../ui/Heading";

const StyledReportsChart = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;

  grid-column: 7 / -1;
`;

const startDataReports = [
  {
    status: "Solved cases",
    value: 0,
    color: "#00dd00",
  },
  {
    status: "Unsolved cases",
    value: 0,
    color: "#dd0000",
  },
  {
    status: "Probing cases",
    value: 0,
    color: "#dddd00",
  },
  {
    status: "Unrelated cases",
    value: 0,
    color: "#6366f1",
  },
  {
    status: "False cases",
    value: 0,
    color: "#999999",
  },
];

function prepareData(startData, reports) {
  // A bit ugly code, but sometimes this is what it takes when working with real data 😅

  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.status === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = reports
    .reduce((arr, cur) => {
      const stat = cur.status;
      if (stat === "solved") return incArrayValue(arr, "Solved cases");
      if (stat === "unsolved") return incArrayValue(arr, "Unsolved cases");
      if (stat === "probing") return incArrayValue(arr, "Probing cases");
      if (stat === "unrelated") return incArrayValue(arr, "Unrelated cases");
      if (stat === "false") return incArrayValue(arr, "False cases");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

function ReportsChart({ reports }) {
  const data = prepareData(startDataReports, reports);

  return (
    <StyledReportsChart>
      <Heading as="h2">Reports summary</Heading>

      <ResponsiveContainer height={240} width="100%">
        <PieChart>
          <Pie
            data={data}
            nameKey="status"
            dataKey="value"
            innerRadius={75}
            outerRadius={95}
            cx="45%"
            cy="50%"
            paddingAngle={2}
          >
            {data.map((el) => (
              <Cell fill={el.color} key={el.status} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="40%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </StyledReportsChart>
  );
}

export default ReportsChart;
