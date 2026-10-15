# Smart Grid AI Monitoring Dashboard

A Phase 1 frontend prototype for a hierarchical AI-assisted cyber-physical energy monitoring system. Built on Vision UI Dashboard React, Material UI, Emotion and ApexCharts. No backend, deployed grid connection, or runtime AI inference is included.

## Dashboard Features

- Overview with grid-state KPIs, electrical trends and an illustrative decision path.
- Live Monitoring with deterministic one-minute samples, 1H/6H/12H/24H windows and anomaly event markers.
- Event Analysis with reasoning and physics evidence.
- Model Performance with separately stored Phase 1 experimental metrics.
- System Architecture, Data Sources, Development Progress and a filterable demo Audit Log.
- Responsive Vision UI dark glass cards, gradients, sidebar and typography.

## Architecture

Raw Grid Data → Model 1 Forecasting → Model 2 Anomaly Detection → Physics Engine → Model 3 Physical Event vs Data Problem.

Physical Event → Model 4 Physical Fault Type.

Data Problem → Model 5 Sensor vs Cyber → Sensor: Model 6; Cyber: Model 7; Uncertain: Model 6 + Model 7.

Relevant outputs → Model 8 Confidence Calibration / Fusion → Explainability → Human-AI Governance → Audit Log. Shared Learning is a future collaborative layer. Downstream integration is planned; the UI diagrams do not imply operational deployment.

`src/layouts/` contains routed pages, `src/components/` contains reusable UI, and `src/data/` separates simulated measurements/events from model metrics, datasets and the development registry. `src/routes.js` configures routes and sidebar entries.

## Implemented Models

Models 1–6 are implemented in the Phase 1 experiments:

- Model 1: Residual LSTM normal behavior forecasting.
- Model 2: LSTM Autoencoder temporal anomaly detection.
- Model 3: XGBoost physical event/data problem classification.
- Model 4: electrical fault classification.
- Model 5: selective sensor/cyber routing with an Uncertain outcome.
- Model 6: sensor fault diagnosis with robustness evaluation.

These models are not executed by the frontend. Model 7 is under validation; its performance is intentionally not reported. Metrics are reproduced from supplied Phase 1 results; unspecified measurement units and evaluation protocols are not invented.

## Data Sources

- [UCI Individual Household Electric Power Consumption](https://archive.ics.uci.edu/dataset/235/individual+household+electric+power+consumption) — Models 1, 2 and 6; residential electrical time series.
- [SimBench](https://simbench.de/en/download/) — Physics Engine and Models 3, 5 and 6; network topology and power-flow simulation.
- [Electrical Fault Detection and Classification](https://www.kaggle.com/datasets/esathyaprakash/electrical-fault-detection-and-classification) — Model 4; three-phase fault classification.
- [UAH / ORNL Power System Dataset](https://sites.google.com/a/uah.edu/tommy-morris-uah/ics-data-sets) — External Model 3 evaluation.
- [Metering Anomaly Diagnosis](https://github.com/IISGLab/MeteringAnomalyDiagnosis) — Model 6 external reference.
- [Double-Edged Defense IEC-104 Dataset](https://github.com/Abdullatif2/Double-Edged-Defense) — Model 7; normal and cyberattack communication traffic.

## Development Notebooks

- [Model 1](https://www.kaggle.com/code/mohamedaminekabtni/model-01)
- [Model 2](https://www.kaggle.com/code/mohamedaminekabtni/model-02)
- [Physics Engine](https://www.kaggle.com/code/mohamedaminekabtni/physics-engine-notebook)
- [Model 3](https://www.kaggle.com/code/mohamedaminekabtni/model-03)
- [Model 4](https://www.kaggle.com/code/mohamedaminekabtni/model-004)
- [Model 5](https://www.kaggle.com/code/mohamedaminekabtni/model-005)
- [Model 6](https://www.kaggle.com/code/mohamedaminekabtni/model-006)

Model 7 has no notebook link yet.

## Installation

```bash
npm install
npm start
```

Open http://localhost:3000/dashboard. `npm run build` produces the static production build. BrowserRouter hosting requires unknown page paths to serve `index.html`.

## Demo Data Notice

"The monitoring stream displayed in the dashboard is simulated for interface demonstration. The model evaluation metrics displayed in the Model Performance section are derived from the Phase 1 experiments."

Monitoring and event pages visibly display **Demo Monitoring Data**. Samples and events are deterministic, fixed to a UTC demonstration scenario. They are not measurements from a deployed electrical grid. Diagnosis paths, confidence values, evidence and audit decisions are illustrative and do not represent connected inference, SHAP explanations, calibrated confidence, operational security detection or automatic grid control. The stream does not poll a live source.

## Current Status

Models 1-6 implemented.
Model 7 under validation.
Confidence calibration, explainability, governance and shared learning planned for subsequent integration.

## Template Attribution

Based on Vision UI Dashboard React by Creative Tim and Simmmple. Original license and source copyright notices are retained; see LICENSE.md.
