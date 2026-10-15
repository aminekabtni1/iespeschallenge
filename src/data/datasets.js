export const datasets = [
  {
    name: "UCI Individual Household Electric Power Consumption",
    role: "Electrical time series",
    usedBy: "Models 1, 2 and 6",
    description: "Real residential electrical time-series data.",
    url: "https://archive.ics.uci.edu/dataset/235/individual+household+electric+power+consumption",
  },
  {
    name: "SimBench",
    role: "Network simulation",
    usedBy: "Physics Engine, Models 3, 5 and 6",
    description:
      "Distribution network topology, loads, generators, transformer and power-flow simulation.",
    url: "https://simbench.de/en/download/",
  },
  {
    name: "Electrical Fault Detection and Classification",
    role: "Fault classification",
    usedBy: "Model 4",
    description: "Three-phase voltage/current electrical fault classification.",
    url: "https://www.kaggle.com/datasets/esathyaprakash/electrical-fault-detection-and-classification",
  },
  {
    name: "UAH / ORNL Power System Dataset",
    role: "External evaluation",
    usedBy: "External Model 3 evaluation",
    description: "Power-system reference data for external evaluation.",
    url: "https://sites.google.com/a/uah.edu/tommy-morris-uah/ics-data-sets",
  },
  {
    name: "Metering Anomaly Diagnosis",
    role: "External reference",
    usedBy: "Model 6 external reference",
    description: "Metering anomaly reference for sensor diagnosis.",
    url: "https://github.com/IISGLab/MeteringAnomalyDiagnosis",
  },
  {
    name: "Double-Edged Defense IEC-104 Dataset",
    role: "Cyberattack classification",
    usedBy: "Model 7",
    description: "IEC 60870-5-104 normal and cyberattack communication traffic.",
    url: "https://github.com/Abdullatif2/Double-Edged-Defense",
  },
];
