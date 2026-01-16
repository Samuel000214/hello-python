import { Gavel } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const PodDecisions = () => (
  <PlaceholderPage
    title="Decisions Panel"
    description="Make informed disciplinary decisions. Review recommendations, apply sanctions, and document outcomes."
    icon={Gavel}
    iconBgColor="bg-adviser/10"
    iconColor="text-adviser"
    dashboardPath="/pod/dashboard"
  />
);

export default PodDecisions;
