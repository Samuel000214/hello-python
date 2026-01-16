import { Repeat } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const PodRepeatOffenders = () => (
  <PlaceholderPage
    title="Repeat Offender Analysis"
    description="Identify and analyze patterns among repeat offenders to develop targeted intervention strategies."
    icon={Repeat}
    iconBgColor="bg-admin/10"
    iconColor="text-admin"
    dashboardPath="/pod/dashboard"
  />
);

export default PodRepeatOffenders;
