const notebook = (name) => `https://www.kaggle.com/code/mohamedaminekabtni/${name}`;
export const modelRegistry = [
  {
    component: "Model 1",
    purpose: "Normal Behavior Forecasting",
    status: "Finalized",
    url: notebook("model-01"),
  },
  {
    component: "Model 2",
    purpose: "Temporal Anomaly Detection",
    status: "Finalized",
    url: notebook("model-02"),
  },
  {
    component: "Physics Engine",
    purpose: "Electrical Physics Validation",
    status: "Implemented",
    url: notebook("physics-engine-notebook"),
  },
  {
    component: "Model 3",
    purpose: "Physical Event vs Data Problem",
    status: "Finalized",
    url: notebook("model-03"),
  },
  {
    component: "Model 4",
    purpose: "Physical Fault Classification",
    status: "Finalized",
    url: notebook("model-004"),
  },
  {
    component: "Model 5",
    purpose: "Sensor vs Cyber Routing",
    status: "Finalized",
    url: notebook("model-005"),
  },
  {
    component: "Model 6",
    purpose: "Sensor Fault Diagnosis",
    status: "Finalized",
    url: notebook("model-006"),
  },
  { component: "Model 7", purpose: "Cyberattack Classification", status: "Under Validation" },
  { component: "Model 8", purpose: "Confidence Calibration", status: "Planned" },
  { component: "Explainability", purpose: "SHAP + Physics Evidence", status: "Planned" },
  { component: "Governance", purpose: "Human-AI Decision Layer", status: "Planned" },
  { component: "Shared Learning", purpose: "Federated Learning", status: "Future Phase" },
];
