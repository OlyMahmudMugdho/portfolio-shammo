import { createContext, useContext, ReactNode } from 'react';
import { PortfolioData } from '@/types';
import portfolioData from '@/data/portfolio.json';

const PortfolioContext = createContext<PortfolioData | null>(null);

interface PortfolioProviderProps {
  children: ReactNode;
}

export function PortfolioProvider({ children }: PortfolioProviderProps) {
  return (
    <PortfolioContext.Provider value={portfolioData as PortfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
