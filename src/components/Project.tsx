// src/components/Project.tsx
import React from 'react';
import '../assets/styles/Project.scss';

interface ProjectEntry {
  title: string;
  url: string;
  summary: string;
  tools: string[];
}

const projects: ProjectEntry[] = [
  {
    title: 'AI Risk Assessment For Phoenix Corp',
    url: 'https://docs.google.com/document/d/1cgijqWHWwSNIh322nh-NwI9FA69DK9xkwJVOgtXC0EU/edit?usp=sharing',
    summary:
      'Mapped NIST AI RMF functions to ISO 27001 Annex A controls to build an AI Governance Matrix. Helps organizations align AI system risk with existing ISMS compliance.',
    tools: ['Google Docs', 'NIST AI RMF', 'ISO 27001', 'GitHub'],
  },
  {
    title: 'Risk Assessment Project for CloudGen Solutions',
    url: 'https://docs.google.com/spreadsheets/d/1XlJKVuStoujkLpREekX9Y__ZaLZq56ab_Ym5-PBFRjo/edit?usp=sharing',
    summary:
      'Performed a full GRC-aligned risk assessment across CloudGen’s hybrid cloud infrastructure. Mapped identified risks to NIST 800-53 and proposed remediation strategies by severity.',
    tools: ['NIST SP 800-53', 'Jira', 'Confluence', 'Risk Matrix Template'],
  },
  {
    title: 'Risk Assessment Test on Metasploitable x KaliLinux',
    url: 'https://docs.google.com/spreadsheets/d/1wRaHV_v_BciwgdR4RwXHJ415VLV9R49LGn_cGN4wmng/edit?usp=sharing',
    summary:
      'Simulated a vulnerability exploitation scenario using Kali Linux on Metasploitable2 within VirtualBox. Documented high-risk findings (CVSS > 9.0) and demonstrated hands-on remediation steps.',
    tools: ['Kali Linux', 'Nessus Essentials', 'CVSS', 'VirtualBox', 'Markdown'],
  },
  {
    title: 'Incident Response Playbook for Aquashield Utilities',
    url: 'https://docs.google.com/spreadsheets/d/1HA0Ttiu3PPXXYdwGCRuhqXv3nktYkGx7X9Gfxc0tUjM/edit?usp=sharing',
    summary:
      'Developed an IR playbook for a simulated utility company, aligned with NIST 800-61. Included roles, communication workflows, containment strategies, and recovery actions.',
    tools: ['Google Sheets', 'SonicWall', 'PowerShell', 'Splunk', 'NIST IR'],
  },
  {
    title: 'Phishing Attack Playbook for Aquashield Utilities',
    url: 'https://docs.google.com/spreadsheets/d/1XlJKVuStoujkLpREekX9Y__ZaLZq56ab_Ym5-PBFRjo/edit?usp=sharing',
    summary:
      'Created a tailored phishing response playbook focused on containment and evidence preservation. Aligned to NIST 800-61 and mapped to SOC 2 CC6.1 for audit support.',
    tools: ['Talos', 'VirusTotal', 'Google Workspace'],
  },
  {
    title: 'Vulnerability Assessment for Metasploitable',
    url: 'https://docs.google.com/document/d/1Eo9i4TMJOlZhw9zOTtN9zkz0pajjplMw-DMXgHRu1Eo/edit?usp=sharing',
    summary:
      'Performed a Nessus Essentials vulnerability scan against Metasploitable2. Identified and prioritized critical CVEs and provided a remediation roadmap.',
    tools: ['Kali Linux', 'Nessus', 'CVSS', 'NIST 800-53 RA-5'],
  },
  {
    title: 'TPRM Report on vendor Telemachus CloudServices',
    url: 'https://docs.google.com/document/d/1SjItRv4jofvFL1U3pqhsKAO_uK5aq9Q1ur6crt36et0/edit?usp=sharing',
    summary:
      'Conducted a Third-Party Risk Management assessment on Telemachus CloudServices using SIG Lite. Evaluated vendor controls against NIST, ISO 27001, and TPRM best practices.',
    tools: ['Google Docs', 'Vendor Risk Matrix', 'ISO 27001', 'SIG Lite'],
  },
];

export default function Project() {
  return (
    <section className="projects-container" id="projects">
      <h1>PROJECT STATION</h1>
      <p className="summary">
        Advanced Compliance Analyst, Cybersecurity pro, and architect of secure digital futures. With 5+ years
        of experience across NIST, SOC 2, ISO 27001, PCI DSS, and AI governance, I help companies move fast
        without breaking trust. From automating audits to building AI risk frameworks, I turn complexity into
        clarity. The future isn’t waiting — and neither am I.
      </p>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project" key={p.title}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              <h2>{p.title}</h2>
            </a>
            <p className="desc">{p.summary}</p>
            <ul className="tools">
              {p.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
