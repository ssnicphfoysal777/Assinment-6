'use client'
import { useProductContext } from '@/context/product';
import { useState } from 'react';
const MyBuild = () => {
    const { planlist, setPlanlist, savelist, setSavelist } =
        useProductContext();
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan")

    const [sortBy, setSortBy] = useState<'Duration' | 'Rating' | 'Calories'>('Duration')
    const [orderID, setOrderID] = useState<number[]>([])

    const currentList = activeTab === 'plan' ? planlist : savelist;


    console.log(sortBy);
    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === 'Duration') return a.duration - b.duration;
        if (sortBy === 'Rating') return a.rating - b.rating;
        if (sortBy === 'Calories') return a.caloriesBurned - b.caloriesBurned;

        return 0;
    })

    const totalExercise = currentList.length;
    const totalTime = currentList.reduce((sum, item) => sum + item.duration, 0,
    )

    const totalCalori = currentList.reduce((sum, item) => sum + item.caloriesBurned, 0,
    )

    const renderTabContent = () => {
        if (sortedList.length === 0) {
            return (
                <>
                    <h2>Nothing here yet</h2>
                </>
            )
        }
        return (
            <div>
                {sortedList.map((item) => (

                    <h2 key={item.id}>Hello</h2>
                ))}
            </div>
        )
    }

    return (
        <div className='container flex flex-col mx-auto gap-2'>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value text-[#CCFF00]">{totalExercise}</div>
                    
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">Minutes</div>
                    <div className="stat-value">{totalTime}</div>
                   
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">Calories</div>
                    <div className="stat-value">{totalCalori}</div>
                    
                </div>
            </div>

            <>

                <div className="tabs tabs-box">
                    <input type="radio"
                        name="my_tabs_6"
                        className="tab"
                        aria-label="Today's Plan"
                        checked={activeTab === "plan"}
                        onChange={() => setActiveTab('plan')}
                    />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {renderTabContent()}
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_6"
                        className="tab"
                        aria-label="Saved"
                        onChange={() => setActiveTab('saved')}

                    />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {renderTabContent()}
                    </div>


                    <select onChange={(e) => setSortBy(e.target.value as 'Duration' | 'Rating' | 'Calories')}
                        defaultValue="Duration" className="select ms-auto">
                        <option value='Duration'>Duration</option>
                        <option value='Calories'>Calories</option>
                        <option value='Rating'>Rating</option>
                    </select>
                </div>
            </>


        </div>



    );
};

export default MyBuild;