"use client"
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { ProductProvider } from '@/context/product';

const ClientLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <ProductProvider>
                <nav>
                    <Navbar />
                </nav>
                <main className="min-h-[50vh]">{children}</main>
                <Footer />
                
            </ProductProvider>
        </div>
    );
};

export default ClientLayout;