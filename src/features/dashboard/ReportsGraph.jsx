import styled from "styled-components";
import { eachDayOfInterval, format, isSameWeek, subDays } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";

const StyledReportsGraph = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function ReportsGraph({ reports, numDays }) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      allCases: reports.filter((report) =>
        isSameWeek(date, new Date(report.created_at))
      ).length,
      solvedCases: reports
        .filter((report) => report.status === "solved")
        .filter((report) => isSameWeek(date, new Date(report.created_at)))
        .length,
      unsolvedCases: reports
        .filter((report) => report.status === "unsolved")
        .filter((report) => isSameWeek(date, new Date(report.created_at)))
        .length,
      probingCases: reports
        .filter((report) => report.status === "probing")
        .filter((report) => isSameWeek(date, new Date(report.created_at)))
        .length,
      falseCases: reports
        .filter((report) => report.status === "false")
        .filter((report) => isSameWeek(date, new Date(report.created_at)))
        .length,
      unrelatedCases: reports
        .filter((report) => report.status === "unrelated")
        .filter((report) => isSameWeek(date, new Date(report.created_at)))
        .length,
    };
  });

  const colors = {
    allCases: { fill: "#c2ddff", stroke: "#2789f3" },
    solvedCases: { fill: "#9effc0", stroke: "#15803d" },
    unsolvedCases: { fill: "#ffa5a5", stroke: "#b91c1c" },
    probingCases: { fill: "#fff582", stroke: "#a16207" },
    falseCases: { fill: "#e5e5e5", stroke: "#374151" },
    unrelatedCases: { fill: "#a4b7ff", stroke: "#4338ca" },
    text: "#4b5563",
    background: "#fff",
  };

  return (
    <StyledReportsGraph>
      <Heading as="h2">
        Reports from {format(allDates.at(0), "MMM dd, yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd, yyyy")}
      </Heading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <CartesianGrid strokeDasharray="4" />
          <Area
            dataKey="allCases"
            type="monotone"
            stroke={colors.allCases.stroke}
            fill={colors.allCases.fill}
            strokeWidth={2}
            name="Total cases"
          />
          <Area
            dataKey="unrelatedCases"
            type="monotone"
            stroke={colors.unrelatedCases.stroke}
            fill={colors.unrelatedCases.fill}
            strokeWidth={2}
            name="Unrelated cases"
          />
          <Area
            dataKey="falseCases"
            type="monotone"
            stroke={colors.falseCases.stroke}
            fill={colors.falseCases.fill}
            strokeWidth={2}
            name="False cases"
          />
          <Area
            dataKey="probingCases"
            type="monotone"
            stroke={colors.probingCases.stroke}
            fill={colors.probingCases.fill}
            strokeWidth={2}
            name="Probing cases"
          />
          <Area
            dataKey="solvedCases"
            type="monotone"
            stroke={colors.solvedCases.stroke}
            fill={colors.solvedCases.fill}
            strokeWidth={2}
            name="Solved cases"
          />
          <Area
            dataKey="unsolvedCases"
            type="monotone"
            stroke={colors.unsolvedCases.stroke}
            fill={colors.unsolvedCases.fill}
            strokeWidth={2}
            name="Unsolved cases"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledReportsGraph>
  );
}

export default ReportsGraph;
