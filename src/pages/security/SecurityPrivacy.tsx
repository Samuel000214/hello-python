import { Lock } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const SecurityPrivacy = () => (
  <PlaceholderPage
    title="Privacy Controls"
    description="Configure privacy settings and data protection measures."
    icon={Lock}
    iconBgColor="bg-destructive/10"
    iconColor="text-destructive"
    dashboardPath="/admin/dashboard"
  />
);

export default SecurityPrivacy;
