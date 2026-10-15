import { Grid } from "@mui/material";
import GridPage, { Text } from "components/GridPage";
import ModelMetricCard from "components/ModelMetricCard";
import { modelMetrics } from "data/modelMetrics";
export default function ModelPerformance() {
  return (
    <GridPage
      title="AI Model Performance"
      subtitle="Experimental results from Phase 1 model development"
    >
      <Text mb={3}>
        Reported Phase 1 experimental results • Independent of the simulated monitoring stream •
        Metrics reproduced as supplied; measurement units and evaluation protocols are not inferred.
      </Text>
      <Grid container spacing={3}>
        {modelMetrics.map((model) => (
          <Grid
            item
            xs={12}
            lg={model.number === 1 || model.number === 7 ? 12 : 6}
            key={model.number}
          >
            <ModelMetricCard model={model} />
          </Grid>
        ))}
      </Grid>
    </GridPage>
  );
}
