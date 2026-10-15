import { Grid } from "@mui/material";
import GridPage from "components/GridPage";
import DatasetCard from "components/DatasetCard";
import { datasets } from "data/datasets";
export default function DataSources() {
  return (
    <GridPage
      title="Data Sources"
      subtitle="Research datasets and reference systems used in Phase 1 development"
    >
      <Grid container spacing={3}>
        {datasets.map((dataset) => (
          <Grid item xs={12} md={6} key={dataset.name}>
            <DatasetCard dataset={dataset} />
          </Grid>
        ))}
      </Grid>
    </GridPage>
  );
}
