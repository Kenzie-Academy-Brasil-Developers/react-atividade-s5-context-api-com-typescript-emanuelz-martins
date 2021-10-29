import { ReactNode } from 'react';
import { CartProvider } from './cart';

interface ProviderData {
    children: ReactNode;
}

const Providers = ({ children }: ProviderData) => (
    <CartProvider>{children}</CartProvider>
);

export default Providers;
