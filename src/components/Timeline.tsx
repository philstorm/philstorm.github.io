// src/components/Timeline.tsx
import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

export default function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* Symposia Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#272822' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2024 – Jun 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Compliance Analyst | GRC & AI Governance
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Symposia Intern (Remote, TX)
            </h4>
            <p>
              Automated compliance monitoring by integrating RSA Archer with PowerShell scripts,
              streamlining evidence collection for 200+ controls across PCI DSS and SOC 2. Led data
              governance initiatives aligned with AI ethics, NIST AI RMF, NIST SP 800-53 and performed gap assessments
              across SCADA & IT environments.
            </p>
          </VerticalTimelineElement>

          {/* Shift4 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#272822' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jan 2024 – Mar 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              IT Security Specialist II | GRC & Risk Compliance
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Shift4 (Remote, NV)
            </h4>
            <p>
              Led PCI DSS 4.0 scoping using P2PE and Illumio segmentation, automated vulnerability
              triage workflows with Qualys API, and operationalized Zero Trust across Azure-hosted assets.
            </p>
          </VerticalTimelineElement>

          {/* Restaurant365 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#272822' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jan 2021 – Jan 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              IT Security Specialist | GRC & Risk Compliance
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Restaurant365 (Irvine, CA)
            </h4>
            <p>
              Performed threat hunting and correlation rule tuning in Splunk ES,
              hardened 500+ Windows and IoT assets to NIST SP 800-171 controls, and streamlined
              SOC 2 audit readiness by automating evidence collection via Confluence–Jira integration.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}
