import { HardDrive } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const SecurityBackup = () => (
  <PlaceholderPage
    title="Backup Status"
    description="Monitor backup status and configure backup schedules."
    icon={HardDrive}
    iconBgColor="bg-adviser/10"
    iconColor="text-adviser"
    dashboardPath="/admin/dashboard"
  />
);

export default SecurityBackup;
