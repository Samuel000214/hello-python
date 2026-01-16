import { Scale } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const PodSanctions = () => (
  <PlaceholderPage
    title="Sanctions History"
    description="View and manage the complete history of disciplinary sanctions applied across all cases."
    icon={Scale}
    iconBgColor="bg-admin/10"
    iconColor="text-admin"
    dashboardPath="/pod/dashboard"
  />
);

export default PodSanctions;
