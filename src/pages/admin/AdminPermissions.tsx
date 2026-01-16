import { motion } from 'framer-motion';
import { Key, Shield, Users, Lock, Eye, Edit, Trash2 } from 'lucide-react';
import AdminFloatingNav from '@/components/ui/AdminFloatingNav';

const roles = [
  { id: 1, name: 'Administrator', users: 3, color: 'bg-blue-100 text-blue-600' },
  { id: 2, name: 'Coordinator', users: 8, color: 'bg-purple-100 text-purple-600' },
  { id: 3, name: 'Adviser', users: 45, color: 'bg-emerald-100 text-emerald-600' },
  { id: 4, name: 'Beadle', users: 120, color: 'bg-amber-100 text-amber-600' },
  { id: 5, name: 'Parent', users: 2500, color: 'bg-gray-100 text-gray-600' },
  { id: 6, name: 'Student', users: 5000, color: 'bg-cyan-100 text-cyan-600' },
];

const permissions = [
  { module: 'Student Records', view: true, edit: true, delete: false },
  { module: 'Incident Reports', view: true, edit: true, delete: true },
  { module: 'Attendance Data', view: true, edit: false, delete: false },
  { module: 'AI Insights', view: true, edit: false, delete: false },
  { module: 'System Settings', view: false, edit: false, delete: false },
];

const AdminPermissions = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-32">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Permission Matrix</h1>
          <p className="text-[15px] text-gray-600 mt-1">Configure role-based access control and permission levels</p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/40 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-xl ${role.color} flex items-center justify-center mb-3`}>
                <Shield className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <p className="text-[15px] font-semibold text-gray-900">{role.name}</p>
              <p className="text-sm text-gray-500">{role.users.toLocaleString()} users</p>
            </motion.div>
          ))}
        </div>

        {/* Permission Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/40 shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Adviser Permissions</h2>
            <p className="text-sm text-gray-500 mt-1">Manage what advisers can access</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 pb-4 border-b border-gray-100">
              <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">Module</span>
              <span className="text-xs font-medium tracking-wider text-gray-400 uppercase text-center">View</span>
              <span className="text-xs font-medium tracking-wider text-gray-400 uppercase text-center">Edit</span>
              <span className="text-xs font-medium tracking-wider text-gray-400 uppercase text-center">Delete</span>
            </div>
            
            {permissions.map((perm, index) => (
              <motion.div
                key={perm.module}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 py-4 border-b border-gray-50 items-center"
              >
                <span className="text-[15px] font-medium text-gray-900">{perm.module}</span>
                <div className="flex justify-center">
                  <button className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    perm.view ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Eye className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
                <div className="flex justify-center">
                  <button className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    perm.edit ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Edit className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
                <div className="flex justify-center">
                  <button className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    perm.delete ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AdminFloatingNav />
    </div>
  );
};

export default AdminPermissions;
