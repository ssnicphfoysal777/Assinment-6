
import { useProductContext } from '@/context/product';
import Link from 'next/link';
import React from 'react';

const NavbarButtons = () => {
    const { planlist, savelist } = useProductContext();

    return (
        <div className="flex items-center gap-5">

            <Link className="flex items-center gap-2 text-gray-300" href="/myplan">
                <button>Plan</button>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C6FF00] text-[13px] font-semibold text-black">
                    {planlist.length}
                </span>
            </Link>

           <Link className="flex items-center gap-2 text-gray-300" href="/myplan">
    <button>Saved</button>
    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700 text-[13px] font-normal text-gray-300">
        {savelist.length}
    </span>
</Link>

        </div>
    );
};

export default NavbarButtons;
