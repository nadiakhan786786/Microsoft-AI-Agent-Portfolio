const fs = require("fs");

const incident = JSON.parse(fs.readFileSync("incident-001.json", "utf8"));

const triageReport = {
  incident_id: incident.incident_id,
  severity: "High",
  incident_summary: `${incident.application} is experiencing ${incident.issue} in ${incident.environment}. The impact is ${incident.impact}. A recent change was reported: ${incident.recent_change}.`,
  missing_information: [
    "Pod name",
    "Namespace",
    "Deployment name",
    "Full pod logs",
    "Kubernetes events",
    "Resource utilization metrics",
    "Container image version",
    "Owner or support group"
  ],
  possible_root_causes: [
    "Application startup failure",
    "Bad configuration or missing