import React, { useState } from 'react';
import { 
  Layers, 
  Shield, 
  Check, 
  ArrowRight, 
  Clock, 
  Users, 
  Folder, 
  Calendar, 
  MessageSquare, 
  Sparkles, 
  Globe, 
  Database, 
  Lock, 
  Server,
  Activity
} from 'lucide-react';

interface PricingTier {
  name: string;
  slug: string;
  price: number | 'custom';
  priceLabel?: string;
  description: string;
  popular?: boolean;
  enterprise?: boolean;
  annualEligible?: boolean;
  annualPrice?: number;
  annualSavings?: string;
  seats: string;
  projects: string;
  storage: string;
  infra: string;
  color: string;
  accentClass: string;
  features: string[];
  addonNote?: string;
}

function GradientAnimatedBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        background: '#060818',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-blob aurora-blob-4" />
      <div className="aurora-blob aurora-blob-5" />

      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.055,
          zIndex: 4,
          pointerEvents: 'none',
        }}
      >
        <filter id="aurora-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#aurora-noise)" />
      </svg>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(6, 8, 24, 0.55) 100%)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}


export default function App() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const pricingTiers: PricingTier[] = [
    {
      name: 'Free',
      slug: 'free',
      price: 0,
      description: 'Explore Deskii at zero cost. Perfect for solo operators validating workflows before committing.',
      seats: '1 seat',
      projects: '5 projects',
      storage: '—',
      infra: 'Shared (tenant-isolated)',
      color: 'var(--muted)',
      accentClass: 'text-slate-400',
      features: [
        'Task tracking (limited view)',
        'Own daily logs only',
        'Basic announcements feed',
        'No chat, file storage, or payroll',
        'No HR or org chart modules',
        'Community support only'
      ]
    },
    {
      name: 'Solo',
      slug: 'solo',
      price: 9,
      description: 'For freelancers and solo operators who need structured task management and daily logging.',
      seats: '2 seats',
      projects: '15 projects',
      storage: '—',
      infra: 'Shared (RLS-isolated)',
      color: 'var(--accent)',
      accentClass: 'text-[var(--accent)]',
      features: [
        'Full task tracking board & list',
        'Own daily logs (EOD)',
        'Company chat access',
        'No file storage or HR modules',
        'No payroll processing',
        'Email support (48h)'
      ]
    },
    {
      name: 'Starter',
      slug: 'starter',
      price: 29,
      description: 'Small teams ready for collaborative ops — all-staff logs, payslip views, and basic HR included.',
      seats: '5 seats',
      projects: '50 projects',
      storage: '500 MB',
      infra: 'Shared (RLS-isolated)',
      color: 'var(--accent)',
      accentClass: 'text-[var(--accent)]',
      addonNote: 'Extra seats: +$5/user/mo (max 8 total)',
      features: [
        'All-staff daily logs (EOD tracking)',
        'Payroll calendar view (read-only)',
        'Payslip view (read-only)',
        'Basic HR module',
        '500 MB file storage',
        'Department folder organization',
        'Email support (24h)'
      ]
    },
    {
      name: 'Professional',
      slug: 'professional',
      price: 49,
      annualEligible: true,
      annualPrice: 40.18,
      annualSavings: 'Save $105.84/yr',
      description: 'Full-featured operations hub for growing teams — payroll, HR, EOD heatmaps, and priority support.',
      popular: true,
      seats: '15 seats',
      projects: 'Unlimited',
      storage: '5 GB',
      infra: 'Shared (RLS-isolated)',
      color: 'var(--accent-secondary)',
      accentClass: 'text-[var(--accent-secondary)]',
      features: [
        'Full payroll processing + PDF payslips',
        'Full HR & employee management',
        'EOD heatmaps & productivity reports',
        'Unlimited projects',
        '5 GB file storage',
        'Task collaborator assignments',
        'Priority support (12h SLA)'
      ]
    },
    {
      name: 'Business',
      slug: 'business',
      price: 79,
      annualEligible: true,
      annualPrice: 64.78,
      annualSavings: 'Save $170.64/yr',
      description: 'Dedicated database, advanced payroll rules, analytics, and API access for scaling organizations.',
      seats: 'Unlimited',
      projects: 'Unlimited',
      storage: '25 GB',
      infra: 'Dedicated Supabase project',
      color: 'var(--accent-purple)',
      accentClass: 'text-[var(--accent-purple)]',
      features: [
        'Advanced payroll rules & deductions',
        'Business analytics dashboard',
        'Read API access',
        'Dedicated database (isolated)',
        'Business reporting suite',
        '25 GB file storage',
        'Business support (8h SLA)'
      ]
    },
    {
      name: 'Enterprise',
      slug: 'enterprise',
      price: 'custom',
      priceLabel: 'From $199/mo',
      description: 'Fully isolated infrastructure, SSO/SAML, white-label, audit logs, SLA, and a dedicated CSM.',
      enterprise: true,
      seats: 'Unlimited',
      projects: 'Unlimited',
      storage: 'Unlimited',
      infra: 'Isolated Supabase org',
      color: '#34d399',
      accentClass: 'text-emerald-400',
      features: [
        'Full API + webhooks',
        'SSO / SAML authentication',
        'Audit logs & compliance tools',
        'White-label deployment',
        'Guaranteed SLA agreement',
        'Dedicated Customer Success Manager',
        'Custom onboarding & training'
      ]
    }
  ];

  const layers = [
    {
      id: 4,
      name: 'Client Access Gateway',
      icon: <Globe className="w-5 h-5 text-[var(--accent)]" />,
      desc: 'Secured workspace for clients to review roadmap, invoices, resources, and submit booking requests.',
      color: 'var(--accent)',
      tech: 'React / Next.js Client Portal Routes',
      elevation: 'layer-overlay'
    },
    {
      id: 3,
      name: 'Command Center Interface',
      icon: <Layers className="w-5 h-5 text-[var(--accent-secondary)]" />,
      desc: 'Operational dashboard including real-time tasks, comments, company chat channels, and compensation calendars.',
      color: 'var(--accent-secondary)',
      tech: 'Next.js App Router / Tailwind CSS v4',
      elevation: 'layer-top'
    },
    {
      id: 2,
      name: 'Realtime Service Engine',
      icon: <Server className="w-5 h-5 text-[var(--accent-purple)]" />,
      desc: 'Express-powered APIs, authorization controls, socket.io gateways for instant chat updates, and scheduler cron tasks.',
      color: 'var(--accent-purple)',
      tech: 'Node.js / Express / Socket.io / Redis',
      elevation: 'layer-middle'
    },
    {
      id: 1,
      name: 'Hardened Database & Security',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      desc: 'Secure tables mapped with Prisma client, enforced by Row-Level Security (RLS) policies for complete company isolation.',
      color: '#34d399',
      tech: 'PostgreSQL / Prisma / Supabase Auth',
      elevation: 'layer-base'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="relative min-h-screen">
      <GradientAnimatedBackground />
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-filter backdrop-blur-md border-b border-[var(--border)]">
        <div className="container h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#111827] border border-white/10 shadow-md group overflow-hidden">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                viewBox="0 0 24 24"
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
              >
                <rect width="20" height="20" x="2" y="2" fill="#111827" rx="4" />
                <path fill="#fff" d="M6 8h12v2H6zm0 4h12v2H6z" opacity=".95" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-none tracking-tight">DESKII</span>
              <span className="font-mono text-[9px] text-[var(--accent)] tracking-wider">COMMAND CENTER SERVICES</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#architecture" className="text-sm font-semibold hover:text-[var(--accent)] transition-colors">3D Architecture</a>
            <a href="#features" className="text-sm font-semibold hover:text-[var(--accent)] transition-colors">Operations Grid</a>
            <a href="#pricing" className="text-sm font-semibold hover:text-[var(--accent)] transition-colors">Pricing Plans</a>
            <a href="#deploy" className="text-sm font-semibold hover:text-[var(--accent)] transition-colors">Request Instance</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://internal-company-portal-savage-llc.vercel.app/login"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary py-2 px-4 text-sm"
            >
              Portal Demo
            </a>
            <a href="#deploy" className="btn btn-primary py-2 px-4 text-sm">
              Deploy Deskii
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="container max-w-4xl flex flex-col items-center text-center gap-8 py-12 relative z-10">
          <div className="badge badge-shimmer">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>Full-Stack Enterprise Setup</span>
          </div>
          
          <h1 className="hero-title-3d text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-[#f5fbff] to-[var(--accent)] bg-clip-text text-transparent">
            Your Company Ops, Fully Managed in{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--accent-secondary), var(--accent-purple))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 18px rgba(242,59,191,0.6))'
              }}
            >3D Stack</span>
          </h1>
          
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
            Ditch scattered spreadsheets and separate chat apps. Deploy a bespoke operations command center featuring real-time task boards, structured EOD logs, internal chat, automated payroll calculation, and secured client-facing workspaces. Inspired by our flagship <strong>MyDeskii</strong> design.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2 justify-center">
            <a href="#deploy" className="btn btn-primary">
              <span>Deploy Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#architecture" className="btn btn-secondary">
              <span>Explore 3D Stack</span>
              <Activity className="w-4 h-4 text-[var(--accent-secondary)]" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-[var(--border)] w-full max-w-lg">
            <div className="flex flex-col">
              <span className="stat-value-glow text-2xl font-bold text-white font-heading">6 Tiers</span>
              <span className="text-xs text-[var(--muted)]">Structured Packages</span>
            </div>
            <div className="h-8 w-px bg-[var(--border)]" />
            <div className="flex flex-col">
              <span className="stat-value-glow text-2xl font-bold text-[var(--accent)] font-heading">100%</span>
              <span className="text-xs text-[var(--muted)]">Self-Hosted Isolations</span>
            </div>
            <div className="h-8 w-px bg-[var(--border)]" />
            <div className="flex flex-col">
              <span className="stat-value-glow text-2xl font-bold text-[var(--accent-secondary)] font-heading">Realtime</span>
              <span className="text-xs text-[var(--muted)]">WebSocket Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Architecture Details (Layer Showcase) */}
      <section id="architecture" className="py-24 border-t border-[var(--border)] bg-slate-950/40 relative">
        <div className="glow-orb top-10 left-10" style={{ background: 'rgba(23, 217, 245, 0.04)' }} />
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="badge badge-secondary mb-4">Enterprise Grade</div>
            <h2 className="text-4xl font-extrabold mb-4 font-heading">
              Secure Operations, Built For Isolation
            </h2>
            <p className="text-lg text-[var(--muted)]">
              Deskii isn't just a marketing website template. It is a full-featured company operations portal engineered for security, modularity, and high data density.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {layers.map((layer) => (
              <div 
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`glass-panel p-6 text-left flex flex-col gap-4 cursor-pointer relative overflow-hidden transition-all duration-300 ${activeLayer === layer.id ? 'border-[var(--accent)] bg-slate-900/60' : 'border-slate-800'}`}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10">
                  {layer.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white font-heading">{layer.name}</h3>
                  <span className="font-mono text-[10px] text-[var(--accent)] tracking-wider uppercase">{layer.tech}</span>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {layer.desc}
                </p>
                <div 
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    fontFamily: 'var(--mono)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    opacity: 0.1,
                    pointerEvents: 'none',
                    color: '#ffffff'
                  }}
                >
                  L{layer.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Features Grid (Bento Grid) */}
      <section id="features" className="py-24 border-t border-[var(--border)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="badge mb-4">Core Capabilities</div>
            <h2 className="text-4xl font-extrabold mb-4 font-heading">
              The 8 Superpowers of Deskii
            </h2>
            <p className="text-lg text-[var(--muted)]">
              Unlock a unified workspace for internal staff, managers, and external clients with our pre-configured modules.
            </p>
          </div>

          <div className="bento-grid">
            {/* Bento 1: Task Tracking (Large) */}
            <div className="bento-item bento-item-large glass-panel text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-bold font-heading">Comprehensive Task Board &amp; Calendars</h3>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Manage tasks in Board, Calendar, and List views. Features include prefilled task creation on date-clicking, assignee role mapping, estimation in <code className="text-xs">HH:MM</code> with total minutes API normalization, and multi-employee collaborator assignments with visual cards.
              </p>
              <div className="mt-4 p-3 bg-slate-900/60 rounded border border-[var(--border)] grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="font-mono text-[var(--accent)] font-semibold">Board / List</div>
                  <span className="text-[10px] text-[var(--muted)]">Double Sync Views</span>
                </div>
                <div>
                  <div className="font-mono text-[var(--accent-secondary)] font-semibold">HH:MM</div>
                  <span className="text-[10px] text-[var(--muted)]">Precision Estimates</span>
                </div>
                <div>
                  <div className="font-mono text-emerald-400 font-semibold">Collaborators</div>
                  <span className="text-[10px] text-[var(--muted)]">Multi-Assign Chips</span>
                </div>
              </div>
            </div>

            {/* Bento 2: EOD Daily Logs (Tall) */}
            <div className="bento-item bento-item-tall glass-panel text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[var(--accent-secondary)]" />
                </div>
                <h3 className="text-xl font-bold font-heading">Interactive Daily Logs &amp; EOD Reports</h3>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Simplify End-Of-Day reporting. Employees import tasks from Task Tracking automatically, matching completed and review-stage items for selected dates. Keeps track of status, department hours, and hosts threaded comments for manager overrides.
              </p>
              <div className="mt-auto p-4 bg-slate-900/60 rounded border border-[var(--border)] flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                  <span className="text-white">Import Suggestions</span>
                  <span className="text-[var(--accent-secondary)]">Auto-detect</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="bg-[var(--accent-secondary)] h-full w-[80%]" />
                </div>
                <span className="text-[9px] text-[var(--muted)] font-mono">TASK SUGGESTIONS FILTERED BY DATE &amp; STATUS</span>
              </div>
            </div>

            {/* Bento 3: Secure File Directory */}
            <div className="bento-item glass-panel text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 flex items-center justify-center">
                  <Folder className="w-5 h-5 text-[var(--accent-purple)]" />
                </div>
                <h3 className="text-xl font-bold font-heading">Department Files</h3>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Secure file uploads mapped directly to database directory folders. Authorizes file access per department with persistent view preferences.
              </p>
            </div>

            {/* Bento 4: Operations & Org Chart */}
            <div className="bento-item glass-panel text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold font-heading">Org Charts</h3>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Map organization hierarchies into centered reporting lines. Generate one-time password links safely for onboarding.
              </p>
            </div>

            {/* Bento 5: Realtime Chat & Channels */}
            <div className="bento-item glass-panel text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold font-heading">Company Chat</h3>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Real-time channels, direct messages, and team chat rooms. Features file attachments, reactions, messages editing, and arvhiving.
              </p>
            </div>

            {/* Bento 6: Comp Calendars & Payroll (Large) */}
            <div className="bento-item bento-item-large glass-panel text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold font-heading">Payroll Audits &amp; Billable Controls</h3>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Manage compensation profiles with billable hour caps per day and salary divisors (weekdays, flat 30/20 days, or flat 160 hours). Highlight QA alerts like missing clock-outs or overlapping sessions. Auto-generate payslips and advanced period advances via scheduler cron tasks.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-900/60 rounded border border-[var(--border)] text-xs">
                  <div className="text-[var(--accent)] font-bold">Salary Divisor Schema</div>
                  <span className="text-[10px] text-[var(--muted)]">Flexible payroll formulas</span>
                </div>
                <div className="p-3 bg-slate-900/60 rounded border border-[var(--border)] text-xs">
                  <div className="text-emerald-400 font-bold">QA Warn Auditor</div>
                  <span className="text-[10px] text-[var(--muted)]">Highlights overlapping clock-ins</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 border-t border-[var(--border)] bg-slate-950/20 relative">
        <div className="glow-orb bottom-10 right-10" style={{ background: 'rgba(242, 59, 191, 0.05)' }} />
        <div className="glow-orb top-10 left-10" style={{ background: 'rgba(23, 217, 245, 0.04)', width: '350px', height: '350px' }} />
        <div className="container">
          <div className="pricing-header">
            <div className="badge badge-secondary mb-4">Pricing Plans · June 2026 Revision</div>
            <h2 className="text-4xl font-extrabold mb-4 font-heading">
              Six Tiers, One Platform
            </h2>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              From solo operators to enterprise-scale deployments. All tiers share the same Deskii command center — feature gates control access depth.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: billingPeriod === 'monthly' ? '#ffffff' : 'var(--muted)' }}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                aria-label="Toggle billing period"
                style={{
                  width: '56px',
                  height: '32px',
                  borderRadius: '9999px',
                  padding: '3px',
                  border: '1px solid var(--border)',
                  background: billingPeriod === 'annual' ? 'rgba(242,59,191,0.2)' : 'rgba(30,41,59,1)',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: billingPeriod === 'annual' ? 'var(--accent-secondary)' : 'var(--accent)',
                    transform: billingPeriod === 'annual' ? 'translateX(24px)' : 'translateX(0px)',
                    transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s',
                    boxShadow: billingPeriod === 'annual'
                      ? '0 0 12px rgba(242,59,191,0.6)'
                      : '0 0 12px rgba(23,217,245,0.4)',
                  }}
                />
              </button>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', color: billingPeriod === 'annual' ? '#ffffff' : 'var(--muted)' }}>
                Annual
                <span style={{ background: 'rgba(52,211,153,0.15)', color: '#34d399', fontSize: '10px', padding: '2px 8px', borderRadius: '4px', fontFamily: 'var(--mono)', fontWeight: 700, border: '1px solid rgba(52,211,153,0.3)' }}>SAVE 18%</span>
              </span>
            </div>
            {billingPeriod === 'annual' && (
              <p className="text-xs text-[var(--muted)] mt-2 font-mono">
                Annual discount applies to Professional & Business tiers only.
              </p>
            )}
          </div>

          {/* Pricing Cards Grid — 3 cols on lg, 2 on md */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 items-stretch">
            {pricingTiers.map((tier, index) => {
              const isAnnualActive = billingPeriod === 'annual' && tier.annualEligible;
              const displayPrice = isAnnualActive ? tier.annualPrice : tier.price;

              return (
                <div
                  key={index}
                  className={`glass-panel pricing-card ${
                    tier.popular ? 'popular border-2' : ''
                  } ${
                    tier.enterprise ? 'enterprise-card' : ''
                  }`}
                  style={{
                    borderColor: tier.popular
                      ? 'var(--accent-secondary)'
                      : tier.enterprise
                      ? 'rgba(52,211,153,0.4)'
                      : ''
                  }}
                >
                  {/* Badge labels */}
                  {tier.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-purple)] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  {tier.enterprise && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-[var(--accent)] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      Enterprise
                    </span>
                  )}

                  {/* Tier header */}
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white font-heading leading-tight mb-1">{tier.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <span className={`font-mono text-[10px] uppercase tracking-widest font-bold ${tier.accentClass}`}
                        style={{ letterSpacing: '0.08em', fontSize: '9px' }}>
                        {tier.slug}
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--muted)] leading-relaxed min-h-[52px]">{tier.description}</p>
                  </div>

                  {/* Spec pills: seats / projects / storage */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                    {[tier.seats, tier.projects, tier.storage !== '—' ? tier.storage : null].filter(Boolean).map((spec, si) => (
                      <span key={si} style={{ fontSize: '9px', fontFamily: 'var(--mono)', fontWeight: 600, padding: '2px 7px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
                        {spec}
                      </span>
                    ))}
                    <span style={{ fontSize: '9px', fontFamily: 'var(--mono)', fontWeight: 600, padding: '2px 7px', borderRadius: '4px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b' }}>
                      {tier.infra}
                    </span>
                  </div>

                  {/* Price display */}
                  {/* Price display */}
                  <div style={{ margin: '16px 0 4px' }}>
                    {tier.price === 'custom' ? (
                      <div>
                        <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399', fontFamily: 'var(--heading)' }}>Custom</span>
                        <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px', fontFamily: 'var(--mono)' }}>{tier.priceLabel}</div>
                      </div>
                    ) : (
                      <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                          <span style={{ fontSize: '1.4rem', fontWeight: 700, color: tier.color, fontFamily: 'var(--heading)' }}>$</span>
                          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: tier.color, fontFamily: 'var(--heading)', lineHeight: 1 }}>
                            {typeof displayPrice === 'number' ? displayPrice.toFixed(displayPrice % 1 !== 0 ? 2 : 0) : displayPrice}
                          </span>
                          <span style={{ fontSize: '11px', color: 'var(--muted)', marginLeft: '4px' }}>/mo</span>
                          {isAnnualActive && tier.annualSavings && (
                            <span style={{ fontSize: '9px', fontFamily: 'var(--mono)', fontWeight: 700, color: '#34d399', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: '4px', padding: '2px 6px', marginLeft: '8px' }}>
                              {tier.annualSavings}
                            </span>
                          )}
                        </div>
                        {isAnnualActive && typeof tier.price === 'number' && (
                          <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: '#475569', textDecoration: 'line-through', marginTop: '2px' }}>
                            ${tier.price}/mo billed monthly
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Feature list */}
                  <ul className="pricing-features text-left">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-xs text-slate-300">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Add-on note */}
                  {tier.addonNote && (
                    <p className="text-[10px] font-mono text-[var(--accent)] bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded px-2 py-1.5">
                      + {tier.addonNote}
                    </p>
                  )}

                  {/* CTA */}
                  <a
                    href="#deploy"
                    className={`btn w-full py-2.5 text-xs font-bold rounded-lg ${
                      tier.popular
                        ? 'btn-primary'
                        : tier.enterprise
                        ? 'btn-enterprise'
                        : 'btn-secondary'
                    }`}
                  >
                    {tier.enterprise ? 'Contact Sales' : tier.price === 0 ? 'Get Started Free' : 'Select Plan'}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Overage pricing note */}
          <div className="mt-10 p-4 bg-slate-950/60 border border-[var(--border)] rounded-xl max-w-2xl mx-auto text-center">
            <p className="text-xs font-mono text-[var(--muted)]">
              <span className="text-white font-semibold">Overage rates:</span>&nbsp;
              Storage $0.05/GB &middot; Disk $0.20/GB &middot; Egress $0.15/GB
              <span style={{ margin: '0 10px', color: '#1e293b' }}>|</span>
              Infrastructure floor: $132/mo shared across Free&ndash;Professional tiers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action & Contact Form */}
      <section id="deploy" className="py-24 border-t border-[var(--border)] relative overflow-hidden">
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: 'rgba(154, 77, 255, 0.03)', width: '600px', height: '600px' }} />
        
        <div className="container max-w-4xl relative z-10">
          <div className="glass-panel p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left side text */}
            <div className="md:col-span-6 text-left flex flex-col gap-4">
              <h2 className="text-3xl font-extrabold font-heading text-white leading-tight">
                Ready to Deploy Your Customized Deskii Command Center?
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Connect with our team to configure your private instance. We assist with PostgreSQL setups, Row-Level Security configurations, Socket adapters, and Mail integrations.
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Prisma schema compliance assured</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Lock className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>Dedicated, isolated container deployments</span>
                </div>
              </div>
            </div>

            {/* Right side contact form */}
            <div className="md:col-span-6">
              {contactSubmitted ? (
                <div className="p-8 bg-slate-900/60 rounded-xl border border-emerald-500/30 text-center flex flex-col items-center gap-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">Workspace Request Sent!</h3>
                  <p className="text-xs text-[var(--muted)]">
                    Thank you. An operations lead will reach out to you within 2 hours to details your custom deployment options.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-4 text-left">
                  <div>
                    <label htmlFor="comp-name" className="block text-xs font-semibold text-slate-300 mb-1.5">Company Name</label>
                    <input 
                      id="comp-name"
                      type="text" 
                      required
                      placeholder="Savage LLC" 
                      className="w-full px-3 py-2.5 text-sm bg-slate-950/80 border border-[var(--border)] rounded-lg focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">Corporate Email</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      placeholder="operations@savage.com" 
                      className="w-full px-3 py-2.5 text-sm bg-slate-950/80 border border-[var(--border)] rounded-lg focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="tier-select" className="block text-xs font-semibold text-slate-300 mb-1.5">Target Service Tier</label>
                    <select 
                      id="tier-select"
                      className="w-full px-3 py-2.5 text-sm bg-slate-950/80 border border-[var(--border)] rounded-lg focus:border-[var(--accent)] transition-colors"
                      defaultValue="professional"
                    >
                      <option value="free">Free ($0/mo)</option>
                      <option value="solo">Solo ($9/mo)</option>
                      <option value="starter">Starter ($29/mo)</option>
                      <option value="professional">Professional ($49/mo)</option>
                      <option value="business">Business ($79/mo)</option>
                      <option value="enterprise">Enterprise (Custom / $199+ base)</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full py-3 mt-2 text-sm font-semibold rounded-lg"
                  >
                    <span>Request Command Center</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--border)] bg-slate-950">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-[#111827] border border-white/10 shadow-md">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <rect width="20" height="20" x="2" y="2" fill="#111827" rx="4" />
                <path fill="#fff" d="M6 8h12v2H6zm0 4h12v2H6z" opacity=".95" />
              </svg>
            </div>
            <span className="font-heading font-bold text-sm tracking-tight text-white">DESKII SERVICE SOLUTIONS</span>
          </div>

          <p className="text-xs text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Deskii Service Solutions. Built inspired by the Deskii Internal Operations Architecture.
          </p>

          <div className="flex items-center gap-6">
            <a 
              href="https://internal-company-portal-savage-llc.vercel.app/login"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              Demo Portal
            </a>
            <span className="text-slate-800">|</span>
            <span className="text-xs text-[var(--muted)]">
              Powered by Node &amp; Prisma
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
