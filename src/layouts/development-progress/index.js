import GridPage, { Panel, Text } from "components/GridPage";
import GridTable from "components/GridTable";
import StatusBadge from "components/StatusBadge";
import VuiButton from "components/VuiButton";
import { modelRegistry } from "data/modelRegistry";
export default function DevelopmentProgress() {
  return (
    <GridPage
      title="Development Progress"
      subtitle="Implementation status and experimental development notebooks"
    >
      <Panel title="Component Registry">
        <GridTable
          label="Development progress"
          rows={modelRegistry}
          columns={[
            { key: "component", label: "Component" },
            { key: "purpose", label: "Purpose" },
            { key: "status", label: "Status", render: (label) => <StatusBadge label={label} /> },
            {
              key: "url",
              label: "Notebook",
              render: (url, row) =>
                url ? (
                  <VuiButton
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    color="info"
                    size="small"
                  >
                    Open notebook ↗
                  </VuiButton>
                ) : (
                  <Text fontSize="12px">
                    {row.component === "Model 7" ? "No notebook link yet" : "Not yet available"}
                  </Text>
                ),
            },
          ]}
        />
      </Panel>
    </GridPage>
  );
}
