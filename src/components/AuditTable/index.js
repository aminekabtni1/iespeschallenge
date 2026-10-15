import { useState } from "react";
import { Stack, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import GridTable from "components/GridTable";
import StatusBadge from "components/StatusBadge";
import { Text } from "components/GridPage";
import { demoEvents } from "data/demoEvents";
export default function AuditTable() {
  const [filters, setFilters] = useState({ category: "All", severity: "All", decision: "All" });
  const rows = demoEvents.filter((row) =>
    Object.entries(filters).every(([key, value]) => value === "All" || row[key] === value)
  );
  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }} gap={2} mb={3}>
        {[
          ["category", "Category"],
          ["severity", "Severity"],
          ["decision", "Decision Status"],
        ].map(([key, label]) => (
          <FormControl key={key} size="small" sx={{ minWidth: 180 }}>
            <InputLabel
              shrink
              id={`${key}-label`}
              sx={{ color: "#a0aec0", backgroundColor: "#141b3a", px: 0.5 }}
            >
              {label}
            </InputLabel>
            <Select
              labelId={`${key}-label`}
              MenuProps={{
                PaperProps: {
                  sx: {
                    background: "#141b3a",
                    color: "white",
                    "& .MuiMenuItem-root": { color: "white" },
                  },
                },
              }}
              value={filters[key]}
              label={label}
              onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
              sx={{
                "&&": { color: "white !important", backgroundColor: "#141b3a !important" },
                "& .MuiSelect-select": {
                  color: "white",
                  minHeight: "22px",
                  paddingTop: "6px !important",
                  paddingBottom: "6px !important",
                },
                "& .MuiSvgIcon-root": { color: "white" },
              }}
            >
              {["All", ...new Set(demoEvents.map((row) => row[key]))].map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Stack>
      <Text mb={1} role="status">
        {rows.length} of {demoEvents.length} demo events
      </Text>
      <GridTable
        label="Demo audit log"
        columns={[
          { key: "timestamp", label: "Timestamp" },
          { key: "node", label: "Node" },
          { key: "event", label: "Detected Event" },
          { key: "category", label: "Category" },
          { key: "confidence", label: "Confidence" },
          { key: "severity", label: "Severity", render: (label) => <StatusBadge label={label} /> },
          { key: "action", label: "Recommended Action" },
          {
            key: "decision",
            label: "Decision Status",
            render: (label) => <StatusBadge label={label} />,
          },
        ]}
        rows={rows}
      />
      {!rows.length && <Text py={3}>No demo events match these filters.</Text>}
    </>
  );
}
