import { Theme } from "@/interfaces";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

/**
 * Represents the admin data.
 */
export const ADMIN_DATA = [
  {
    id: 1,
    title: "Total Revenue",
    value: "$45,231.89",
    percentage: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    id: 2,
    title: "Subscriptions",
    value: "+2350",
    percentage: "+180.1% from last month",
    icon: Users,
  },
  {
    id: 3,
    title: "Sales",
    value: "+12,234",
    percentage: "+19% from last month",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Active Now",
    value: "+573",
    percentage: "+201 since last hour",
    icon: Activity,
  },
];

/**
 * Represents an array of blog data.
 */
export const BLOG_DATA = [
  {
    id: 1,
    title: "The Power of Positive Thinking",
    description:
      "Explore the transformative effects of positive thinking on your mindset, well-being, and life trajectory. Discover practical tips and strategies to cultivate an optimistic outlook and unlock your full potential.",
    image: "/blog-1.jpg",
  },
  {
    id: 2,
    title: "Embracing Minimalism: A Path to Freedom",
    description:
      "Delve into the minimalist lifestyle and its profound impact on decluttering your physical and mental spaces. Learn how to prioritize the essentials, find contentment in simplicity, and experience true freedom.",
    image: "/blog-2.jpg",
  },
];

/* Represents chart data in admin page */
export const ADMIN_CHART_DATA = [
  { goal: 400, label: "Jan" },
  { goal: 300, label: "Feb" },
  { goal: 200, label: "Mar" },
  { goal: 300, label: "Apr" },
  { goal: 200, label: "May" },
  { goal: 278, label: "Jun" },
  { goal: 189, label: "Jul" },
  { goal: 239, label: "Aug" },
  { goal: 300, label: "Sep" },
  { goal: 200, label: "Oct" },
  { goal: 278, label: "Nov" },
  { goal: 189, label: "Dec" },
  { goal: 349, label: "Jan" },
];

/**
 * Themes object for storing themes of different domains.
 */
export const THEMES: { [key: string]: Theme } = {
    admin: {
      palette: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 84% 4.9%)",
        primary: "hsl(221.2 83.2% 53.3%)",
        primaryForeground: "hsl(210 40% 98%)",
        secondary: "hsl(210 40% 96.1%)",
        secondaryForeground: "hsl(222.2 47.4% 11.2%)",
      },
      fonts: [{ family: "Inter", weight: 400 }],
    },
    blogs: {
      palette: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(224 71.4% 4.1%)",
        primary: "hsl(262.1 83.3% 57.8%)",
        primaryForeground: "hsl(210 20% 98%)",
        secondary: "hsl(220 14.3% 95.9%)",
        secondaryForeground: "hsl(220.9 39.3% 11%)",
      },
      fonts: [{ family: "Inter", weight: 400 }],
    },
  };