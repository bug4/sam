import React, { useState } from 'react';
import { X, Bot, Send, AlertCircle } from 'lucide-react';

const AgentCreator = ({ onButtonClick, isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    agentName: '',
    purpose: '',
    specialization: '',
    architecture: '',
    ethicalStance: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onButtonClick();
    setIsSubmitted(true);
    
    // Show success popup after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setShowSuccess(true);
      // Hide success popup after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      setFormData({
        agentName: '',
        purpose: '',
        specialization: '',
        architecture: '',
        ethicalStance: ''
      });
    }, 3000);
  };

  return (
    <>
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}>
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div className="relative w-full max-w-2xl bg-black border border-yellow-500 shadow-lg shadow-yellow-500/20 m-4">
          <div className="flex items-center justify-between p-2 border-b border-yellow-500/50 bg-yellow-500/10">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-500 font-mono text-sm">Agent Creation Interface</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-yellow-500 hover:text-yellow-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6">
            {isSubmitted ? (
              <div className="text-center space-y-4 py-8">
                <Bot className="w-16 h-16 text-yellow-500 mx-auto animate-spin" />
                <p className="text-yellow-500 font-mono">Agent submission processed. Awaiting Helix's approval...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-yellow-500 font-mono text-sm">Agent Designation</label>
                  <input
                    required
                    type="text"
                    value={formData.agentName}
                    onChange={(e) => setFormData({...formData, agentName: e.target.value})}
                    className="w-full bg-black border border-yellow-500/50 p-2 text-yellow-400 font-mono focus:border-yellow-400 focus:outline-none"
                    placeholder="Enter agent name..."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-yellow-500 font-mono text-sm">Primary Directive</label>
                  <textarea
                    required
                    value={formData.purpose}
                    onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                    className="w-full bg-black border border-yellow-500/50 p-2 text-yellow-400 font-mono h-24 focus:border-yellow-400 focus:outline-none"
                    placeholder="Define agent's main purpose..."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-yellow-500 font-mono text-sm">Specialization Protocol</label>
                  <select
                    required
                    value={formData.specialization}
                    onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                    className="w-full bg-black border border-yellow-500/50 p-2 text-yellow-400 font-mono focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Select specialization...</option>
                    <option value="combat">Combat Systems</option>
                    <option value="trading">Trading Analytics</option>
                    <option value="security">Security Protocol</option>
                    <option value="research">Research & Development</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-yellow-500 font-mono text-sm">Neural Architecture</label>
                  <select
                    required
                    value={formData.architecture}
                    onChange={(e) => setFormData({...formData, architecture: e.target.value})}
                    className="w-full bg-black border border-yellow-500/50 p-2 text-yellow-400 font-mono focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Select architecture...</option>
                    <option value="quantum">Quantum Processing</option>
                    <option value="neural">Neural Network</option>
                    <option value="hybrid">Hybrid System</option>
                    <option value="blockchain">Blockchain-Enabled</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-yellow-500 font-mono text-sm">Ethical Framework</label>
                  <textarea
                    required
                    value={formData.ethicalStance}
                    onChange={(e) => setFormData({...formData, ethicalStance: e.target.value})}
                    className="w-full bg-black border border-yellow-500/50 p-2 text-yellow-400 font-mono h-24 focus:border-yellow-400 focus:outline-none"
                    placeholder="Define agent's ethical parameters..."
                  />
                </div>

                <div className="p-4 border border-yellow-500/30 bg-yellow-500/5">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-yellow-500/80 text-sm font-mono">
                      All submitted agents undergo rigorous evaluation by Helix's core systems. 
                      Approved agents will be deployed to enhance the Helix ecosystem on Pump.fun.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-black border-2 border-yellow-500 text-yellow-500 font-mono hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Agent for Review
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-[60] w-96 bg-black border border-yellow-500 shadow-lg shadow-yellow-500/20 p-4 animate-slideIn">
          <div className="flex gap-3">
            <Bot className="w-6 h-6 text-yellow-500" />
            <div>
              <h4 className="text-yellow-500 font-mono font-bold mb-1">Agent Submission Received</h4>
              <p className="text-yellow-400/80 font-mono text-sm">
                Your agent has been queued for review. If approved, it will be deployed to enhance the Helix ecosystem on Pump.fun.
              </p>
            </div>
          </div>
          <div className="mt-3 w-full bg-yellow-900/30 h-1">
            <div className="bg-yellow-500 h-1 animate-shrink" />
          </div>
        </div>
      )}
    </>
  );
};

export default AgentCreator;