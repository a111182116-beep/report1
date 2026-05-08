/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Shield, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  ClipboardList, 
  Wallet, 
  MessageSquare,
  ChevronRight,
  Plane,
  Home,
  Truck,
  ArrowRight,
  Menu,
  X,
  Smartphone,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { roadmap, dailySchedule, budgetData, checklist, safetySop } from './data';

const COLORS = ['#1e3a8a', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444'];

export default function App() {
  const [activeSection, setActiveSection] = useState('mission-overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'mission-overview', title: '任務總覽', icon: Shield },
    { id: 'daily-log', title: '每日紀錄', icon: Calendar },
    { id: 'logistics', title: '後勤預算', icon: Wallet },
    { id: 'resources', title: '物資備忘錄', icon: ClipboardList },
    { id: 'safety', title: '安全守則', icon: AlertCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-50 mission-grid">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center text-white">
              <Shield size={18} />
            </div>
            <span className="font-bold text-slate-900 tracking-tight">MISSION: TACHILEIK</span>
          </div>
          
          <div className="hidden md:flex gap-8">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === s.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveSection(s.id);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 text-slate-900 font-medium text-left"
                >
                  <s.icon size={20} className="text-blue-600" />
                  {s.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        {/* Hero */}
        <section id="hero" className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end gap-6"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                2024年4月跨國邊境任務
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter">
                清明連假：<br />
                <span className="text-blue-700">清萊至大其力</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl">
                六天五夜跨國邊境任務全記錄。從地理實測到安全對接，最完整的手冊指引。
              </p>
            </div>
            <div className="hidden lg:block w-64 h-64 bg-white/50 backdrop-blur rounded-full border border-slate-200 relative">
               <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin size={48} className="text-blue-200" />
               </div>
               <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-dashed border-blue-100 rounded-full"
               />
            </div>
          </motion.div>
        </section>

        {/* Action Grid */}
        <div className="space-y-24">
          
          {/* Mission Overview / Roadmap */}
          <section id="mission-overview">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center text-white">
                <Briefcase size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">任務執行藍圖</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {roadmap.map((phase, idx) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-12 h-12 bg-slate-50 flex items-center justify-center rounded-bl-2xl font-mono text-slate-300 font-bold text-xl group-hover:text-blue-100 transition-colors">
                    0{phase.id}
                  </div>
                  <div className="text-sm font-bold text-blue-600 mb-1">{phase.days}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-dashed border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-400 capitalize">
                    <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                    Phase Status: Ready
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Daily Schedule */}
          <section id="daily-log">
             <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Calendar size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">每日紀錄全行程</h2>
            </div>

            <div className="space-y-8">
              {dailySchedule.map((day, idx) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
                >
                  <div className="md:flex">
                    <div className="md:w-48 bg-slate-900 p-8 flex flex-col justify-between items-center md:items-start text-white">
                      <div>
                        <div className="text-slate-400 text-xs font-mono mb-1 uppercase tracking-widest">Session</div>
                        <div className="text-4xl font-bold italic">DAY 0{day.day}</div>
                      </div>
                      <div className="mt-4 md:mt-0">
                         {day.day <= 2 ? <Home size={32} strokeWidth={1} /> : 
                          day.day <= 5 ? <Truck size={32} strokeWidth={1} /> : <Plane size={32} strokeWidth={1} />}
                      </div>
                    </div>
                    <div className="flex-1 p-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        {day.title}
                        {day.day === 6 && <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] rounded uppercase font-bold tracking-tighter">Border Crossing</span>}
                      </h3>
                      
                      <div className="grid lg:grid-cols-2 gap-10">
                        <div>
                          <div className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                             <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
                             行程活動
                          </div>
                          <ul className="space-y-3">
                            {day.activities.map((act, i) => (
                              <li key={i} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                {act}
                              </li>
                            ))}
                          </ul>
                          {day.details && (
                            <div className="mt-6 p-4 bg-slate-50 rounded-xl text-xs text-slate-500 leading-relaxed border-l-2 border-blue-200 italic">
                               {day.details}
                            </div>
                          )}
                          {day.transport && (
                            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full inline-flex">
                              <Truck size={14} /> 建議交通: {day.transport}
                            </div>
                          )}
                        </div>

                        <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                          <div className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                             <div className="w-1 h-4 bg-amber-500 rounded-full"></div>
                             關鍵備戰動作
                          </div>
                          <div className="space-y-3">
                             {day.keyActions.map((action, i) => (
                               <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200 text-sm font-medium text-slate-800 shadow-sm">
                                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                  {action}
                               </div>
                             ))}
                          </div>
                          {day.items && (
                             <div className="mt-6">
                               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">物資增補</div>
                               <div className="flex flex-wrap gap-2">
                                 {day.items.map((item, i) => (
                                   <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded text-[11px] font-medium text-slate-600 shadow-sm">
                                      {item}
                                   </span>
                                 ))}
                               </div>
                             </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Budget Logic */}
          <section id="logistics">
             <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Wallet size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">預算分配分析</h2>
                <p className="text-sm text-slate-500">總體任務預算額度：30,000 TWD</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl border border-slate-200">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={budgetData} layout="vertical" margin={{ left: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#475569', fontSize: 13, fontWeight: 500 }}
                    />
                    <Tooltip 
                      cursor={{ fill: '#f8fafc' }}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {budgetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-6">
                {budgetData.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                      <span className="font-semibold text-slate-700">{item.name}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xl font-mono font-bold text-slate-900">NT$ {item.value.toLocaleString()}</span>
                      <span className="text-[10px] text-slate-400">{(item.value / 300).toFixed(1)}% OF TOTAL</span>
                    </div>
                  </div>
                ))}
                <div className="p-4 bg-blue-900 rounded-2xl text-white flex justify-between items-center">
                  <span className="font-bold">任務預算總額</span>
                  <span className="text-2xl font-mono font-black">NT$ 30,000</span>
                </div>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section id="resources">
             <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-white">
                <ClipboardList size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">關鍵物資檢查清單</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {checklist.map((cat, idx) => (
                 <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col"
                 >
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center justify-between">
                       {cat.category}
                       <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                    </h3>
                    <div className="space-y-2 flex-1">
                       {cat.items.map((item, i) => (
                         <div key={i} className="flex items-center gap-2 group cursor-default">
                            <div className="w-4 h-4 rounded border border-slate-200 group-hover:border-amber-400 transition-colors flex items-center justify-center">
                               <div className="w-2 h-2 bg-amber-400 rounded-sm scale-0 group-hover:scale-100 transition-transform" />
                            </div>
                            <span className="text-sm text-slate-600 font-medium">{item}</span>
                         </div>
                       ))}
                    </div>
                 </motion.div>
               ))}
            </div>
          </section>

          {/* Safety SOP */}
          <section id="safety">
             <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white">
                <Shield size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">安全與風險控管 SOP</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {safetySop.map((sop) => (
                 <div key={sop.title} className="bg-red-50 p-8 rounded-3xl border border-red-100 flex flex-col md:flex-row gap-6">
                    <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-200">
                       <AlertCircle size={28} />
                    </div>
                    <div>
                       <h3 className="text-xl font-black text-red-900 mb-3 uppercase italic underline decoration-red-200 underline-offset-4">{sop.title} Protocol</h3>
                       <p className="text-red-800 leading-relaxed text-sm font-medium">
                          {sop.content}
                       </p>
                    </div>
                 </div>
               ))}
            </div>
          </section>

          {/* Issues and Discussion */}
          <section className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 blur-[100px] rounded-full" />
             
             <div className="relative z-10">
               <MessageSquare size={48} className="mx-auto mb-6 text-blue-400" />
               <h2 className="text-4xl font-bold mb-4 tracking-tight">問題與討論</h2>
               <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                 祝您旅途平安，順利完成跨國對接。<br />
                 如有任何異常，請立即撥打緊急聯絡專線。
               </p>
               <div className="inline-flex items-center gap-4 bg-white/10 px-8 py-4 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors group cursor-pointer">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">Emergency Line</span>
                    <span className="text-xl font-mono font-bold tracking-tighter">+886-XXX-XXX-XXX</span>
                  </div>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform text-blue-400" />
               </div>
             </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-slate-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 opacity-50">
            <span className="text-xs font-mono font-bold">TASK_ID: X4R-TACHILEIK-2024</span>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            &copy; 2024 跨國任務行動小組. 版權所有.
          </p>
        </div>
      </footer>
    </div>
  );
}

