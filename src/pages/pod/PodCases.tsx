import { FolderOpen } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const PodCases = () => (
  <PlaceholderPage
    title="Active Cases"
    description="Manage and review all ongoing discipline cases. Track progress, assign tasks, and ensure timely resolution."
    icon={FolderOpen}
    iconBgColor="bg-pod/10"
    iconColor="text-pod"
    dashboardPath="/pod/dashboard"
  />
);

export default PodCases;
