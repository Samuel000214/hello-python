import { FileText } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const PodLegal = () => (
  <PlaceholderPage
    title="Legal Documentation"
    description="Generate legal documents, formal notices, and compliance reports for disciplinary proceedings."
    icon={FileText}
    iconBgColor="bg-muted"
    iconColor="text-muted-foreground"
    dashboardPath="/pod/dashboard"
  />
);

export default PodLegal;
