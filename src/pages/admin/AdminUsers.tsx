import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, UserPlus, MoreHorizontal, Shield, X, User, Clock, CheckCircle } from 'lucide-react';
import AdminFloatingNav from '@/components/ui/AdminFloatingNav';

const mockUsers = [
  { id: 1, name: 'Dr. Sarah Mitchell', email: 'sarah.m@school.edu', role: 'Administrator', status: 'active', lastAuth: '2 min ago', avatar: 'SM' },
  { id: 2, name: 'James Anderson', email: 'james.a@school.edu', role: 'Coordinator', status: 'active', lastAuth: '1 hour ago', avatar: 'JA' },
  { id: 3, name: 'Maria Garcia', email: 'maria.g@school.edu', role: 'Adviser', status: 'active', lastAuth: '3 hours ago', avatar: 'MG' },
  { id: 4, name: 'David Chen', email: 'david.c@school.edu', role: 'Adviser', status: 'pending', lastAuth: 'Never', avatar: 'DC' },
  { id: 5, name: 'Emma Thompson', email: 'emma.t@school.edu', role: 'Beadle', status: 'active', lastAuth: 'Yesterday', avatar: 'ET' },
  { id: 6, name: 'Michael Park', email: 'michael.p@school.edu', role: 'Parent', status: 'inactive', lastAuth: '2 weeks ago', avatar: 'MP' },
];

const roleColors: Record<string, string> = {
  Administrator: 'bg-blue-100 text-blue-600',
  Coordinator: 'bg-purple-100 text-purple-600',
  Adviser: 'bg-emerald-100 text-emerald-600',
  Beadle: 'bg-amber-100 text-amber-600',
  Parent: 'bg-gray-100 text-gray-600',
  Student: 'bg-cyan-100 text-cyan-600',
};

const statusColors: Record<string, { bg: string; dot: string }> = {
  active: { bg: 'bg-emerald-50', dot: 'bg-emerald-500' },
  pending: { bg: 'bg-amber-50', dot: 'bg-amber-500' },
  inactive: { bg: 'bg-gray-50', dot: 'bg-gray-400' },
};

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);

  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">
            Access Control
          </span>
          <h1 className="text-2xl font-semibold text-gray-900 mt-1">System Personnel</h1>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8"
        >
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl px-14 py-4 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-lg"
          />
        </motion.div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-sm overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-4 bg-gray-50/50 border-b border-gray-100">
            <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">User</span>
            <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">Role</span>
            <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">Status</span>
            <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">Last Auth</span>
            <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">Actions</span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-100">
            {filteredUsers.map((user, idx) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                onClick={() => setSelectedUser(user)}
                className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-4 hover:bg-blue-50/30 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-sm font-semibold text-blue-600">
                    {user.avatar}
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${roleColors[user.role]}`}>
                    {user.role}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusColors[user.status].bg}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusColors[user.status].dot}`} />
                    {user.status}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {user.lastAuth}
                  </span>
                </div>
                <div className="flex items-center">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sidebar Panel */}
        <AnimatePresence>
          {selectedUser && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[400px] bg-white/95 backdrop-blur-2xl border-l border-gray-200 shadow-2xl z-50 p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold text-gray-900">Edit User</h2>
                <button 
                  onClick={() => setSelectedUser(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-xl font-semibold text-blue-600">
                    {selectedUser.avatar}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{selectedUser.name}</p>
                    <p className="text-sm text-gray-500">{selectedUser.email}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium tracking-wider text-gray-400 uppercase mb-2 block">
                      System Role
                    </label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                      {Object.keys(roleColors).map(role => (
                        <option key={role} value={role} selected={role === selectedUser.role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium tracking-wider text-gray-400 uppercase mb-2 block">
                      Account Status
                    </label>
                    <div className="flex gap-2">
                      {['active', 'pending', 'inactive'].map(status => (
                        <button 
                          key={status}
                          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
                            status === selectedUser.status 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 space-y-3">
                  <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" strokeWidth={1.5} />
                    Save Changes
                  </button>
                  <button className="w-full py-3 text-red-500 rounded-xl font-medium hover:bg-red-50 transition-colors">
                    Revoke Access
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AdminFloatingNav />
    </div>
  );
};

export default AdminUsers;
