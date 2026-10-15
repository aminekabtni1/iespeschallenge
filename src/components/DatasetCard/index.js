import { Stack } from "@mui/material";
import { Panel, Text } from "components/GridPage";
import StatusBadge from "components/StatusBadge";
import VuiButton from "components/VuiButton";
export default function DatasetCard({ dataset }) {
  return (
    <Panel title={dataset.name}>
      <Stack spacing={2} height="100%" alignItems="flex-start">
        <StatusBadge label={dataset.role} />
        <Text>
          <strong>Used by:</strong> {dataset.usedBy}
        </Text>
        <Text>{dataset.description}</Text>
        <VuiButton
          component="a"
          href={dataset.url}
          target="_blank"
          rel="noopener noreferrer"
          color="info"
          variant="outlined"
          size="small"
          sx={{ mt: "auto !important" }}
        >
          Open dataset ↗
        </VuiButton>
      </Stack>
    </Panel>
  );
}
