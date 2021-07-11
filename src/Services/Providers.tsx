import React, { FC, ProviderProps } from 'react';

import { Routes } from '../Navigators/Route';

import { AuthProvider } from './Auth/AuthProvider';

interface ProvidersProps {}

export const Providers: FC<ProviderProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
