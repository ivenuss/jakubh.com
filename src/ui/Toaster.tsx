import React from 'react';
import { Toaster as ReactToaster } from 'react-hot-toast';
import { useTheme } from 'next-themes';
import type { ToasterProps as ReactToasterProps } from 'react-hot-toast';

interface ToasterProps extends ReactToasterProps {}

export const Toaster: React.FC<ToasterProps> = ({ ...props }) => {
  const { theme } = useTheme();

  return (
    <ReactToaster
      toastOptions={{
        className: 'text-sm font-medium break-all rounded-lg p-2',
        style:
          theme === 'dark'
            ? { color: '#dee3ea', background: '#242c37' } // Dark
            : { color: '#1d2024', background: 'white' } // Light
      }}
      {...props}
    />
  );
};
