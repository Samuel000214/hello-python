import { Settings } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const SettingsPage = () => (
  <PlaceholderPage
    title="System Settings"
    description="Configure system-wide settings and preferences."
    icon={Settings}
    iconBgColor="bg-muted"
    iconColor="text-muted-foreground"
    dashboardPath="/admin/dashboard"
  />
);

export default SettingsPage;
