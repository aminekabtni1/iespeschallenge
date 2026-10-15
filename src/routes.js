/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Central route and sidebar configuration for the Phase 1 prototype.
import {
  IoHome,
  IoPulse,
  IoGitBranch,
  IoStatsChart,
  IoLayers,
  IoServer,
  IoCheckmarkCircle,
  IoList,
} from "react-icons/io5";
import Overview from "layouts/dashboard";
import LiveMonitoring from "layouts/live-monitoring";
import EventAnalysis from "layouts/event-analysis";
import ModelPerformance from "layouts/model-performance";
import Architecture from "layouts/system-architecture";
import DataSources from "layouts/data-sources";
import DevelopmentProgress from "layouts/development-progress";
import AuditLog from "layouts/audit-log";
const pages = [
  ["Overview", "dashboard", Overview, IoHome],
  ["Live Monitoring", "live-monitoring", LiveMonitoring, IoPulse],
  ["Event Analysis", "event-analysis", EventAnalysis, IoGitBranch],
  ["Model Performance", "model-performance", ModelPerformance, IoStatsChart],
  ["System Architecture", "system-architecture", Architecture, IoLayers],
  ["Data Sources", "data-sources", DataSources, IoServer],
  ["Development Progress", "development-progress", DevelopmentProgress, IoCheckmarkCircle],
  ["Audit Log", "audit-log", AuditLog, IoList],
];
export default pages.map(([name, key, component, Icon]) => ({
  type: "collapse",
  name,
  key,
  route: `/${key}`,
  component,
  icon: <Icon size="15px" color="inherit" />,
  noCollapse: true,
}));
