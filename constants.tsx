
import { NavLink, KPIItem, FAQItem, WorkflowItem, USPItem, ExtendsSFItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Solution', href: '#problem' },
  { label: 'AI Agents', href: '#workflows' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Results', href: '#proof-points' },
  { label: 'FAQ', href: '#faq' },
];

export const USPS: USPItem[] = [
  {
    title: "AI-First, Not Retrofitted",
    description: "Built on the Agentforce foundation, predictive intelligence is native to every object.",
    result: "Result: 40% reduction in manual forecasting efforts.",
    icon: "pacepal_logo.png"
  },
  {
    title: "Fast to Deploy. Faster to Pay Off.",
    description: "Our 'Box' architecture means implementation takes weeks, not fiscal quarters.",
    result: "Result: Positive ROI within the first 90 days of launch.",
    icon: "rocket_launch"
  },
  {
    title: "Spreadsheets, Fully Connected",
    description: "Bi-directional sync allows your planners to keep using Excel for what it's good for.",
    result: "Result: 100% data fidelity between planning and billing.",
    icon: "table_chart"
  }
];

export const EXTENDS_SF: ExtendsSFItem[] = [
  {
    title: "Sales Cloud (Customized)",
    icon: "cloud",
    situation: "Typical situation: Media teams extend Sales Cloud with custom objects and flows.",
    value: "Replaces fragile custom logic with media-ready workflows."
  },
  {
    title: "Revenue Cloud",
    icon: "payments",
    situation: "Typical situation: Revenue Cloud provides standard CPQ for all industries.",
    value: "Adds media-specific workflows and intelligence."
  },
  {
    title: "Media Cloud",
    icon: "movie",
    situation: "Typical situation: Media Cloud establishes a standardized media data model.",
    value: "Operationalizes with seller- and ops-ready workflows."
  }
];

export const WORKFLOWS: WorkflowItem[] = [
  {
    headline: "RFP Intake Automation",
    agent: "Agent: Scout",
    description: "Automatically extracts RFP data from emails and PDF attachments.",
    outcome: "Outcome: Leads created 10x faster with 99% accuracy.",
    icon: "description"
  },
  {
    headline: "Dynamic Yield Pricing",
    agent: "Agent: Optimizer",
    description: "Suggests optimal pricing based on real-time inventory pressure.",
    outcome: "Outcome: 15% increase in eCPM across premium inventory.",
    icon: "trending_up"
  },
  {
    headline: "Smart Media Planning",
    agent: "Agent: Planner",
    description: "Generates cross-channel plans optimized for client KPIs.",
    outcome: "Outcome: 30% higher plan approval rate on first submission.",
    icon: "edit_note"
  },
  {
    headline: "Inventory Conflict Resolve",
    agent: "Agent: Guardian",
    description: "Predicts and resolves overbooking issues before they occur.",
    outcome: "Outcome: Near-zero make-good rate for high-demand events.",
    icon: "verified"
  },
  {
    headline: "Automated Reconciliation",
    agent: "Agent: Auditor",
    description: "Matches delivered impressions with booked orders automatically.",
    outcome: "Outcome: Billing cycles reduced from 15 days to 48 hours.",
    icon: "receipt_long"
  }
];

export const KPIS: KPIItem[] = [
  { label: "Time to Quote Reduced", value: "70%", subtext: "Across multi-site, multi-channel deals", icon: "timer" },
  { label: "Revenue Growth", value: "25%", subtext: "Cross-channel revenue increase", icon: "add_chart" },
  { label: "Campaign Errors Reduced", value: "90%", subtext: "With AI-assisted validation", icon: "check_circle" },
  { label: "Multi-flight Campaign Execution", value: "Weeks", subtext: "Instead of months", icon: "speed" }
];

export const FAQS: FAQItem[] = [
  {
    question: "Why should we use Ad Sales-In-A-Box if we already have Media Cloud?",
    answer: "Media Cloud provides the data model, but Ad Sales-In-A-Box provides the ready-to-use workflows and agentic intelligence to operationalize it immediately without heavy customization."
  },
  {
    question: "Isn't Ad Sales-In-A-Box just another layer of complexity?",
    answer: "No. It actually reduces complexity by orchestrating your existing tools into a single, unified interface. Agents handle the complex backend coordination so your users don't have to."
  },
  {
    question: "How does Ad Sales-In-A-Box save time for our teams?",
    answer: "By automating manual tasks like RFP data entry, inventory checks, and reconciliation, our agents can reduce manual operations by up to 40%, freeing your team to focus on selling."
  },
  {
    question: "Will Ad Sales-In-A-Box require a lot of custom implementations?",
    answer: "No. It is a \"Box\" solution designed for rapid deployment. Most customers are live in weeks with standard configuration, avoiding the \"custom code trap.\""
  },
  {
    question: "We already have Salesforce. How can Ad Sales-In-A-Box be of use?",
    answer: "Salesforce is the platform; Ad Sales-In-A-Box is the accelerator. We provide the specific logic, agents, and UI needed for Ad Sales that standard Salesforce instances don't offer out of the box."
  }
];

export const LOGOS = [
  "ADA", "Sony", "Yahoo!", "MediaCorp", "BroadcastCo"
];
