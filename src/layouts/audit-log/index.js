import GridPage, { Panel, Text } from "components/GridPage";
import AuditTable from "components/AuditTable";
export default function AuditLog() {
  return (
    <GridPage
      title="Audit Log"
      subtitle="Traceable event records and illustrative operator decision states"
      demo
    >
      <Panel title="Event History">
        <Text mb={3}>
          Ten fictional records. Cyberattack labels and confidence values demonstrate the interface;
          they are not Model 7 evaluation results. “Automatic” indicates a simulated
          logging/flagging decision, never grid control.
        </Text>
        <AuditTable />
      </Panel>
    </GridPage>
  );
}
