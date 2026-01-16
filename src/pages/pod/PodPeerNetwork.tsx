import { Network } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const PodPeerNetwork = () => (
  <PlaceholderPage
    title="Peer Network Graph"
    description="Visualize peer relationships and social networks to understand group dynamics in incidents."
    icon={Network}
    iconBgColor="bg-beadle/10"
    iconColor="text-beadle"
    dashboardPath="/pod/dashboard"
  />
);

export default PodPeerNetwork;
