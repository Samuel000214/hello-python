import { Brain } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const AiInsights = () => (
  <PlaceholderPage
    title="AI Insights"
    description="Leverage AI-powered analytics to understand patterns, predict risks, and make informed decisions."
    icon={Brain}
    iconBgColor="bg-beadle/10"
    iconColor="text-beadle"
    dashboardPath="/pod/dashboard"
  />
);

export default AiInsights;
