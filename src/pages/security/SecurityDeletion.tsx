import { Trash2 } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const SecurityDeletion = () => (
  <PlaceholderPage
    title="Data Deletion Requests"
    description="Process and manage data deletion requests in compliance with regulations."
    icon={Trash2}
    iconBgColor="bg-destructive/10"
    iconColor="text-destructive"
    dashboardPath="/admin/dashboard"
  />
);

export default SecurityDeletion;
