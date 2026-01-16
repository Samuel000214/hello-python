import { UserCheck } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const SecurityAccessReview = () => (
  <PlaceholderPage
    title="Access Review"
    description="Review and audit user access patterns and permissions."
    icon={UserCheck}
    iconBgColor="bg-pod/10"
    iconColor="text-pod"
    dashboardPath="/admin/dashboard"
  />
);

export default SecurityAccessReview;
