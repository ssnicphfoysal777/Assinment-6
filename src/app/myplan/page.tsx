import MyBuild from '@/components/MyBuild';
import React from 'react';

const page = () => {
    return (
        <div >
            <div className='container mx-auto p-8'>
                <h1 className='font-bold text-3xl '>MY PLAN</h1>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <MyBuild />
        </div>

    );
};

export default page;