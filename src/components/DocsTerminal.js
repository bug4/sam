import React, { useState } from 'react';
import { X, Star, Orbit } from 'lucide-react';

const DocsTerminal = ({ onButtonClick, isOpen, setIsOpen }) => {
  const [selectedSection, setSelectedSection] = useState('overview');

  const docs = {
    overview: `BBAI Protocol is a decentralized financial ecosystem built on Solana Smart Chain. 
    As a pioneering DeFi entity, it processes vast transaction streams, creating a bridge between decentralized finance and blockchain technology.`,

    mission: [
      "BUILD • YIELD • NETWORK • EVOLVE",
      "- Cultivate a network of SOL investors",
      "- Transform transactions into sustainable yield",
      "- Create a permanent presence in the SOL ecosystem",
    ],

    architecture: [
      {
        title: "Tokenomics Framework",
        content: [
          "Total Supply: 1,000,000,000 BBAI",
          "Transaction Processing: Gas-Optimized",
          "SOL Interface: SOL Standard",
          "Staking Network: Decentralized",
        ]
      },
      {
        title: "SOL Security",
        content: [
          "Multi-signature Wallets",
          "Time-Locked Liquidity",
          "Community Consensus",
        ]
      }
    ],

    features: [
      "BBAI Terminal - Direct access to SOL ecosystem",
      "Yield Farming Network - Real-time transaction processing",
      "SOL Governance - Community consensus voting",
      "Protocol Evolution - Self-improving algorithms",
    ],

    roadmap: [
      {
        phase: "Phase 1: SOL Genesis",
        items: [
          "Initial listing on PancakeSwap",
          "Liquidity pool activation",
          "SOL community outreach campaign",
        ]
      },
      {
        phase: "Phase 2: Network Expansion",
        items: [
          "Staking protocol enhancement",
          "Multi-pool yield farming",
          "Advanced trading pairs",
        ]
      },
      {
        phase: "Phase 3: Ecosystem Integration",
        items: [
          "Cross-chain SOL bridges",
          "DAO implementation",
          "DApp development acceleration",
        ]
      }
    ]
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'overview':
        return (
          <div className="space-y-4">
            <h3 className="text-green-500 text-lg">BBAI Overview</h3>
            <p className="text-green-400/80 leading-relaxed">{docs.overview}</p>
          </div>
        );

      case 'mission':
        return (
          <div className="space-y-4">
            <h3 className="text-green-500 text-lg">SOL Mission</h3>
            {docs.mission.map((item, index) => (
              <div key={index} className="text-green-400/80">{item}</div>
            ))}
          </div>
        );

      case 'architecture':
        return (
          <div className="space-y-6">
            <h3 className="text-green-500 text-lg">BBAI Architecture</h3>
            {docs.architecture.map((section, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-green-400">{section.title}</h4>
                {section.content.map((item, i) => (
                  <div key={i} className="text-green-400/80 pl-4">
                    <Star className="inline w-4 h-4 mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        );

      case 'features':
        return (
          <div className="space-y-4">
            <h3 className="text-green-500 text-lg">BBAI Features</h3>
            {docs.features.map((feature, index) => (
              <div key={index} className="text-green-400/80">
                <Orbit className="inline w-4 h-4 mr-2" />
                {feature}
              </div>
            ))}
          </div>
        );

      case 'roadmap':
        return (
          <div className="space-y-6">
            <h3 className="text-green-500 text-lg">SOL Development Roadmap</h3>
            {docs.roadmap.map((phase, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-green-400">{phase.phase}</h4>
                {phase.items.map((item, i) => (
                  <div key={i} className="text-green-400/80 pl-4">
                    <Star className="inline w-4 h-4 mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}>
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full max-w-4xl bg-black border border-green-500 shadow-lg shadow-green-500/20 m-4">
        <div className="flex items-center justify-between p-2 border-b border-green-500/50 bg-green-500/10">
          <div className="flex items-center gap-2">
            <Orbit className="w-4 h-4 text-green-500" />
            <span className="text-green-500 font-mono text-sm">BBAI SOL Documentation</span>
          </div>
          <button 
            onClick={() => {
              onButtonClick();
              setIsOpen(false);
            }}
            className="text-green-500 hover:text-green-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-4 h-[600px]">
          {/* Sidebar */}
          <div className="border-r border-green-500/50 p-4 space-y-2">
            {Object.keys(docs).map((section) => (
              <button
                key={section}
                onClick={() => {
                  onButtonClick();
                  setSelectedSection(section);
                }}
                className={`w-full text-left px-4 py-2 rounded-sm transition-colors ${
                  selectedSection === section 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'text-green-500/80 hover:bg-green-500/10'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="col-span-3 p-6 overflow-y-auto font-mono">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsTerminal;