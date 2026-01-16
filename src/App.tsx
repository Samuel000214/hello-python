import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// System & Auth
import SystemInit from "./pages/system/SystemInit";
import RoleSelect from "./pages/auth/RoleSelect";
import AdminProduction from "./pages/auth/AdminProduction";

// Portals
import PortalLogin from "./pages/portal/PortalLogin";
import StudentDashboard from "./pages/portal/StudentDashboard";
import ParentDashboard from "./pages/portal/ParentDashboard";
import ParentNotifications from "./pages/portal/ParentNotifications";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAccountsCreate from "./pages/admin/AdminAccountsCreate";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminPermissions from "./pages/admin/AdminPermissions";
import AdminPolicy from "./pages/admin/AdminPolicy";
import AdminRuleMapping from "./pages/admin/AdminRuleMapping";
import AdminRetention from "./pages/admin/AdminRetention";
import AdminConsent from "./pages/admin/AdminConsent";
import AdminBiasReview from "./pages/admin/AdminBiasReview";
import AdminIntegrations from "./pages/admin/AdminIntegrations";

// POD Pages
import PodDashboard from "./pages/pod/PodDashboard";
import PodCases from "./pages/pod/PodCases";
import PodInvestigate from "./pages/pod/PodInvestigate";
import PodIncidents from "./pages/pod/PodIncidents";
import PodDecisions from "./pages/pod/PodDecisions";
import PodSanctions from "./pages/pod/PodSanctions";
import PodEvidence from "./pages/pod/PodEvidence";
import PodChainOfCustody from "./pages/pod/PodChainOfCustody";
import PodAuditLogs from "./pages/pod/PodAuditLogs";
import PodAppeals from "./pages/pod/PodAppeals";
import PodLegal from "./pages/pod/PodLegal";
import PodBehaviorRisk from "./pages/pod/PodBehaviorRisk";
import PodRepeatOffenders from "./pages/pod/PodRepeatOffenders";
import PodBehaviorTimeline from "./pages/pod/PodBehaviorTimeline";
import PodPeerNetwork from "./pages/pod/PodPeerNetwork";

// Students
import Students from "./pages/students/Students";
import StudentProfile from "./pages/students/StudentProfile";

// AI Pages
import AiInsights from "./pages/ai/AiInsights";
import AiTrends from "./pages/ai/AiTrends";
import AiRiskReports from "./pages/ai/AiRiskReports";
import AiConfidence from "./pages/ai/AiConfidence";
import AiConfig from "./pages/ai/AiConfig";
import AiModelStatus from "./pages/ai/AiModelStatus";
import AiTraining from "./pages/ai/AiTraining";
import VoiceCommand from "./pages/voice/VoiceCommand";

// Docs
import DocsIncidents from "./pages/docs/DocsIncidents";
import DocsWarnings from "./pages/docs/DocsWarnings";
import DocsSuspensions from "./pages/docs/DocsSuspensions";
import DocsParentLetters from "./pages/docs/DocsParentLetters";
import DocsHearings from "./pages/docs/DocsHearings";
import DocsReports from "./pages/docs/DocsReports";
import DocsAppeals from "./pages/docs/DocsAppeals";
import DocsMinistryExport from "./pages/docs/DocsMinistryExport";

// Adviser Pages
import AdviserDashboard from "./pages/adviser/AdviserDashboard";
import AdviserAttendance from "./pages/adviser/AdviserAttendance";
import AdviserSection from "./pages/adviser/AdviserSection";
import AdviserAbsenceAnalytics from "./pages/adviser/AdviserAbsenceAnalytics";
import AdviserStudentUpdate from "./pages/adviser/AdviserStudentUpdate";
import AdviserLogs from "./pages/adviser/AdviserLogs";
import AdviserEarlyConcerns from "./pages/adviser/AdviserEarlyConcerns";
import AdviserCases from "./pages/adviser/AdviserCases";

// Beadle Pages
import BeadleDashboard from "./pages/beadle/BeadleDashboard";
import BeadleReport from "./pages/beadle/BeadleReport";
import BeadleVoiceReport from "./pages/beadle/BeadleVoiceReport";
import BeadleEvidence from "./pages/beadle/BeadleEvidence";
import BeadleConfidential from "./pages/beadle/BeadleConfidential";
import BeadleStatus from "./pages/beadle/BeadleStatus";
import BeadleFeedback from "./pages/beadle/BeadleFeedback";
import BeadleSafety from "./pages/beadle/BeadleSafety";

// Security
import SecurityPrivacy from "./pages/security/SecurityPrivacy";
import SecurityAccessReview from "./pages/security/SecurityAccessReview";
import SecurityAlerts from "./pages/security/SecurityAlerts";
import SecurityDeletion from "./pages/security/SecurityDeletion";
import SecurityBackup from "./pages/security/SecurityBackup";
import SecurityIntegrity from "./pages/security/SecurityIntegrity";

// Communication
import CommAdviserPod from "./pages/comm/CommAdviserPod";
import CommAdviserAlerts from "./pages/comm/CommAdviserAlerts";
import CommEmergency from "./pages/comm/CommEmergency";
import CommParentNotifications from "./pages/comm/CommParentNotifications";
import CommMessageLogs from "./pages/comm/CommMessageLogs";
import CommBroadcasts from "./pages/comm/CommBroadcasts";

// Integration
import IntegrationAttendanceBehavior from "./pages/integration/IntegrationAttendanceBehavior";
import IntegrationChronicAbsence from "./pages/integration/IntegrationChronicAbsence";
import IntegrationLatePatterns from "./pages/integration/IntegrationLatePatterns";
import IntegrationHotspots from "./pages/integration/IntegrationHotspots";
import IntegrationIntervention from "./pages/integration/IntegrationIntervention";

// Shared
import SettingsPage from "./pages/shared/SettingsPage";
import { SearchPage, NotificationsPage, ProfilePage, HelpPage, SystemStatusPage, ActivityFeedPage, AccessDeniedPage } from "./pages/shared/SharedPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Entry Point - System Init */}
          <Route path="/" element={<Navigate to="/system/init" replace />} />
          <Route path="/system/init" element={<SystemInit />} />
          
          {/* Auth Routes */}
          <Route path="/auth/role-select" element={<RoleSelect />} />
          <Route path="/auth/admin-production" element={<AdminProduction />} />
          
          {/* Portal Routes */}
          <Route path="/portal/:role" element={<PortalLogin />} />
          <Route path="/portal/student/dashboard" element={<StudentDashboard />} />
          <Route path="/portal/parent/dashboard" element={<ParentDashboard />} />
          <Route path="/portal/parent/notifications" element={<ParentNotifications />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/accounts/create" element={<AdminAccountsCreate />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/permissions" element={<AdminPermissions />} />
          <Route path="/admin/policy" element={<AdminPolicy />} />
          <Route path="/admin/rule-mapping" element={<AdminRuleMapping />} />
          <Route path="/admin/retention" element={<AdminRetention />} />
          <Route path="/admin/consent" element={<AdminConsent />} />
          <Route path="/admin/bias-review" element={<AdminBiasReview />} />
          <Route path="/admin/integrations" element={<AdminIntegrations />} />

          {/* POD Routes */}
          <Route path="/pod/dashboard" element={<PodDashboard />} />
          <Route path="/pod/cases" element={<PodCases />} />
          <Route path="/pod/investigate/:caseId" element={<PodInvestigate />} />
          <Route path="/pod/incidents" element={<PodIncidents />} />
          <Route path="/pod/decisions" element={<PodDecisions />} />
          <Route path="/pod/sanctions" element={<PodSanctions />} />
          <Route path="/pod/evidence" element={<PodEvidence />} />
          <Route path="/pod/chain-of-custody" element={<PodChainOfCustody />} />
          <Route path="/pod/audit-logs" element={<PodAuditLogs />} />
          <Route path="/pod/appeals" element={<PodAppeals />} />
          <Route path="/pod/legal" element={<PodLegal />} />
          <Route path="/pod/behavior-risk" element={<PodBehaviorRisk />} />
          <Route path="/pod/repeat-offenders" element={<PodRepeatOffenders />} />
          <Route path="/pod/behavior-timeline" element={<PodBehaviorTimeline />} />
          <Route path="/pod/peer-network" element={<PodPeerNetwork />} />

          {/* Students */}
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentProfile />} />

          {/* AI Routes */}
          <Route path="/ai/insights" element={<AiInsights />} />
          <Route path="/ai/trends" element={<AiTrends />} />
          <Route path="/ai/risk-reports" element={<AiRiskReports />} />
          <Route path="/ai/confidence" element={<AiConfidence />} />
          <Route path="/ai/config" element={<AiConfig />} />
          <Route path="/ai/model-status" element={<AiModelStatus />} />
          <Route path="/ai/training" element={<AiTraining />} />
          <Route path="/voice-command" element={<VoiceCommand />} />

          {/* Docs Routes */}
          <Route path="/docs/incidents" element={<DocsIncidents />} />
          <Route path="/docs/warnings" element={<DocsWarnings />} />
          <Route path="/docs/suspensions" element={<DocsSuspensions />} />
          <Route path="/docs/parent-letters" element={<DocsParentLetters />} />
          <Route path="/docs/hearings" element={<DocsHearings />} />
          <Route path="/docs/reports" element={<DocsReports />} />
          <Route path="/docs/appeals" element={<DocsAppeals />} />
          <Route path="/docs/ministry-export" element={<DocsMinistryExport />} />

          {/* Adviser Routes */}
          <Route path="/adviser/dashboard" element={<AdviserDashboard />} />
          <Route path="/adviser/attendance" element={<AdviserAttendance />} />
          <Route path="/adviser/section" element={<AdviserSection />} />
          <Route path="/adviser/absence-analytics" element={<AdviserAbsenceAnalytics />} />
          <Route path="/adviser/student-update" element={<AdviserStudentUpdate />} />
          <Route path="/adviser/logs" element={<AdviserLogs />} />
          <Route path="/adviser/early-concerns" element={<AdviserEarlyConcerns />} />
          <Route path="/adviser/cases" element={<AdviserCases />} />

          {/* Beadle Routes */}
          <Route path="/beadle/dashboard" element={<BeadleDashboard />} />
          <Route path="/beadle/report" element={<BeadleReport />} />
          <Route path="/beadle/voice-report" element={<BeadleVoiceReport />} />
          <Route path="/beadle/evidence" element={<BeadleEvidence />} />
          <Route path="/beadle/confidential" element={<BeadleConfidential />} />
          <Route path="/beadle/status" element={<BeadleStatus />} />
          <Route path="/beadle/feedback" element={<BeadleFeedback />} />
          <Route path="/beadle/safety" element={<BeadleSafety />} />

          {/* Security Routes */}
          <Route path="/security/privacy" element={<SecurityPrivacy />} />
          <Route path="/security/access-review" element={<SecurityAccessReview />} />
          <Route path="/security/alerts" element={<SecurityAlerts />} />
          <Route path="/security/deletion" element={<SecurityDeletion />} />
          <Route path="/security/backup" element={<SecurityBackup />} />
          <Route path="/security/integrity" element={<SecurityIntegrity />} />

          {/* Communication Routes */}
          <Route path="/comm/adviser-pod" element={<CommAdviserPod />} />
          <Route path="/comm/adviser-alerts" element={<CommAdviserAlerts />} />
          <Route path="/comm/emergency" element={<CommEmergency />} />
          <Route path="/comm/parent-notifications" element={<CommParentNotifications />} />
          <Route path="/comm/message-logs" element={<CommMessageLogs />} />
          <Route path="/comm/broadcasts" element={<CommBroadcasts />} />

          {/* Integration Routes */}
          <Route path="/integration/attendance-behavior" element={<IntegrationAttendanceBehavior />} />
          <Route path="/integration/chronic-absence" element={<IntegrationChronicAbsence />} />
          <Route path="/integration/late-patterns" element={<IntegrationLatePatterns />} />
          <Route path="/integration/hotspots" element={<IntegrationHotspots />} />
          <Route path="/integration/intervention" element={<IntegrationIntervention />} />

          {/* Shared Routes */}
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/system-status" element={<SystemStatusPage />} />
          <Route path="/activity-feed" element={<ActivityFeedPage />} />
          <Route path="/access-denied" element={<AccessDeniedPage />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
