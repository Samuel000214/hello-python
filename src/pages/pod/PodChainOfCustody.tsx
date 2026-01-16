import { Link2 } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const PodChainOfCustody = () => (
  <PlaceholderPage
    title="Chain of Custody"
    description="Track the complete chain of custody for all evidence items to ensure legal compliance."
    icon={Link2}
    iconBgColor="bg-pod/10"
    iconColor="text-pod"
    dashboardPath="/pod/dashboard"
  />
);

export default PodChainOfCustody;
