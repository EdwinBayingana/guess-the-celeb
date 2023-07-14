import React, { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
  return <p className={`text-black ${className}`}>{children}</p>;
};

export default Text;
