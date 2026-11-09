
'use client'

import { useProductContext } from '@/context/product';
import { IProducts } from '@/types/productsType';
import React from 'react';
import { toast } from 'react-toastify';

const DetailsPageButton = ({ product }: { product: IProducts }) => {
    const { planlist, setPlanlist, savelist, setSavelist } =
        useProductContext();

    const isPlanFull = planlist.length >= 5;
    const alreadyInPlan = planlist.some((item) => item.id === product.id);
    const alreadyInSave = savelist.some((item) => item.id === product.id);

    const handleAddToPlan = () => {
        if (alreadyInPlan) {
            toast.error('Already in Plan');
            return;
        }

        if (isPlanFull) {
            toast.error('Plan Full');
            return;
        }

        setPlanlist(prev => [...prev, product]);
        toast.success('Added to plan');
    };

    const handleSaveForLater = () => {
        if (alreadyInSave) {
            toast.error('Already in Save List');
            return;
        }

        setSavelist(prev => [...prev, product]);
        toast.success('Added to save list');
    };

    return (
        <div className="mt-6 flex flex-wrap gap-3">

            <button
                type="button"
                disabled={alreadyInPlan}
                onClick={handleAddToPlan}
                className="rounded-lg bg-lime-400 px-4 py-3 text-xs font-bold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
                ▣ Add to today's plan
            </button>

            <button
                type="button"
                disabled={alreadyInSave}
                onClick={handleSaveForLater}
                className="rounded-lg border border-gray-700 px-4 py-3 text-xs text-gray-300 transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
                ♧ Save for later
            </button>

        </div>
    );
};

export default DetailsPageButton;
