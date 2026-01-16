import { Image } from 'lucide-react';
import PlaceholderPage from '@/components/page/PlaceholderPage';

const PodEvidence = () => (
  <PlaceholderPage
    title="Evidence Vault"
    description="Securely store and manage all case-related evidence including photos, videos, and documents."
    icon={Image}
    iconBgColor="bg-admin/10"
    iconColor="text-admin"
    dashboardPath="/pod/dashboard"
  />
);

export default PodEvidence;
