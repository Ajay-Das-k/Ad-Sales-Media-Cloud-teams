
export interface NavLink {
  label: string;
  href: string;
}

export interface KPIItem {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WorkflowItem {
  headline: string;
  agent: string;
  description: string;
  outcome: string;
  icon: string;
}

export interface USPItem {
  title: string;
  description: string;
  result: string;
  icon: string;
}

export interface ExtendsSFItem {
  title: string;
  icon: string;
  situation: string;
  value: string;
}
