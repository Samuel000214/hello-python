import { ShieldCheck } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const SecurityIntegrity = () => (
  <PlaceholderPage
    title="System Integrity Monitor"
    description="Monitor system integrity and detect unauthorized changes."
    icon={ShieldCheck}
    iconBgColor="bg-adviser/10"
    iconColor="text-adviser"
    dashboardPath="/admin/dashboard"
  />
);

export default SecurityIntegrity;
