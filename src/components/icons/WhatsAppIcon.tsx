import React from 'react';

interface WhatsAppIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 0C6.477 0 2 4.477 2 10c0 1.79.46 3.47 1.26 4.94L2 22l6.06-1.64c1.47.79 3.15 1.26 4.94 1.26 5.523 0 10-4.477 10-10S17.523 0 12 0zM17.5 15.2c-.2-.1-.7-.3-1-.4s-.6-.2-.9-.2c-.3 0-.5.1-.7.3s-.9 1-.9 1.2c0 .2.1.2.3.5s.7.7.8.8c.2.2.4.2.6.2.2 0 .7-.3 1-.5s.7-.6.8-.9c.1-.2.1-.2.1-.4 0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.5-.3-.1-.1-.3-.1-.5-.1zm-3.2 2.8c-1.1 0-2.2-.3-3.1-.8-.9-.5-1.7-1.2-2.3-2-.6-.8-1-1.7-1.3-2.7-.3-1-.3-2.1 0-3.1.3-1 .8-1.9 1.5-2.6.7-.7 1.6-1.2 2.6-1.5 1-.3 2.1-.3 3.1 0 1 .3 1.9.8 2.7 1.5.8.7 1.4 1.6 1.8 2.6.4 1 .4 2.1.1 3.1-.3 1-.8 1.9-1.5 2.6-.7.7-1.6 1.2-2.6 1.5-.9.3-2 .3-3.1 0z"/>
  </svg>
);

export default WhatsAppIcon;
