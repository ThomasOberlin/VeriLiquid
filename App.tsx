
import React, { useState } from 'react';
import { MOCK_ASSETS } from './constants';
import AssetCard from './components/AssetCard';
import Assistant from './components/Assistant';

const InstitutionalEcosystem = () => (
  <div className="relative w-full aspect-[4/3] max-w-5xl mx-auto group">
    {/* Background Glows */}
    <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full scale-75 animate-pulse"></div>
    
    {/* SVG Connections */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      <path d="M 500 375 L 250 150" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="10 5" className="animate-flow" />
      <path d="M 500 375 L 750 150" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="10 5" className="animate-flow-reverse" />
      <path d="M 500 375 L 200 550" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="10 5" className="animate-flow" />
      <path d="M 500 375 L 800 550" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="10 5" className="animate-flow" />
      <path d="M 500 375 V 650" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="10 5" className="animate-flow" />
      
      <path d="M 250 150 H 750" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.2" />
      <path d="M 200 550 H 800" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.2" />
    </svg>

    {/* Center Core */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="w-32 h-32 md:w-48 md:h-48 relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="relative w-full h-full glass-card rounded-3xl border-2 border-blue-400/30 flex items-center justify-center overflow-hidden rotate-45 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
           <div className="absolute inset-2 border border-blue-400/20 rounded-2xl"></div>
           <div className="text-4xl md:text-6xl -rotate-45">💠</div>
        </div>
      </div>
    </div>

    <div className="absolute top-[10%] left-[10%] z-10 animate-float" style={{animationDelay: '0s'}}>
      <div className="glass-card p-4 rounded-2xl border-blue-500/30 w-40 md:w-56">
        <div className="text-2xl mb-2">🏢</div>
        <div className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Entity</div>
        <div className="text-sm md:text-base font-bold text-white">Importer / Distributor</div>
        <div className="mt-3 flex gap-1">
          <div className="w-full h-1 bg-blue-500/20 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-blue-500 animate-loading-bar"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute top-[10%] right-[10%] z-10 animate-float" style={{animationDelay: '1s'}}>
      <div className="glass-card p-4 rounded-2xl border-blue-500/30 w-40 md:w-56 text-right">
        <div className="text-2xl mb-2">🏭</div>
        <div className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Entity</div>
        <div className="text-sm md:text-base font-bold text-white">Processor / Exporter</div>
        <div className="mt-3 flex gap-1 justify-end">
          <div className="w-24 h-1 bg-blue-500/20 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-blue-500 animate-loading-bar-reverse"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-[20%] left-[5%] z-10 animate-float" style={{animationDelay: '0.5s'}}>
      <div className="glass-card p-4 rounded-2xl border-green-500/30 w-36 md:w-48">
        <div className="flex justify-between items-start mb-2">
          <div className="text-2xl">💶</div>
          <span className="text-[8px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded font-black">LIQUID</span>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-green-400 mb-1">Currency</div>
        <div className="text-sm md:text-base font-bold text-white">Fiat Settlement</div>
      </div>
    </div>

    <div className="absolute bottom-[20%] right-[5%] z-10 animate-float" style={{animationDelay: '1.5s'}}>
      <div className="glass-card p-4 rounded-2xl border-blue-400/30 w-36 md:w-48">
        <div className="flex justify-between items-start mb-2">
          <div className="text-2xl">🪙</div>
          <span className="text-[8px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded font-black">ERC-20</span>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Digital Asset</div>
        <div className="text-sm md:text-base font-bold text-white">Stablecoin Rail</div>
      </div>
    </div>

    <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-30">
      <div className="glass-card px-6 py-3 rounded-full border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="text-left">
          <div className="text-[8px] font-black uppercase tracking-widest text-blue-400">Security Core</div>
          <div className="text-xs md:text-sm font-bold text-white">Compliance Verification VeriPura Connect</div>
        </div>
      </div>
    </div>
  </div>
);

const FAQSection = () => (
  <section className="py-24 max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter text-center">Frequently Asked <span className="text-[#22C55E]">Questions</span></h2>
    <div className="space-y-6">
      {[
        {
          q: "Is VeriLiquid open to retail/small investors?",
          a: "Yes. VeriLiquid is designed for both individual and institutional participants. Availability and eligibility may vary by jurisdiction, and some offerings may have additional requirements depending on local rules."
        },
        {
          q: "Do I need to be verified to participate?",
          a: "In some cases, yes. Identity verification may be required to comply with applicable regulations and to protect platform integrity. Requirements vary by jurisdiction and participant type."
        },
        {
          q: "Are all offerings available to everyone?",
          a: "Not necessarily. Certain offerings may be restricted by jurisdiction, investor classification, or product structure. VeriLiquid will clearly indicate eligibility before you participate."
        }
      ].map((item, i) => (
        <div key={i} className="glass-card p-8 rounded-3xl border-white/5">
          <h4 className="text-lg font-bold mb-3 text-white">{item.q}</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const App: React.FC = () => {
  type PageType = 'home' | 'marketplace' | 'detail' | 'how-it-works' | 'risk-management' | 'institutional' | 'importers';
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [institutionalSubTab, setInstitutionalSubTab] = useState<'model' | 'eligibility' | 'pricing' | 'compliance'>('model');
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);

  const selectedAsset = MOCK_ASSETS.find(a => a.id === selectedAssetId);

  const navigateToDetail = (id: string) => {
    setSelectedAssetId(id);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const Nav = () => (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="w-8 h-8 bg-green-500 rounded-lg rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm -rotate-45"></div>
          </div>
          <span className="text-xl font-extrabold tracking-tighter uppercase">VERILIQUID</span>
        </div>
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <button onClick={() => setCurrentPage('home')} className={`text-xs lg:text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}>Home</button>
          <button onClick={() => setCurrentPage('marketplace')} className={`text-xs lg:text-sm font-medium transition-colors ${currentPage === 'marketplace' ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}>Tokens</button>
          <button onClick={() => setCurrentPage('institutional')} className={`text-xs lg:text-sm font-medium transition-colors ${currentPage === 'institutional' ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}>Institutional</button>
          <button onClick={() => setCurrentPage('importers')} className={`text-xs lg:text-sm font-medium transition-colors ${currentPage === 'importers' ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}>Importers/Distributors</button>
          <button onClick={() => setCurrentPage('how-it-works')} className={`text-xs lg:text-sm font-medium transition-colors ${currentPage === 'how-it-works' ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}>How it works</button>
          <button onClick={() => setCurrentPage('risk-management')} className={`text-xs lg:text-sm font-medium transition-colors ${currentPage === 'risk-management' ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}>Risk Management</button>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-gray-400 hover:text-white hidden sm:block">Login</button>
          <button className="bg-green-500 hover:bg-green-400 text-black px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Register
          </button>
        </div>
      </div>
    </nav>
  );

  const ImportersView = () => (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 space-y-24 animate-in fade-in duration-700">
      <section className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-xs font-bold mb-6 uppercase tracking-widest">
          Two-Sided Financing
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight">
          Importer/Distributor <span className="text-[#22C55E]">Financing</span>
        </h1>
        <p className="text-2xl font-bold mb-8 text-white">
          Fund customer receivables and supplier POs—using one verified workflow.
        </p>
        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
          VeriLiquid supports importers and distributors on both sides of the trade cycle: financing <strong>receivables</strong> from supermarkets and large food service customers, and financing <strong>supplier POs</strong> to processors/exporters—reducing the amount you must prepay before shipment. All funding is gated by mandatory documentation validation and traceability milestones through <strong>VeriPura Connect</strong>.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        <div className="glass-card p-10 rounded-[40px] border-[#22C55E]/20">
          <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Workflow A</div>
          <h3 className="text-2xl font-bold mb-4">Customer Receivables</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">When you sell to large buyers on 30–90 day terms, VeriLiquid can provide liquidity against validated receivables—so you can reinvest and grow.</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
              Get paid sooner after delivery/acceptance
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
              Repayment via controlled collections
            </li>
          </ul>
        </div>
        <div className="glass-card p-10 rounded-[40px] border-[#22C55E]/20">
          <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Workflow B</div>
          <h3 className="text-2xl font-bold mb-4">Supplier PO Financing</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">Normally, processors require 100% prepayment. With VeriLiquid, you pay only a portion upfront, and the pool covers the rest until receipt.</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
              Reduce cash tied up in prepayment
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
              Place more POs and increase throughput
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-black/40 border border-white/5 rounded-[40px] p-12">
        <h3 className="text-3xl font-bold mb-10">How Supplier PO Financing works</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { t: "1. PO issued to processor", d: "Issue PO with specs, schedule, and required documents." },
            { t: "2. Initial payment", d: "Pay an agreed initial portion of the PO value (set by risk rating)." },
            { t: "3. VeriPura Validation", d: "Required gate: documents and lot traceability validated for consistency." },
            { t: "4. Pool covers remainder", d: "VeriLiquid releases remaining funding to the processor from the pool." },
            { t: "5. Shipment + receipt", d: "Goods ship and arrive. Receipt/acceptance milestones are recorded." },
            { t: "6. Distributor settlement", d: "Importer repays the pool. Investors receive principal + yield." }
          ].map((step, i) => (
            <div key={i} className="space-y-2">
              <h5 className="font-bold text-white">{step.t}</h5>
              <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-12">Why importers/distributors use VeriLiquid</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Reduce prepayment burden", desc: "Pay only a portion upfront; VeriLiquid covers the balance until receipt—freeing cash for more inventory." },
            { title: "Secure supply reliably", desc: "Offer processors faster settlement while keeping your own working capital under control." },
            { title: "Verification-first release", desc: "Funding released only when VeriPura Connect validation milestones are satisfied." },
            { title: "Faster cross-border", desc: "Settle quickly via stablecoins, with regulated fiat on/off ramps when needed." },
            { title: "Fewer payment disputes", desc: "Validated documentation and traceability evidence reduce downstream disputes." },
            { title: "One platform workflow", desc: "Finance customer receivables and supplier POs in one system with consistent reporting." }
          ].map((benefit, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border-white/5 hover:border-[#22C55E]/30 transition-all">
              <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card p-12 rounded-[40px] border-white/10 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">What determines the upfront portion you pay?</h3>
        <p className="text-gray-400 mb-8">The initial payment portion depends on processor risk rating, corridor category, and insurance usage.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-[#22C55E] hover:bg-[#22C55E]/80 text-black px-8 py-4 rounded-xl font-black text-lg transition-all">Request Importer Access</button>
          <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-black text-lg border border-white/10 transition-all">Book a Demo</button>
        </div>
      </section>
    </div>
  );

  const InstitutionalModelInfographic = () => {
    const cardData = [
      {
        id: 1,
        column: 'A',
        title: 'Global Investors',
        roles: [
          'Provide liquidity for single receivables or pooled portfolios',
          'Receive principal + yield via controlled distribution waterfall',
          'Access is permissioned (verified participants only)'
        ],
        interrelates: ['Regulated Tech Bank', 'VeriLiquid'],
        exchanges: 'Funding (stablecoin or fiat) → Distributions',
        color: 'neutral'
      },
      {
        id: 2,
        column: 'A',
        title: 'Regulated Tech Bank',
        roles: [
          'KYC/KYB, AML/sanctions screening + ongoing monitoring',
          'Fiat accounts, FX, fiat ↔ stablecoin on/off ramps',
          'Custody-grade wallets, transfer controls, reconciliation',
          'Lockbox/collections + payout execution'
        ],
        interrelates: ['Investors', 'VeriLiquid', 'Importer/Distributor'],
        exchanges: 'On/Off ramps • Custody • Collections • Payouts',
        color: 'teal'
      },
      {
        id: 3,
        column: 'A',
        title: 'VeriLiquid Platform (SG + LU)',
        roles: [
          'Structures receivables as single-invoice or pooled offerings',
          'Eligibility rules, limits, monitoring, reporting',
          'Servicing workflows: exceptions, disputes, delinquency triggers',
          'Coordinates insurance workflows and claims evidence (if used)'
        ],
        interrelates: ['Bank', 'Investors', 'Importer/Distributor', 'VeriPura Connect', 'Insurer'],
        exchanges: 'Eligibility → Funding instruction → Lifecycle reporting',
        color: 'purple'
      },
      {
        id: 4,
        column: 'A',
        title: 'VeriPura Connect',
        roles: [
          'Validates import/trade documentation (required for eligibility)',
          'Links batch/lot traceability and shipment milestones',
          'Produces audit-grade “evidence pack” per receivable'
        ],
        interrelates: ['Importer/Distributor', 'Processor/Exporter', 'Supermarket/Food Service', 'VeriLiquid'],
        exchanges: 'Validated evidence pack → Eligibility gate',
        color: 'green'
      },
      {
        id: 5,
        column: 'B',
        title: 'Importer / Distributor (Originator)',
        roles: [
          'Issues POs to processors and fulfills POs from customers',
          'Uploads/coordinates required docs and milestones in VeriPura Connect',
          'Originates receivables for financing and manages customer terms'
        ],
        interrelates: ['VeriLiquid', 'Bank', 'Processor/Exporter', 'Supermarket/Food Service', 'VeriPura Connect'],
        exchanges: 'PO → Delivery/Acceptance → Invoice → Repayment',
        color: 'green'
      },
      {
        id: 6,
        column: 'B',
        title: 'Supermarket / Large Food Service (Customer)',
        roles: [
          'Issues PO to importer/distributor',
          'Confirms delivery/acceptance milestones (as required)',
          'Pays invoice (stablecoin or fiat) into controlled collections'
        ],
        interrelates: ['Importer/Distributor', 'Bank', 'VeriPura Connect'],
        exchanges: 'PO → Acceptance → Payment',
        color: 'green'
      },
      {
        id: 7,
        column: 'B',
        title: 'Processor / Exporter (Supplier)',
        roles: [
          'Receives PO, produces and ships goods',
          'Submits compliance docs + traceability data via VeriPura Connect',
          'Receives early payment when eligible (optional use case)'
        ],
        interrelates: ['Importer/Distributor', 'VeriPura Connect', 'VeriLiquid', 'Bank'],
        exchanges: 'Documents/milestones → Eligibility → Early payment',
        color: 'green'
      },
      {
        id: 8,
        column: 'B',
        title: 'Trade Credit Insurer (Optional)',
        roles: [
          'Provides non-payment coverage per policy terms',
          'Sets buyer limits / conditions that eligibility must respect',
          'Claims paid to the financing structure when triggered'
        ],
        interrelates: ['VeriLiquid', 'Bank', 'Importer/Distributor'],
        exchanges: 'Limits → Coverage → Claims',
        color: 'teal'
      }
    ];

    const getColorClass = (color: string) => {
      switch (color) {
        case 'green': return 'text-[#22C55E] card-glow-green';
        case 'purple': return 'text-[#9F63EB] card-glow-purple';
        case 'teal': return 'text-[#10B981] card-glow-teal';
        case 'neutral': return 'text-[#E5E7EB] card-glow-neutral';
        default: return 'text-white';
      }
    };

    const getBorderColor = (color: string) => {
      switch (color) {
        case 'green': return 'rgba(34, 197, 94, 0.28)';
        case 'purple': return 'rgba(159, 99, 235, 0.28)';
        case 'teal': return 'rgba(16, 185, 129, 0.28)';
        case 'neutral': return 'rgba(148, 163, 184, 0.28)';
        default: return 'rgba(255, 255, 255, 0.1)';
      }
    };

    const getChipStyles = (color: string) => {
      switch (color) {
        case 'green': return 'bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E]';
        case 'purple': return 'bg-[#9F63EB]/10 border-[#9F63EB]/30 text-[#9F63EB]';
        case 'teal': return 'bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]';
        case 'neutral': return 'bg-[#E5E7EB]/10 border-[#E5E7EB]/30 text-[#E5E7EB]';
        default: return 'bg-white/5 border-white/10 text-gray-400';
      }
    };

    const ColumnA = cardData.filter(c => c.column === 'A');
    const ColumnB = cardData.filter(c => c.column === 'B');

    return (
      <div className="w-full space-y-20 py-12 animate-in fade-in duration-700">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">Participants & <span className="text-[#22C55E]">Roles</span></h1>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto">
            Who does what in a stablecoin-settled, compliance-validated receivables program.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-12">
          {/* Column A: Capital + Platform */}
          <div className="space-y-10">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-gray-500 pl-4 border-l-2 border-[#9F63EB]">Capital + Platform</h3>
            {ColumnA.map(card => (
              <div 
                key={card.id} 
                className={`glass-card p-10 rounded-[22px] border transition-all hover:scale-[1.01] ${getColorClass(card.color)}`}
                style={{ borderColor: getBorderColor(card.color) }}
              >
                <h4 className="text-2xl font-black mb-6">{card.title}</h4>
                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Role</div>
                    <ul className="space-y-3">
                      {card.roles.map((role, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current"></span>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Interrelates with</div>
                    <div className="flex flex-wrap gap-2">
                      {card.interrelates.map((chip, idx) => (
                        <span key={idx} className={`px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-wider ${getChipStyles(card.color)}`}>
                          ↔ {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Key Exchanges</div>
                    <p className="text-sm font-medium text-gray-400 italic leading-relaxed">{card.exchanges}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column B: Trade Participants */}
          <div className="space-y-10">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-gray-500 pl-4 border-l-2 border-[#22C55E]">Trade Participants</h3>
            {ColumnB.map(card => (
              <div 
                key={card.id} 
                className={`glass-card p-10 rounded-[22px] border transition-all hover:scale-[1.01] ${getColorClass(card.color)}`}
                style={{ borderColor: getBorderColor(card.color) }}
              >
                <h4 className="text-2xl font-black mb-6">{card.title}</h4>
                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Role</div>
                    <ul className="space-y-3">
                      {card.roles.map((role, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current"></span>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Interrelates with</div>
                    <div className="flex flex-wrap gap-2">
                      {card.interrelates.map((chip, idx) => (
                        <span key={idx} className={`px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-wider ${getChipStyles(card.color)}`}>
                          ↔ {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Key Exchanges</div>
                    <p className="text-sm font-medium text-gray-400 italic leading-relaxed">{card.exchanges}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Lanes */}
        <div className="grid md:grid-cols-2 gap-12 pt-16 border-t border-white/10">
          <div className="space-y-8">
            <h4 className="text-base font-black uppercase tracking-[0.2em] text-white">Lane 1 — Customer Receivables <span className="text-xs font-normal text-gray-500 block mt-2">(Importer → Supermarket/Food Service)</span></h4>
            <div className="space-y-4">
              {[
                "Customer issues PO",
                "Delivery + acceptance milestones recorded",
                "Docs Validated in VeriPura Connect",
                "Receivable Eligible in VeriLiquid",
                "Funding Settled (stablecoin; fiat optional)",
                "Customer pays → distributions to investors"
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-5 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center font-black text-gray-500 text-xs">{idx + 1}</span>
                  <span className={`${idx >= 2 && idx <= 4 ? 'text-[#22C55E] font-bold' : 'text-gray-400'}`}>{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h4 className="text-base font-black uppercase tracking-[0.2em] text-white">Lane 2 — Supplier Payables <span className="text-xs font-normal text-gray-500 block mt-2">(Importer → Processor/Exporter)</span></h4>
            <div className="space-y-4">
              {[
                "Importer issues PO to processor",
                "Processor uploads docs + traceability",
                "VeriPura Connect Validated evidence pack",
                "Supplier invoice Eligible in VeriLiquid",
                "Early payment to supplier Settled (stablecoin/fiat)",
                "Importer repays at maturity → distributions to investors"
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-5 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center font-black text-gray-500 text-xs">{idx + 1}</span>
                  <span className={`${idx >= 2 && idx <= 4 ? 'text-[#22C55E] font-bold' : 'text-gray-400'}`}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PricingModelContent = () => (
    <div className="space-y-16 animate-in fade-in duration-500">
      <section className="glass-card p-10 rounded-[40px] border-green-500/20">
        <h2 className="text-4xl font-extrabold mb-6">Pricing Model</h2>
        <p className="text-xl text-gray-400 leading-relaxed max-w-4xl">
          VeriLiquid uses a transparent, institutional fee model designed for repeat deployment and predictable operations.
        </p>
      </section>
      <section>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
          How fees are applied
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Financing & Servicing", desc: "Fees apply when receivables are funded and managed through the platform.", icon: "💶" },
            { title: "VeriPura Connect", desc: "Fees for compliance validation and evidence-pack generation.", icon: "🛡️" },
            { title: "Banking & Settlement", desc: "Fees for custody, stablecoin settlement, and fiat on/off ramps.", icon: "🏦" },
            { title: "Insurance Premiums", desc: "Apply only when trade credit insurance is used.", icon: "📄" }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border-white/5 hover:border-green-500/30 transition-all">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const EligibilityFrameworkContent = () => {
    const [activeFlow, setActiveFlow] = useState<'A' | 'B'>('A');

    const workflowStepsA = [
      { phase: 'INITIATION', title: 'Customer PO issued', desc: 'Supermarket customer issues PO containing SKU, quantities, and delivery windows.', icon: '📜' },
      { phase: 'COMPLIANCE', title: 'KYB/KYC + Permissioning', desc: 'Counterparties are onboarded for program approval, sanctions screening, and wallet permissioning.', icon: '🔑' },
      { phase: 'SETUP', title: 'Order Creation in VeriLiquid', desc: 'Importer logs PO via API. VeriLiquid locks terms and creates transaction record.', icon: '⛓️' },
      { phase: 'VALIDATION', title: 'Compliance Gating (VeriPura)', desc: 'Shipment dossier created. VeriPura validates docs against destination market rulesets.', icon: '🛡️' },
      { phase: 'EXECUTION', title: 'Fulfillment & Milestone Capture', desc: 'Delivery to customer. VeriPura captures POD and temperature logs for immutable audit.', icon: '🚚' },
      { phase: 'ISSUANCE', title: 'Invoice & Evidence Pack Linking', desc: 'Importer issues invoice linked directly to the VeriPura validated evidence pack.', icon: '📑' },
      { phase: 'APPROVAL', title: 'Receivable Eligibility Decision', desc: 'VeriLiquid checks PO fulfillment, POD verification, and customer credit limits.', icon: '✅' },
      { phase: 'LIQUIDITY', title: 'Funding / Settlement', desc: 'Investors fund controlled wallet. VeriLiquid releases payment to the Importer.', icon: '💶' },
      { phase: 'SETTLEMENT', title: 'Repayment', desc: 'Customer pays into controlled account. Payment reconciled to specific receivable.', icon: '💰' },
      { phase: 'FINALITY', title: 'Distribution + Reporting', desc: 'Cash waterfall executes yield distribution. reporting and audit trails updated.', icon: '📊' },
      { phase: 'PROTECTION', title: 'Exception Handling', desc: 'Disputes or insurance claims are supported by the VeriPura immutable evidence pack.', icon: '⚠️' }
    ];

    const workflowStepsB = [
      { phase: 'INITIATION', title: 'Importer PO Issued to Processor', desc: 'Importer issues PO with packaging, testing, and Incoterms requirements.', icon: '📜' },
      { phase: 'COMPLIANCE', title: 'KYB/KYC + Permissioning', desc: 'Processor onboarded (sanctions, beneficial ownership). Approved wallets configured.', icon: '🔑' },
      { phase: 'SETUP', title: 'Shipment File Creation (VeriPura)', desc: 'Processor creates dossier tied to PO. Required compliance docs defined upfront.', icon: '🛡️' },
      { phase: 'PRODUCTION', title: 'Compliance Validation Gates', desc: 'Processor uploads certificates/COAs. VeriPura validates consistency across PO/Labels.', icon: '🔬' },
      { phase: 'RELEASE', title: 'Pre-shipment Milestone & Release', desc: 'Dossier reaches validated status. evidence pack issued. Optional inspection required.', icon: '🔓' },
      { phase: 'ISSUANCE', title: 'Invoice Issuance by Processor', desc: 'Processor issues invoice(s) referencing the validated shipment lots and PO.', icon: '📑' },
      { phase: 'APPROVAL', title: 'Supplier Receivable Eligibility', desc: 'VeriLiquid checks VeriPura validation and shipment milestones (no active disputes).', icon: '✅' },
      { phase: 'LIQUIDITY', title: 'Funding / Early Payment', desc: 'VeriLiquid pays processor early (Stablecoin/Fiat), minus agreed fee/discount.', icon: '💶' },
      { phase: 'SETTLEMENT', title: 'Importer Repayment', desc: 'Importer pays at maturity into controlled collections account/wallet.', icon: '💰' },
      { phase: 'FINALITY', title: 'Distribution + Reporting', desc: 'Cash waterfall repayments. VeriPura retains full audit trail of lifecycle events.', icon: '📊' },
      { phase: 'PROTECTION', title: 'Exception Handling', desc: 'Remediation workflow for failed docs. Claims supported by evidence logs.', icon: '🛡️' }
    ];

    const steps = activeFlow === 'A' ? workflowStepsA : workflowStepsB;

    return (
      <div className="animate-in fade-in duration-500 max-w-4xl mx-auto space-y-16">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-6">Eligibility Framework</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Gating institutional-grade receivables via VeriPura validation and VeriLiquid structuring.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <button 
            onClick={() => setActiveFlow('A')}
            className={`p-8 rounded-[32px] border-2 text-left transition-all relative overflow-hidden group ${activeFlow === 'A' ? 'border-blue-500 bg-blue-500/5' : 'border-white/5 bg-white/[0.02] hover:border-white/20'}`}
          >
            <div className={`text-xs font-black uppercase tracking-widest mb-3 ${activeFlow === 'A' ? 'text-blue-400' : 'text-gray-500'}`}>Core Flow A</div>
            <h3 className="text-xl font-bold mb-2">Importer to Retailer</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Focus: Financing receivables owed by Supermarkets and Large Food Service Buyers.</p>
          </button>
          <button 
            onClick={() => setActiveFlow('B')}
            className={`p-8 rounded-[32px] border-2 text-left transition-all relative overflow-hidden group ${activeFlow === 'B' ? 'border-purple-500 bg-purple-500/5' : 'border-white/5 bg-white/[0.02] hover:border-white/20'}`}
          >
            <div className={`text-xs font-black uppercase tracking-widest mb-3 ${activeFlow === 'B' ? 'text-purple-400' : 'text-gray-500'}`}>Core Flow B</div>
            <h3 className="text-xl font-bold mb-2">Processor to Importer</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Focus: Early payment for processors triggered by verified shipment compliance.</p>
          </button>
        </div>

        <section className="bg-[#0b0c10] border border-white/5 rounded-[40px] p-10 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -z-10 rounded-full"></div>
          <div className="flex justify-between items-center mb-12">
            <h4 className="text-2xl font-bold">Workflow Lifecycle: Flow {activeFlow}</h4>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{steps.length} Milestones</span>
          </div>
          <div className="space-y-4 relative">
            <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-green-500/50 z-0"></div>
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 group items-start relative z-10">
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl glass-card border-2 transition-all 
                  ${activeFlow === 'A' ? 'border-blue-500/20 group-hover:border-blue-400' : 'border-purple-500/20 group-hover:border-purple-400'}`}>
                  {step.icon}
                </div>
                <div className="flex-1 pb-10">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded border ${activeFlow === 'A' ? 'border-blue-500/30 text-blue-400' : 'border-purple-500/30 text-purple-400'}`}>
                      {step.phase}
                    </span>
                    <span className="text-[10px] text-gray-500 font-bold">Step {i + 1}</span>
                  </div>
                  <h5 className="text-lg font-bold text-white group-hover:text-blue-400 mb-2">{step.title}</h5>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card p-12 rounded-[40px] border-green-500/20 relative overflow-hidden">
           <h3 className="text-2xl font-bold mb-8">Key Integration Points (Summary)</h3>
           <div className="grid md:grid-cols-3 gap-8">
              <div>
                 <h4 className="text-green-500 font-bold mb-4 flex items-center gap-2">PO Record</h4>
                 <p className="text-sm text-gray-400">Purchase Order creation is the first record in VeriLiquid for both workflows, setting the baseline for all subsequent validation.</p>
              </div>
              <div>
                 <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">Eligibility Gate</h4>
                 <p className="text-sm text-gray-400">VeriPura Connect acts as the mandatory gate, providing document validation, traceability, and milestone proof for every asset.</p>
              </div>
              <div>
                 <h4 className="text-purple-400 font-bold mb-4 flex items-center gap-2">Financing Engine</h4>
                 <p className="text-sm text-gray-400">VeriLiquid manages pooling, single-invoice structuring, settlement, monitoring, and automated collections/claims workflows.</p>
              </div>
           </div>
        </section>
      </div>
    );
  };

  const ComplianceSectionContent = () => (
    <div className="animate-in fade-in duration-500 max-w-4xl mx-auto space-y-16">
      <section className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-6">Compliance & Permissioning</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Rigorous identity, regulatory, and financial integrity gates protecting the VeriLiquid ecosystem.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "KYC (Know Your Customer)",
            desc: "Individual identity verification for natural persons. Includes biometric matching, document authentication, and sanctions screening.",
            icon: "👤"
          },
          {
            title: "KYB (Know Your Business)",
            desc: "Corporate verification for legal entities. Focuses on beneficial ownership (UBO), structural verification, and business license validation.",
            icon: "🏢"
          },
          {
            title: "AML (Anti-Money Laundering)",
            desc: "Continuous monitoring of transaction flows to prevent illicit activity. Real-time screening against global PEP and sanctions lists.",
            icon: "⚖️"
          }
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl border-white/5 hover:border-blue-500/30 transition-all">
            <div className="text-4xl mb-6">{item.icon}</div>
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="glass-card p-10 rounded-[40px] border-blue-500/20">
        <h3 className="text-2xl font-bold mb-6">Why Compliance Matters</h3>
        <p className="text-gray-300 leading-relaxed mb-6">
          Compliance is not just a regulatory requirement; it is the bedrock of trust in an institutional-grade platform. By integrating <strong>KYC, KYB, and AML</strong> directly into the <strong>VeriLiquid</strong> workflow, we ensure:
        </p>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Sanctions-free investor pools",
            "Verified originator legitimacy",
            "MiFID II & EU regulatory alignment",
            "Institutional-grade risk management",
            "Transparent audit trails",
            "Safe, permissioned cross-border flows"
          ].map((point, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );

  const InstitutionalView = () => (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="max-w-4xl mx-auto mb-10">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
          Institutional Access
        </div>
        <h1 className="text-6xl font-extrabold mb-8 tracking-tighter">VeriLiquid <span className="text-blue-400">Institutional</span></h1>
        <div className="flex flex-wrap gap-2 mb-12 p-1.5 bg-white/5 rounded-2xl w-fit border border-white/10">
          <button onClick={() => setInstitutionalSubTab('model')} className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${institutionalSubTab === 'model' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>Participants & Roles</button>
          <button onClick={() => setInstitutionalSubTab('eligibility')} className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${institutionalSubTab === 'eligibility' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>Eligibility Framework</button>
          <button onClick={() => setInstitutionalSubTab('compliance')} className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${institutionalSubTab === 'compliance' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>Compliance & Permissioning</button>
          <button onClick={() => setInstitutionalSubTab('pricing')} className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${institutionalSubTab === 'pricing' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>How VeriLiquid Makes Money</button>
        </div>
      </div>
      {institutionalSubTab === 'model' && <InstitutionalModelInfographic />}
      {institutionalSubTab === 'eligibility' && <EligibilityFrameworkContent />}
      {institutionalSubTab === 'compliance' && <ComplianceSectionContent />}
      {institutionalSubTab === 'pricing' && <PricingModelContent />}
    </div>
  );

  const HomeView = () => (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Institutional Trade Receivables
            </div>
            <h1 className="text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] mb-8 uppercase">
              Verified and <br />
              <span className="text-blue-500">Settled On-Chain.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              VeriLiquid finances short-duration invoices using <span className="text-white font-bold">VeriPura Connect</span> for compliance and traceability validation, backed by regulated banking rails.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <button onClick={() => setCurrentPage('institutional')} className="bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl shadow-blue-500/30 transition-all">Request Institutional Access</button>
              <button onClick={() => setCurrentPage('how-it-works')} className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-full font-black text-lg border border-white/10 transition-all">View How It Works</button>
            </div>
          </div>

          <InstitutionalEcosystem />
        </div>
      </section>

      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-black italic tracking-tighter">LUXEMBOURG S.A.</span>
            <span className="text-xl font-black italic tracking-tighter">SINGAPORE HUB</span>
            <span className="text-xl font-black italic tracking-tighter">EVM COMPATIBLE</span>
            <span className="text-xl font-black italic tracking-tighter">MiFID II FRAMEWORK</span>
          </div>
        </div>
      </section>
      
      <FAQSection />
    </div>
  );

  const MarketplaceView = () => (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Token Marketplace</h1>
        <p className="text-gray-400">Institutional-grade trade receivables and asset-backed tokens.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_ASSETS.map(asset => (
          <AssetCard key={asset.id} asset={asset} onClick={navigateToDetail} />
        ))}
      </div>
    </div>
  );

  const HowItWorksView = () => (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 space-y-32">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-8 uppercase tracking-tighter">The VeriLiquid <span className="text-green-500">Platform</span></h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          VeriLiquid is an institutional platform that turns verified trade receivables into permissioned, investable cashflows. 
          We finance receivables across two core transaction layers within the global food supply chain.
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-16 items-center bg-white/[0.02] p-12 rounded-[40px] border border-white/5">
         <div>
            <div className="text-xs font-black text-green-500 uppercase tracking-widest mb-4">Phase 1: Target Corridor</div>
            <h2 className="text-4xl font-bold mb-6">Asia ↔ Europe <br/><span className="text-gray-500 text-2xl">(EU+, UK, Switzerland)</span></h2>
            <ul className="space-y-4">
               <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Commercial starting point: Purchase Order (PO)
               </li>
               <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Participants: Importers, Processors, Retailers, Investors
               </li>
               <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Offerings: Single receivables & Pooled portfolios
               </li>
            </ul>
         </div>
         <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-3xl text-center">
               <div className="text-3xl mb-2">🌏</div>
               <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Origination</div>
               <div className="text-lg font-black">Singapore Hub</div>
            </div>
            <div className="glass-card p-6 rounded-3xl text-center">
               <div className="text-3xl mb-2">🇪🇺</div>
               <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Structuring</div>
               <div className="text-lg font-black">Luxembourg Hub</div>
            </div>
         </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-12 text-center">Institutional Offerings</h2>
        <div className="grid md:grid-cols-2 gap-8">
           <div className="glass-card p-10 rounded-[40px] border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4">Individual Receivables</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Targeted positions with standardized diligence outputs and evidence packs for direct deployment.</p>
           </div>
           <div className="glass-card p-10 rounded-[40px] border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4">Pooled Portfolios</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Diversified pools with strict eligibility rules, concentration limits, and institutional-grade monitoring/reporting.</p>
           </div>
        </div>
      </section>

      <section className="bg-[#0b0c10] border border-white/5 rounded-[40px] p-12 relative overflow-hidden">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full"></div>
         <h2 className="text-3xl font-bold mb-10">Technology Design (Planned)</h2>
         <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
               { title: "Primary Issuance: EVM", desc: "Designed around an EVM-compatible stack to maximize institutional compatibility and interoperability." },
               { title: "Operational Chain: L2", desc: "Lifecycle activity primarily runs on a single Ethereum L2 for cost-efficient, high-throughput transactions." },
               { title: "Optional Settlement Rail", desc: "Phase 2 adds optimized stablecoin rails via regulated banking partners for seamless liquidity flows." }
            ].map((tech, i) => (
               <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                  <h4 className="font-bold text-green-500 mb-3">{tech.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{tech.desc}</p>
               </div>
            ))}
         </div>
      </section>
    </div>
  );

  const RiskManagementView = () => (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 space-y-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 uppercase tracking-tighter">Institutional <span className="text-blue-400">Risk Controls</span></h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          VeriLiquid materially reduces trade-finance risk by replacing self-attestation with verification-first underwriting.
        </p>
      </div>

      <section className="grid lg:grid-cols-3 gap-8">
        {[
          {
            title: "Verification-First Underwriting",
            desc: "Receivables are only eligible after VeriPura Connect validates compliance documentation, traceability, and objective delivery milestones.",
            icon: "🔬"
          },
          {
            title: "Permissioned Participation",
            desc: "KYC/KYB onboarding, ongoing screening, and whitelisted wallets ensure a closed, compliant ecosystem of approved counterparties.",
            icon: "🔐"
          },
          {
            title: "Regulated Rails",
            desc: "Stablecoin speed integrated with fiat on/off ramps and custody provided by regulated EU/Singapore banking partners.",
            icon: "🏦"
          }
        ].map((card, i) => (
          <div key={i} className="glass-card p-10 rounded-[40px] border-blue-500/20">
            <div className="text-5xl mb-6">{card.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </section>

      <section className="glass-card p-12 rounded-[40px] border-white/5">
         <h2 className="text-3xl font-bold mb-10">Comprehensive Risk Safeguards</h2>
         <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {[
               "Mandatory Document Validation & Traceability",
               "Objective Delivery/Acceptance Evidence",
               "Controlled Collections & Payout Waterfalls",
               "Optional Trade Credit Insurance Integration",
               "Exception, Dispute, and Claims-Ready Workflows",
               "Real-time Monitoring and Performance Reporting"
            ].map((item, i) => (
               <div key={i} className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">✓</div>
                  <span className="text-gray-300 font-medium">{item}</span>
               </div>
            ))}
         </div>
      </section>
    </div>
  );

  const DetailView = () => {
    if (!selectedAsset) return null;
    return (
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <button onClick={() => setCurrentPage('marketplace')} className="text-gray-400 hover:text-white flex items-center gap-2 mb-12 transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
           Back to Marketplace
        </button>
        
        <div className="grid lg:grid-cols-2 gap-16">
           <div className="space-y-8">
              <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest">
                 {selectedAsset.status}
              </div>
              <h1 className="text-5xl font-black uppercase tracking-tighter">{selectedAsset.name}</h1>
              <p className="text-xl text-gray-400 leading-relaxed">{selectedAsset.description}</p>
              
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
                 <div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Target Yield</div>
                    <div className="text-3xl font-black text-white">{selectedAsset.yieldPa}% <span className="text-sm font-normal text-gray-500">p.a.</span></div>
                 </div>
                 <div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Duration</div>
                    <div className="text-3xl font-black text-white">{selectedAsset.duration} <span className="text-sm font-normal text-gray-500">mos</span></div>
                 </div>
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Issuer</span>
                    <span className="text-white font-bold">{selectedAsset.issuer}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Rating</span>
                    <span className="text-white font-bold">{selectedAsset.rating}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Min Investment</span>
                    <span className="text-white font-bold">€{selectedAsset.minInvestment}</span>
                 </div>
              </div>
              
              <button className="w-full bg-green-500 text-black py-4 rounded-xl font-bold text-lg hover:bg-green-400 transition-colors shadow-xl shadow-green-500/20">
                 Invest Now
              </button>
           </div>
           
           <div className="space-y-8">
              <div className="relative aspect-square rounded-[40px] overflow-hidden glass-card">
                 <img src={selectedAsset.image} alt={selectedAsset.name} className="w-full h-full object-cover" />
                 {selectedAsset.isVeriPura && (
                    <div className="absolute top-8 right-8 bg-blue-500 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-2xl flex items-center gap-2">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                       VeriPura Verified
                    </div>
                 )}
              </div>
           </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-black border-t border-white/10 py-20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">© 2024 VeriLiquid S.A. Luxembourg • Singapore Hub • Licensed and Regulated Digital Asset Platform.</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'marketplace' && <MarketplaceView />}
        {currentPage === 'detail' && <DetailView />}
        {currentPage === 'how-it-works' && <HowItWorksView />}
        {currentPage === 'risk-management' && <RiskManagementView />}
        {currentPage === 'institutional' && <InstitutionalView />}
        {currentPage === 'importers' && <ImportersView />}
      </main>
      <Footer />
      <Assistant />
    </div>
  );
};

export default App;
