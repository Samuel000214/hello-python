import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Image, Lock, Video, FileText, Upload, Filter, Search, Grid, List,
  Download, Eye, MoreVertical, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GlassCard from '@/components/ui/GlassCard';
import BackButton from '@/components/navigation/BackButton';

const evidenceItems = [
  { id: 1, type: 'video', name: 'CCTV_Canteen_01152024.mp4', case: 'Case #2024-015', uploadedBy: 'Beadle - 10-A', uploadedAt: '10:45 AM', size: '24.5 MB', status: 'verified' },
  { id: 2, type: 'image', name: 'vandalism_photo_01.jpg', case: 'Case #2024-012', uploadedBy: 'Guard - Gate 1', uploadedAt: '09:30 AM', size: '2.1 MB', status: 'pending' },
  { id: 3, type: 'image', name: 'incident_evidence_02.jpg', case: 'Case #2024-015', uploadedBy: 'Teacher - Ms. Garcia', uploadedAt: '09:15 AM', size: '1.8 MB', status: 'verified' },
  { id: 4, type: 'document', name: 'witness_statement.pdf', case: 'Case #2024-010', uploadedBy: 'POD Office', uploadedAt: 'Yesterday', size: '156 KB', status: 'verified' },
  { id: 5, type: 'video', name: 'hallway_incident.mp4', case: 'Case #2024-008', uploadedBy: 'Security', uploadedAt: 'Jan 14', size: '45.2 MB', status: 'verified' },
  { id: 6, type: 'image', name: 'contraband_photo.jpg', case: 'Case #2024-007', uploadedBy: 'Guard - Gate 2', uploadedAt: 'Jan 13', size: '3.2 MB', status: 'archived' },
];

const custodyLog = [
  { action: 'Verified', user: 'POD - Mr. Santos', time: '11:00 AM', date: 'Today' },
  { action: 'Viewed', user: 'Adviser - Ms. Cruz', time: '10:50 AM', date: 'Today' },
  { action: 'Uploaded', user: 'Beadle - 10-A', time: '10:45 AM', date: 'Today' },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'video': return Video;
    case 'image': return Image;
    case 'document': return FileText;
    default: return FileText;
  }
};

const PodEvidence = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedItem, setSelectedItem] = useState<typeof evidenceItems[0] | null>(null);

  return (
    <div className="h-screen w-screen overflow-hidden bg-background flex items-center justify-center">
      <div className="w-[70vw] max-w-6xl mx-auto h-full flex flex-col py-6 pb-[10vh]">
        <BackButton dashboardPath="/pod/dashboard" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Lock className="h-5 w-5 text-white/70" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white/95">Evidence Vault</h1>
                <p className="text-xs text-white/50">Secure storage for case evidence</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input placeholder="Search..." className="pl-8 w-40 bg-white/5 border-white/10 text-white/80 placeholder-white/40 h-8 text-xs" />
              </div>
              <Button variant="outline" size="icon" className="h-8 w-8 border-white/10 text-white/60">
                <Filter className="h-4 w-4" />
              </Button>
              <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as 'grid' | 'list')}>
                <TabsList className="h-8 bg-white/5">
                  <TabsTrigger value="grid" className="h-6 px-2"><Grid className="h-3 w-3" /></TabsTrigger>
                  <TabsTrigger value="list" className="h-6 px-2"><List className="h-3 w-3" /></TabsTrigger>
                </TabsList>
              </Tabs>
              <Button size="sm" className="h-8 gap-1 bg-white/10 hover:bg-white/15 text-white/80">
                <Upload className="h-3 w-3" />
                Upload
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="flex-1 grid grid-cols-4 gap-4 min-h-0">
          {/* Main Content */}
          <div className="col-span-3 overflow-y-auto">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-3 gap-3">
                {evidenceItems.map((item, index) => {
                  const Icon = getTypeIcon(item.type);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <GlassCard 
                        className="p-3 cursor-pointer"
                        onClick={() => setSelectedItem(item)}
                      >
                        <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center mb-2 relative">
                          <Icon className="h-8 w-8 text-white/30" />
                          <Badge 
                            className="absolute top-1.5 right-1.5 text-[10px] bg-white/10 text-white/60"
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-xs text-white/80 truncate">{item.name}</h4>
                        <p className="text-[10px] text-white/40">{item.case}</p>
                        <div className="flex items-center justify-between mt-2 text-[10px] text-white/30">
                          <span>{item.size}</span>
                          <span>{item.uploadedAt}</span>
                        </div>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <GlassCard className="overflow-hidden" hover={false}>
                <div className="divide-y divide-white/5">
                  {evidenceItems.map((item, index) => {
                    const Icon = getTypeIcon(item.type);
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.03 }}
                        className="flex items-center gap-3 p-3 hover:bg-white/5 transition-colors cursor-pointer"
                        onClick={() => setSelectedItem(item)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-white/40" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-xs text-white/80 truncate">{item.name}</h4>
                          <p className="text-[10px] text-white/40">{item.case}</p>
                        </div>
                        <Badge className="text-[10px] bg-white/10 text-white/60">{item.status}</Badge>
                        <span className="text-xs text-white/30">{item.size}</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <MoreVertical className="h-3 w-3 text-white/40" />
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </GlassCard>
            )}
          </div>

          {/* Sidebar - Chain of Custody */}
          <div className="col-span-1">
            <GlassCard className="p-4 h-full" hover={false}>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-4 w-4 text-white/60" />
                <h3 className="font-medium text-sm text-white/80">Chain of Custody</h3>
              </div>

              {selectedItem ? (
                <>
                  <div className="p-2 bg-white/5 rounded-lg mb-4">
                    <p className="text-xs font-medium text-white/80 truncate">{selectedItem.name}</p>
                    <p className="text-[10px] text-white/40">{selectedItem.case}</p>
                  </div>

                  <div className="space-y-3">
                    {custodyLog.map((log, index) => (
                      <div key={index} className="flex gap-2">
                        <div className="relative flex flex-col items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                          {index < custodyLog.length - 1 && (
                            <div className="w-0.5 h-full bg-white/10 absolute top-1.5" />
                          )}
                        </div>
                        <div className="flex-1 pb-3">
                          <p className="text-xs font-medium text-white/70">{log.action}</p>
                          <p className="text-[10px] text-white/40">{log.user}</p>
                          <p className="text-[10px] text-white/30">{log.time} · {log.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="flex-1 gap-1 h-7 text-xs bg-white/10 hover:bg-white/15 text-white/70">
                      <Eye className="h-3 w-3" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 gap-1 h-7 text-xs border-white/10 text-white/60">
                      <Download className="h-3 w-3" />
                      Export
                    </Button>
                  </div>
                </>
              ) : (
                <p className="text-xs text-white/40 text-center py-6">
                  Select an item to view custody log
                </p>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodEvidence;
