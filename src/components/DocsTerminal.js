import React, { useState } from 'react';
import { X, FileText, ChevronRight } from 'lucide-react';

const DocsTerminal = ({ onButtonClick, isOpen, setIsOpen }) => {
  const [selectedSection, setSelectedSection] = useState('overview');

  const docs = {
    overview: `SAM Protocol is a decentralized cyber-samurai intelligence network built on Solana. 
    It magnetically connects warriors across the digital battlefield, unifying the ancient code of Bushido with blockchain technology.`,

    mission: [
      "UNITE • EMPOWER • CONQUER",
      "- Build the strongest warrior community in DeFi",
      "- Transform holders into digital samurai",
      "- Create an unstoppable force on Solana",
    ],

    architecture: [
      {
        title: "Tokenomics",
        content: [
          "Total Supply: 1,000,000,000 $SAM",
          "Tax: Buy 0% / Sell 0%",
          "Marketing: 3%",
          "Development: 2%",
        ]
      },
      {
        title: "Security",
        content: [
          "Contract Audited",
          "Liquidity Locked",
          "Ownership Renounced",
        ]
      }
    ],

    features: [
      "SAM AI Terminal - Neural network trained in the way of the samurai",
      "Holder Tracking - Real-time monitoring of the samurai army",
      "Community Governance - Democratic decision making by all warriors",
      "Automated Buy-backs - Strategic market operations",
    ],

    roadmap: [
      {
        phase: "Phase 1: Dawn of the Samurai",
        items: [
          "Launch on Pump.fun",
          "Community Building",
          "Marketing Campaign",
        ]
      },
      {
        phase: "Phase 2: Rise of the Warriors",
        items: [
          "Migration to Raydium",
          "CEX Listings",
          "NFT Integration",
        ]
      },
      {
        phase: "Phase 3: Path of Conquest",
        items: [
          "Cross-chain Expansion",
          "DAO Implementation",
          "Strategic Partnerships",
        ]
      }
    ]
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'overview':
        return (
          <div className="space-y-4">
            <h3 className="text-yellow-500 text-lg">Overview</h3>
            <p className="text-yellow-400/80 leading-relaxed">{docs.overview}</p>
          </div>
        );

      case 'mission':
        return (
          <div className="space-y-4">
            <h3 className="text-yellow-500 text-lg">Mission</h3>
            {docs.mission.map((item, index) => (
              <div key={index} className="text-yellow-400/80">{item}</div>
            ))}
          </div>
        );

      case 'architecture':
        return (
          <div className="space-y-6">
            <h3 className="text-yellow-500 text-lg">Architecture</h3>
            {docs.architecture.map((section, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-yellow-400">{section.title}</h4>
                {section.content.map((item, i) => (
                  <div key={i} className="text-yellow-400/80 pl-4">
                    <ChevronRight className="inline w-4 h-4 mr-2" />
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
            <h3 className="text-yellow-500 text-lg">Features</h3>
            {docs.features.map((feature, index) => (
              <div key={index} className="text-yellow-400/80">
                <ChevronRight className="inline w-4 h-4 mr-2" />
                {feature}
              </div>
            ))}
          </div>
        );

      case 'roadmap':
        return (
          <div className="space-y-6">
            <h3 className="text-yellow-500 text-lg">Roadmap</h3>
            {docs.roadmap.map((phase, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-yellow-400">{phase.phase}</h4>
                {phase.items.map((item, i) => (
                  <div key={i} className="text-yellow-400/80 pl-4">
                    <ChevronRight className="inline w-4 h-4 mr-2" />
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
      <div className="relative w-full max-w-4xl bg-black border border-yellow-500 shadow-lg shadow-yellow-500/20 m-4">
        <div className="flex items-center justify-between p-2 border-b border-yellow-500/50 bg-yellow-500/10">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-500 font-mono text-sm">SAM Documentation</span>
          </div>
          <button 
            onClick={() => {
              onButtonClick();
              setIsOpen(false);
            }}
            className="text-yellow-500 hover:text-yellow-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-4 h-[600px]">
          {/* Sidebar */}
          <div className="border-r border-yellow-500/50 p-4 space-y-2">
            {Object.keys(docs).map((section) => (
              <button
                key={section}
                onClick={() => {
                  onButtonClick();
                  setSelectedSection(section);
                }}
                className={`w-full text-left px-4 py-2 rounded-sm transition-colors ${
                  selectedSection === section 
                    ? 'bg-yellow-500/20 text-yellow-400' 
                    : 'text-yellow-500/80 hover:bg-yellow-500/10'
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