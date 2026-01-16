import { AlertTriangle } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const PodIncidents = () => (
  <PlaceholderPage
    title="Incident Queue"
    description="Review and triage incoming incident reports. Prioritize cases and assign them for investigation."
    icon={AlertTriangle}
    iconBgColor="bg-destructive/10"
    iconColor="text-destructive"
    dashboardPath="/pod/dashboard"
  />
);

export default PodIncidents;
