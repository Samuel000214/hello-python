import { Search, Bell, User, HelpCircle, Activity, Zap, ShieldX } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

export const SearchPage = () => (
  <PlaceholderPage title="Global Search" description="Search across all records, cases, and documents." icon={Search} iconBgColor="bg-pod/10" iconColor="text-pod" dashboardPath="/pod/dashboard" />
);

export const NotificationsPage = () => (
  <PlaceholderPage title="Notifications" description="View and manage all your notifications." icon={Bell} iconBgColor="bg-admin/10" iconColor="text-admin" dashboardPath="/pod/dashboard" />
);

export const ProfilePage = () => (
  <PlaceholderPage title="User Profile" description="Manage your profile and account settings." icon={User} iconBgColor="bg-pod/10" iconColor="text-pod" dashboardPath="/pod/dashboard" />
);

export const HelpPage = () => (
  <PlaceholderPage title="Help Center" description="Access guides, tutorials, and support resources." icon={HelpCircle} iconBgColor="bg-adviser/10" iconColor="text-adviser" dashboardPath="/pod/dashboard" />
);

export const SystemStatusPage = () => (
  <PlaceholderPage title="System Status" description="Monitor system health and performance." icon={Activity} iconBgColor="bg-adviser/10" iconColor="text-adviser" dashboardPath="/admin/dashboard" />
);

export const ActivityFeedPage = () => (
  <PlaceholderPage title="Activity Feed" description="View recent activity across the system." icon={Zap} iconBgColor="bg-beadle/10" iconColor="text-beadle" dashboardPath="/pod/dashboard" />
);

export const AccessDeniedPage = () => (
  <PlaceholderPage title="Access Denied" description="You don't have permission to access this resource." icon={ShieldX} iconBgColor="bg-destructive/10" iconColor="text-destructive" dashboardPath="/" backLabel="Go Home" />
);
