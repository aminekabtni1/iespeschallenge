import { Grid, Tooltip, IconButton, Stack } from "@mui/material";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Panel, Text } from "components/GridPage";
import StatusBadge from "components/StatusBadge";
import GridTable from "components/GridTable";
import VuiTypography from "components/VuiTypography";
export default function ModelMetricCard({ model }) {
  return (
    <Panel title={`MODEL ${model.number}`}>
      <Stack direction="row" spacing={1} alignItems="center" mb={2}>
        <StatusBadge label={model.status} />
        {model.number === 5 && (
          <Tooltip title={model.note} enterTouchDelay={0}>
            <IconButton aria-label={model.note} sx={{ color: "#2cd9ff" }}>
              <IoInformationCircleOutline />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
      <Text mb={2}>
        {model.type && `${model.type} • `}
        {model.purpose}
      </Text>
      {model.rows && (
        <GridTable
          label={`Model ${model.number} experimental results`}
          columns={model.columns.map((label, i) => ({ key: String(i), label }))}
          rows={model.rows.map((row) =>
            Object.fromEntries(row.map((value, i) => [String(i), value]))
          )}
        />
      )}
      {model.metrics && (
        <Grid container spacing={2}>
          {Object.entries(model.metrics).map(([label, value]) => (
            <Grid item xs={6} md={4} key={label}>
              <Text fontSize="12px">{label}</Text>
              <VuiTypography color="white" variant="h5">
                {value}
              </VuiTypography>
            </Grid>
          ))}
        </Grid>
      )}
      {model.families && (
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {model.families.map((label) => (
            <StatusBadge key={label} label={label} color="info" />
          ))}
        </Stack>
      )}
      {model.note && <Text mt={2}>{model.note}</Text>}
    </Panel>
  );
}
