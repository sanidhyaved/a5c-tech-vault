
import { Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ showText = true, size = 'md' }: LogoProps) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return { icon: 18, textClass: 'text-lg' };
      case 'md':
        return { icon: 24, textClass: 'text-xl md:text-2xl' };
      case 'lg':
        return { icon: 32, textClass: 'text-2xl md:text-3xl' };
      default:
        return { icon: 24, textClass: 'text-xl md:text-2xl' };
    }
  };

  const { icon, textClass } = getSize();

  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="relative">
        <Shield size={icon} className="text-a5c-purple" />
        <Lock size={icon * 0.6} className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      {showText && (
        <span className={`font-bold text-gradient ${textClass}`}>A5C TECH</span>
      )}
    </Link>
  );
};

export default Logo;
