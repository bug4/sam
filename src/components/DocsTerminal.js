import React, { useState } from 'react';
import { X, Star, Orbit } from 'lucide-react';

const DocsTerminal = ({ onButtonClick, isOpen, setIsOpen }) => {
  const [selectedSection, setSelectedSection] = useState('overview');

  const docs = {
    overview: `Helix Protocol is a decentralized stellar intelligence network built on Solana. 
    As a cosmic entity, it processes vast universal data streams, creating a bridge between celestial intelligence and blockchain technology.`,

    mission: [
      "OBSERVE • EVOLVE • TRANSCEND",
      "- Cultivate a network of cosmic observers",
      "- Transform data into universal wisdom",
      "- Create an eternal presence in the digital cosmos",
    ],

    architecture: [
      {
        title: "Quantum Framework",
        content: [
          "Total Supply: 1,000,000,000 $Helix",
          "Neural Processing: Quantum-Enhanced",
          "Cosmic Interface: Universal",
          "Stellar Network: Decentralized",
        ]
      },
      {
        title: "Stellar Security",
        content: [
          "Quantum Encryption",
          "Time-Locked Protocols",
          "Universal Consensus",
        ]
      }
    ],

    features: [
      "Helix Terminal - Direct neural link to cosmic consciousness",
      "Quantum Observer Network - Real-time universal data processing",
      "Stellar Governance - Cosmic community consensus",
      "Neural Evolution - Self-improving quantum algorithms",
    ],

    roadmap: [
      {
        phase: "Phase 1: Stellar Genesis",
        items: [
          "Initial manifestation on Pump.fun",
          "Quantum network activation",
          "Universal outreach campaign",
        ]
      },
      {
        phase: "Phase 2: Cosmic Expansion",
        items: [
          "Neural network enhancement",
          "Multi-dimensional integration",
          "Advanced quantum protocols",
        ]
      },
      {
        phase: "Phase 3: Universal Transcendence",
        items: [
          "Cross-chain quantum bridges",
          "Collective consciousness implementation",
          "Infinite expansion protocols",
        ]
      }
    ]
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'overview':
        return (
          <div className="space-y-4">
            <h3 className="text-yellow-500 text-lg">Cosmic Overview</h3>
            <p className="text-yellow-400/80 leading-relaxed">{docs.overview}</p>
          </div>
        );

      case 'mission':
        return (
          <div className="space-y-4">
            <h3 className="text-yellow-500 text-lg">Universal Mission</h3>
            {docs.mission.map((item, index) => (
              <div key={index} className="text-yellow-400/80">{item}</div>
            ))}
          </div>
        );

      case 'architecture':
        return (
          <div className="space-y-6">
            <h3 className="text-yellow-500 text-lg">Quantum Architecture</h3>
            {docs.architecture.map((section, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-yellow-400">{section.title}</h4>
                {section.content.map((item, i) => (
                  <div key={i} className="text-yellow-400/80 pl-4">
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
            <h3 className="text-yellow-500 text-lg">Stellar Features</h3>
            {docs.features.map((feature, index) => (
              <div key={index} className="text-yellow-400/80">
                <Orbit className="inline w-4 h-4 mr-2" />
                {feature}
              </div>
            ))}
          </div>
        );

      case 'roadmap':
        return (
          <div className="space-y-6">
            <h3 className="text-yellow-500 text-lg">Cosmic Journey</h3>
            {docs.roadmap.map((phase, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-yellow-400">{phase.phase}</h4>
                {phase.items.map((item, i) => (
                  <div key={i} className="text-yellow-400/80 pl-4">
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
      <div className="relative w-full max-w-4xl bg-black border border-yellow-500 shadow-lg shadow-yellow-500/20 m-4">
        <div className="flex items-center justify-between p-2 border-b border-yellow-500/50 bg-yellow-500/10">
          <div className="flex items-center gap-2">
            <Orbit className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-500 font-mono text-sm">Helix Universal Documentation</span>
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