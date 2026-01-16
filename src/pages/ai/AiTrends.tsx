import { LineChart } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const AiTrends = () => (
  <PlaceholderPage
    title="Trend Analytics"
    description="Analyze behavioral trends across time periods, demographics, and incident types."
    icon={LineChart}
    iconBgColor="bg-pod/10"
    iconColor="text-pod"
    dashboardPath="/pod/dashboard"
  />
);

export default AiTrends;
