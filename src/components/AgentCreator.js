import React, { useState } from 'react';
import { X, Bot, Send, AlertCircle } from 'lucide-react';

const SENCreator = ({ onButtonClick, isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    agentName: '',
    purpose: '',
    specialization: '',
    bscIntegration: '',
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
        bscIntegration: '',
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
        <div className="relative w-full max-w-2xl bg-black border border-green-500 shadow-lg shadow-green-500/20 m-4">
          <div className="flex items-center justify-between p-2 border-b border-green-500/50 bg-green-500/10">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-green-500" />
              <span className="text-green-500 font-mono text-sm">SEN BSC Module Creation</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-green-500 hover:text-green-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6">
            {isSubmitted ? (
              <div className="text-center space-y-4 py-8">
                <Bot className="w-16 h-16 text-green-500 mx-auto animate-spin" />
                <p className="text-green-500 font-mono">SEN module submitted. Processing on BSC Network...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-green-500 font-mono text-sm">Module Name</label>
                  <input
                    required
                    type="text"
                    value={formData.agentName}
                    onChange={(e) => setFormData({...formData, agentName: e.target.value})}
                    className="w-full bg-black border border-green-500/50 p-2 text-green-400 font-mono focus:border-green-400 focus:outline-none"
                    placeholder="Enter SEN module name..."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-green-500 font-mono text-sm">BSC Function</label>
                  <textarea
                    required
                    value={formData.purpose}
                    onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                    className="w-full bg-black border border-green-500/50 p-2 text-green-400 font-mono h-24 focus:border-green-400 focus:outline-none"
                    placeholder="Define module's BSC network function..."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-green-500 font-mono text-sm">SEN Protocol</label>
                  <select
                    required
                    value={formData.specialization}
                    onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                    className="w-full bg-black border border-green-500/50 p-2 text-green-400 font-mono focus:border-green-400 focus:outline-none"
                  >
                    <option value="">Select protocol...</option>
                    <option value="defi">DeFi Integration</option>
                    <option value="trading">Trading Bot</option>
                    <option value="staking">Staking Protocol</option>
                    <option value="governance">Governance Module</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-green-500 font-mono text-sm">BSC Integration</label>
                  <select
                    required
                    value={formData.bscIntegration}
                    onChange={(e) => setFormData({...formData, bscIntegration: e.target.value})}
                    className="w-full bg-black border border-green-500/50 p-2 text-green-400 font-mono focus:border-green-400 focus:outline-none"
                  >
                    <option value="">Select BSC integration...</option>
                    <option value="pancakeswap">PancakeSwap</option>
                    <option value="venus">Venus Protocol</option>
                    <option value="biswap">Biswap</option>
                    <option value="bscpad">BSCPAD</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-green-500 font-mono text-sm">Security Measures</label>
                  <textarea
                    required
                    value={formData.ethicalStance}
                    onChange={(e) => setFormData({...formData, ethicalStance: e.target.value})}
                    className="w-full bg-black border border-green-500/50 p-2 text-green-400 font-mono h-24 focus:border-green-400 focus:outline-none"
                    placeholder="Define module's security parameters on BSC..."
                  />
                </div>

                <div className="p-4 border border-green-500/30 bg-green-500/5">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-green-500/80 text-sm font-mono">
                      All submitted SEN modules undergo security verification on the BSC Network. 
                      Approved modules will enhance the SEN ecosystem on Binance Smart Chain.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-black border-2 border-green-500 text-green-500 font-mono hover:bg-green-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit SEN Module
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-[60] w-96 bg-black border border-green-500 shadow-lg shadow-green-500/20 p-4 animate-slideIn">
          <div className="flex gap-3">
            <Bot className="w-6 h-6 text-green-500" />
            <div>
              <h4 className="text-green-500 font-mono font-bold mb-1">SEN Module Submitted</h4>
              <p className="text-green-400/80 font-mono text-sm">
                Your module has been queued for deployment on BSC Network. Once verified, it will be integrated into the SEN ecosystem on Binance Smart Chain.
              </p>
            </div>
          </div>
          <div className="mt-3 w-full bg-green-900/30 h-1">
            <div className="bg-green-500 h-1 animate-shrink" />
          </div>
        </div>
      )}
    </>
  );
};

export default SENCreator;