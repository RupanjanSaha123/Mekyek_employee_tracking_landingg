import React from 'react';
import { 
  FiZap, 
  FiCopy, 
  FiHeadphones, 
  FiDownload, 
  FiTarget, 
  FiLock, 
  FiGlobe, 
  FiBarChart2,  
  FiUsers, 
  FiArrowRight, 
  FiCheck, 
  FiClock, 
  FiTrendingUp, 
  FiStar,      
  FiFilter, 
  FiLayers, 
  FiPlay, 
  FiBookOpen 
} from 'react-icons/fi';
import { GiRocket } from 'react-icons/gi';
import { TbBulb, TbChartBar, TbStars } from 'react-icons/tb';
import { 
  HiOutlineLightningBolt, 
  HiOutlineChatAlt2, 
  HiOutlineTemplate 
} from 'react-icons/hi';
import { VscGraph } from 'react-icons/vsc';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

// Main Icons
export const LightningIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '',
  color 
}) => (
  <FiZap 
    className={className} 
    size={size} 
    color={color}
    aria-label="Lightning bolt icon"
  />
);

export const CopyIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiCopy 
    className={className} 
    size={size} 
    aria-label="Copy icon"
  />
);

export const HeadphonesIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiHeadphones 
    className={className} 
    size={size} 
    aria-label="Headphones icon"
  />
);

export const DownloadIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiDownload 
    className={className} 
    size={size} 
    aria-label="Download icon"
  />
);

export const RocketIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <GiRocket 
    className={className} 
    size={size} 
    aria-label="Rocket icon"
  />
);

export const TargetIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiTarget 
    className={className} 
    size={size} 
    aria-label="Target icon"
  />
);

export const LockIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiLock 
    className={className} 
    size={size} 
    aria-label="Lock icon"
  />
);

export const GlobeIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiGlobe 
    className={className} 
    size={size} 
    aria-label="Globe icon"
  />
);

export const ChartIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiBarChart2 
    className={className} 
    size={size} 
    aria-label="Chart icon"
  />
);

export const TeamIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiUsers 
    className={className} 
    size={size} 
    aria-label="Team icon"
  />
);

export const ArrowRightIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiArrowRight 
    className={className} 
    size={size} 
    aria-label="Arrow right icon"
  />
);

export const CheckIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiCheck 
    className={className} 
    size={size} 
    aria-label="Check icon"
  />
);

export const ClockIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiClock 
    className={className} 
    size={size} 
    aria-label="Clock icon"
  />
);

export const TrendingUpIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiTrendingUp 
    className={className} 
    size={size} 
    aria-label="Trending up icon"
  />
);

export const SparkleIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiStar 
    className={className} 
    size={size} 
    aria-label="Sparkle icon"
  />
);

export const FilterIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiFilter 
    className={className} 
    size={size} 
    aria-label="Filter icon"
  />
);

export const LayersIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiLayers 
    className={className} 
    size={size} 
    aria-label="Layers icon"
  />
);

export const PlayIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiPlay 
    className={className} 
    size={size} 
    aria-label="Play icon"
  />
);

export const BookIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <FiBookOpen 
    className={className} 
    size={size} 
    aria-label="Book icon"
  />
);

export const BulbIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <TbBulb 
    className={className} 
    size={size} 
    aria-label="Light bulb icon"
  />
);

export const GraphIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <VscGraph 
    className={className} 
    size={size} 
    aria-label="Graph icon"
  />
);

export const StarsIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <TbStars 
    className={className} 
    size={size} 
    aria-label="Stars icon"
  />
);

export const BoltIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <HiOutlineLightningBolt 
    className={className} 
    size={size} 
    aria-label="Bolt icon"
  />
);

export const ChatIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <HiOutlineChatAlt2 
    className={className} 
    size={size} 
    aria-label="Chat icon"
  />
);

export const TemplateIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <HiOutlineTemplate 
    className={className} 
    size={size} 
    aria-label="Template icon"
  />
);

export const ChartBarIcon: React.FC<IconProps> = ({ 
  size = 20, 
  className = '' 
}) => (
  <TbChartBar 
    className={className} 
    size={size} 
    aria-label="Chart bar icon"
  />
);

// Brand Logo Icon
interface LogoIconProps extends IconProps {
  animated?: boolean;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ 
  size = 32, 
  className = '',
  animated = false 
}) => (
  <div 
    className={`logo-icon ${className} ${animated ? 'animated' : ''}`}
    role="img"
    aria-label="Company logo"
  >
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path 
        d="M16 2L30 16L16 30L2 16L16 2Z" 
        stroke="url(#gradient)" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M16 8L24 16L16 24L8 16L16 8Z" 
        stroke="url(#gradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M16 14L20 18L16 22L12 18L16 14Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="0.5"
      />
      <defs>
        <linearGradient 
          id="gradient" 
          x1="2" 
          y1="2" 
          x2="30" 
          y2="30" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D4AA"/>
          <stop offset="1" stopColor="#1A237E"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Loading Spinner
interface SpinnerIconProps extends IconProps {
  variant?: 'primary' | 'secondary';
}

export const SpinnerIcon: React.FC<SpinnerIconProps> = ({ 
  size = 20, 
  className = '',
  variant = 'primary'
}) => (
  <div 
    className={`spinner spinner-${variant} ${className}`}
    role="status"
    aria-label="Loading"
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeOpacity="0.2"
      />
      <path 
        d="M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2Z" 
        fill="currentColor"
      />
    </svg>
  </div>
);

// Custom SVG Icons
export const BrainIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '' 
}) => (
  <div 
    className={`brain-icon ${className}`}
    role="img"
    aria-label="Brain icon"
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path 
        d="M12 3L20 9V21H4V9L12 3Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      <path 
        d="M8 15H16" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M8 18H16" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export const TimeIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '' 
}) => (
  <div 
    className={`time-icon ${className}`}
    role="img"
    aria-label="Time icon"
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle 
        cx="12" 
        cy="12" 
        r="9" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      <path 
        d="M12 7V12L15 15" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export const DiamondIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '' 
}) => (
  <div 
    className={`diamond-icon ${className}`}
    role="img"
    aria-label="Diamond icon"
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path 
        d="M12 3L20 9L12 21L4 9L12 3Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinejoin="round"
      />
    </svg>
  </div>
);