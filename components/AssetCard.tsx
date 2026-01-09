
import React from 'react';
import { TokenAsset, AssetStatus } from '../types';

interface AssetCardProps {
  asset: TokenAsset;
  onClick: (id: string) => void;
}

const AssetCard: React.FC<AssetCardProps> = ({ asset, onClick }) => {
  const progress = (asset.raised / asset.totalRaising) * 100;

  const statusColors = {
    [AssetStatus.FUNDING]: 'bg-green-500/20 text-green-400',
    [AssetStatus.ACTIVE]: 'bg-blue-500/20 text-blue-400',
    [AssetStatus.SETTLED]: 'bg-gray-500/20 text-gray-400',
    [AssetStatus.UPCOMING]: 'bg-purple-500/20 text-purple-400',
  };

  return (
    <div 
      className="glass-card rounded-2xl overflow-hidden cursor-pointer hover:border-green-500/50 transition-all duration-300 group"
      onClick={() => onClick(asset.id)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={asset.image} 
          alt={asset.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[asset.status]}`}>
          {asset.status.toUpperCase()}
        </div>
        
        {asset.certificateLogo && (
          <div className="absolute top-4 right-12 bg-white rounded-full p-1.5 w-10 h-10 shadow-lg flex items-center justify-center">
            <img src={asset.certificateLogo} alt="Certification" className="w-full h-full object-contain" />
          </div>
        )}

        {asset.isVeriPura && (
          <div className="absolute bottom-4 left-4 bg-blue-500/80 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-white flex items-center gap-1 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            VeriPura Verified
          </div>
        )}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider">
          {asset.rating}
        </div>
      </div>

      <div className="p-6">
        <div className="text-xs text-green-400 font-medium mb-1">{asset.type}</div>
        <h3 className="text-xl font-bold mb-4 line-clamp-1">{asset.name}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <div className="text-gray-400 text-xs mb-1">Target Yield</div>
            <div className="text-lg font-bold text-white">{asset.yieldPa}% <span className="text-xs font-normal">p.a.</span></div>
          </div>
          <div>
            <div className="text-gray-400 text-xs mb-1">Duration</div>
            <div className="text-lg font-bold text-white">{asset.duration} <span className="text-xs font-normal">mos</span></div>
          </div>
        </div>

        {asset.status === AssetStatus.FUNDING && (
          <>
            <div className="mb-2 flex justify-between items-end">
              <span className="text-xs text-gray-400">Raised: €{(asset.raised / 1000).toFixed(0)}k</span>
              <span className="text-xs text-white font-bold">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-6">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </>
        )}

        <div className="flex justify-between items-center pt-4 border-t border-white/5">
          <div className="text-xs text-gray-400">Min: <span className="text-white font-medium">€{asset.minInvestment}</span></div>
          <button className="px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-bold text-sm rounded-lg transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
