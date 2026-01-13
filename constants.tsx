
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
    situation: "Standard opportunities lack media-specific flighting and dayparting logic.",
    value: "Adds native media objects to track complex multi-variant flight plans."
  },
  {
    title: "Revenue Cloud",
    icon: "payments",
    situation: "CPQ struggles with complex multi-agency commissions and agency-of-record rules.",
    value: "Automates multi-party billing splits and complex commission structures."
  },
  {
    title: "Media Cloud",
    icon: "movie",
    situation: "Industry-standard but often requires heavy custom development for specific workflows.",
    value: "Provides pre-built blueprints that close the 20% gap between standard and specialized."
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
  { label: "Revenue Growth", value: "+32%", subtext: "Average increase in media yield", icon: "add_chart" },
  { label: "Efficiency Gain", value: "450hrs", subtext: "Saved per team annually", icon: "timer" },
  { label: "Data Accuracy", value: "99.9%", subtext: "Fidelity between CRM and OMS", icon: "check_circle" },
  { label: "Deployment", value: "6wks", subtext: "Average time to value", icon: "speed" }
];

export const FAQS: FAQItem[] = [
  {
    question: "How does this integrate with standard Salesforce objects?",
    answer: "Ad Sales-In-A-Box extends standard Sales and Media Cloud objects rather than replacing them, ensuring your existing reports and dashboards continue to function perfectly while gaining deep media context."
  },
  {
    question: "Is this compatible with Google Ad Manager and Freewheel?",
    answer: "Yes, we provide out-of-the-box connectors for both GAM and Freewheel, allowing bi-directional sync of inventory availability and delivery metrics."
  },
  {
    question: "Do we need specialized developers to maintain the AI workflows?",
    answer: "No. All workflows are built using Salesforce Flow and Agentforce prompts, allowing your standard Salesforce Admins to manage and tweak them without writing code."
  },
  {
    question: "What is the typical implementation timeline?",
    answer: "Most customers are live within 4-8 weeks, depending on the complexity of their legacy data migration and the number of custom ad server integrations."
  },
  {
    question: "How does 'PacePal' work with Agentforce?",
    answer: "PacePal is our specialized Media agent package built on top of the Agentforce framework, providing domain-specific actions and reasoning for ad sales workflows."
  },
  {
    question: "Can we use our own custom forecasting models?",
    answer: "Absolutely. Our platform is fully extensible, allowing you to plug in your own data science models or use our pre-built predictive analytics."
  },
  {
    question: "Does this support multi-currency and multi-agency billing?",
    answer: "Yes, the system is designed for global media organizations and handles multi-currency transactions as well as complex multi-agency commissioning structures natively."
  }
];

export const LOGOS = [
  "Sony", "ADA", "Yahoo!", "Disney", "Warner", "Paramount"
];
