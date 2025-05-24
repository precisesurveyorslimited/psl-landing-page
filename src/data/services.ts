import { Shield, Clock, DollarSign, Droplet } from "lucide-react";

export interface ServiceItem {
  icon: typeof Shield;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    icon: Shield,
    title: "Preventative Maintenance",
    description:
      "Stop small cracks from becoming major problems. Our proactive approach extends pavement life and prevents costly repairs.",
  },
  {
    icon: Clock,
    title: "Minimal Downtime",
    description:
      "Quick application and fast drying times mean minimal disruption to your business operations.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solution",
    description:
      "Save up to 400% on future repair costs. Crack sealing is one of the most economical maintenance strategies.",
  },
  {
    icon: Droplet,
    title: "Water Protection",
    description:
      "Prevent water infiltration that can lead to base failure and costly repairs. Our sealants create a waterproof barrier.",
  },
];
