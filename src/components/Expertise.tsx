// src/components/Expertise.tsx
import React from "react";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faBalanceScale,
  faShieldAlt,
  faSearch,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsGRC = [
  "SOC 2",
  "ISO 27001",
  "NIST SP 800-53",
  "PCI DSS",
  "HIPAA",
  "GDPR",
  "NIST AI RMF",
];

const labelsEthics = [
  "Fairness Testing",
  "Bias Audits",
  "Explainability",
  "Transparency Reports",
  "Ethics Policy",
  "IEEE 7000",
  "Google RAI Standard",
];

const labelsIR = [
  "Splunk",
  "Sysmon",
  "MITRE ATT&CK",
  "CrowdStrike",
  "SonicWall",
  "PowerShell",
];

const labelsVuln = [
  "Nessus",
  "Qualys",
  "Armis",
  "KQL",
  "Python",
  "SQL",
];

const labelsCompliance = [
  "Gap Analysis",
  "Control Mapping",
  "Policy Development",
  "Internal Audits",
  "Vendor Risk",
  "RSA Archer",
  "ServiceNow Risk",
];

export default function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* GRC & AI Governance */}
          <div className="skill">
            <FontAwesomeIcon icon={faClipboardCheck} size="3x" />
            <h3>GRC & AI Governance</h3>
            <p>
              I build and audit governance programs—mapping SOC 2, ISO 27001,
              NIST, PCI DSS, HIPAA, GDPR, and the NIST AI RMF—into clear,
              actionable controls and risk frameworks.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Frameworks & standards:</span>
              {labelsGRC.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Responsible AI & Ethics */}
          <div className="skill">
            <FontAwesomeIcon icon={faBalanceScale} size="3x" />
            <h3>Responsible AI & Ethics</h3>
            <p>
              Designing AI systems with fairness, accountability, and
              transparency: from bias audits to explainability and policy
              development, ensuring ethical compliance at every stage.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Focus areas:</span>
              {labelsEthics.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Incident Response & Threat Hunting */}
          <div className="skill">
            <FontAwesomeIcon icon={faShieldAlt} size="3x" />
            <h3>Incident Response & Threat Hunting</h3>
            <p>
              Developed IR playbooks aligned with NIST 800-61, performed
              proactive threat hunts in Splunk & Sysmon, and implemented rapid
              containment with CrowdStrike and SonicWall automation.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tools & techniques:</span>
              {labelsIR.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Vulnerability & Risk Assessments */}
          <div className="skill">
            <FontAwesomeIcon icon={faSearch} size="3x" />
            <h3>Vulnerability & Risk Assessments</h3>
            <p>
              Conducted Nessus & Qualys scans across IT & OT (SCADA), produced
              prioritized CVE remediation plans, and integrated findings into
              risk matrices for executive reporting.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsVuln.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Compliance & Gap Assessments */}
          <div className="skill">
            <FontAwesomeIcon icon={faTasks} size="3x" />
            <h3>Compliance & Gap Assessments</h3>
            <p>
              I conduct comprehensive gap analyses, map controls to frameworks,
              develop policies, and lead internal audits and vendor risk
              assessments to ensure continuous compliance and operational
              excellence.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Key activities:</span>
              {labelsCompliance.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
