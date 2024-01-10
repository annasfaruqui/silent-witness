import styled from "styled-components";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
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

import { MAX_DAYS } from "../../utils/constants";

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
    start:
      numDays !== "all-time"
        ? subDays(new Date(), numDays - 1)
        : subDays(new Date(), MAX_DAYS),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      solvedCases: reports
        .filter((report) => report.status === "solved")
        .filter((report) => isSameDay(date, new Date(report.created_at)))
        .length,
      unsolvedCases: reports
        .filter((report) => report.status === "unsolved")
        .filter((report) => isSameDay(date, new Date(report.created_at)))
        .length,
      probingCases: reports
        .filter((report) => report.status === "probing")
        .filter((report) => isSameDay(date, new Date(report.created_at)))
        .length,
      falseCases: reports
        .filter((report) => report.status === "false")
        .filter((report) => isSameDay(date, new Date(report.created_at)))
        .length,
    };
  });

  const colors = {
    solvedCases: { fill: "#dcfce7", stroke: "#15803d" },
    unsolvedCases: { fill: "#fee2e2", stroke: "#b91c1c" },
    probingCases: { fill: "#fef9c3", stroke: "#a16207" },
    falseCases: { fill: "#e5e7eb", stroke: "#374151" },
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

          <Area
            dataKey="probingCases"
            type="monotone"
            stroke={colors.probingCases.stroke}
            fill={colors.probingCases.fill}
            strokeWidth={2}
            name="Probing cases"
          />
          <Area
            dataKey="falseCases"
            type="monotone"
            stroke={colors.falseCases.stroke}
            fill={colors.falseCases.fill}
            strokeWidth={2}
            name="False cases"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledReportsGraph>
  );
}

export default ReportsGraph;
