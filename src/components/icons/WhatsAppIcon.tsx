import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ size = 24, className, ...props }) => (
  <MessageCircle size={size} className={`text-green-500 ${className}`} {...props} />
);

export default WhatsAppIcon;
