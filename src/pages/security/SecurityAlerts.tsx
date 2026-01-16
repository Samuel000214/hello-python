import { AlertTriangle } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const SecurityAlerts = () => (
  <PlaceholderPage
    title="Security Alerts"
    description="Monitor and respond to security alerts and anomalies."
    icon={AlertTriangle}
    iconBgColor="bg-admin/10"
    iconColor="text-admin"
    dashboardPath="/admin/dashboard"
  />
);

export default SecurityAlerts;
