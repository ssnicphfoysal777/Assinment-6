
'use client'

import { useProductContext } from '@/context/product';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MyBuild = () => {
    const { planlist, setPlanlist, savelist, setSavelist } =
        useProductContext();

    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');

    const [sortBy, setSortBy] = useState<'Duration' | 'Rating' | 'Calories'>('Duration');

    const [completedIds, setCompletedIds] = useState<number[]>([]);

    const currentList = activeTab === 'plan' ? planlist : savelist;

    // Sorting
    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === 'Duration') return a.duration - b.duration;
        if (sortBy === 'Rating') return a.rating - b.rating;
        if (sortBy === 'Calories') return a.caloriesBurned - b.caloriesBurned;

        return 0;
    });

    // Statistics
    const totalExercise = currentList.length;

    const totalTime = currentList.reduce(
        (sum, item) => sum + item.duration, 0
    );

    const totalCalori = currentList.reduce(
        (sum, item) => sum + item.caloriesBurned, 0
    );

    // Mark as Done
    const handleMarkDone = (id: number) => {
        setCompletedIds(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    // Remove Exercise
    const handleRemove = (id: number) => {
        if (activeTab === 'plan') {
            setPlanlist(prev => prev.filter(item => item.id !== id));
        } else {
            setSavelist(prev => prev.filter(item => item.id !== id));
        }

        setCompletedIds(prev => prev.filter(item => item !== id));
    };

    // Card List
    const renderTabContent = () => {
        if (sortedList.length === 0) {
            return (
                <div className="rounded-xl border border-gray-800 bg-[#15171d] py-12 text-center">
                    <h2 className="text-lg font-bold text-white">
                        Nothing here yet
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Add some exercises to get started.
                    </p>
                </div>
            );
        }

        return (
            <div className="flex flex-col gap-3">

                {sortedList.map((item) => {
                    const isCompleted = completedIds.includes(item.id);

                    return (
                        <div
                            key={item.id}
                            className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#15171d] p-3 text-white transition-all duration-300 hover:border-gray-600 sm:flex-row sm:items-center"
                        >

                            {/* Exercise Image */}
                            <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-24">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 96px"
                                    className="object-cover"
                                />
                            </div>

                            {/* Exercise Details */}
                            <div className="min-w-0 flex-1">

                                <h2 className={`text-sm font-extrabold uppercase tracking-wide ${
                                    isCompleted ? 'text-gray-500 line-through' : 'text-white'
                                }`}>
                                    {item.name}
                                </h2>

                                <p className="mt-1 text-xs text-gray-400">
                                    {item.equipment}
                                </p>

                                {/* Exercise Stats */}
                                <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-gray-400">

                                    <div className="flex items-center gap-1">
                                        <span className="text-lime-400">◷</span>
                                        <span>{item.duration} min</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <span>🔥</span>
                                        <span>{item.caloriesBurned} kcal</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <span className="text-lime-400">☆</span>
                                        <span>{item.rating}</span>
                                    </div>

                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex shrink-0 items-center gap-2">

                                {/* View Details */}
                                <Link
                                    href={`/products/${item.id}`}
                                    className="whitespace-nowrap rounded-full border border-gray-700 px-4 py-2 text-[10px] text-gray-300 transition hover:border-gray-500 hover:bg-gray-800"
                                >
                                    View Details
                                </Link>

                                {/* Mark as Done */}
                                <button
                                    type="button"
                                    onClick={() => handleMarkDone(item.id)}
                                    className={`whitespace-nowrap rounded-full px-4 py-2 text-[10px] font-bold transition ${
                                        isCompleted
                                            ? 'bg-gray-700 text-white'
                                            : 'bg-[#CCFF00] text-black hover:bg-lime-300'
                                    }`}
                                >
                                    ✓ {isCompleted ? 'Completed' : 'Mark as Done'}
                                </button>

                                {/* Remove */}
                                <button
                                    type="button"
                                    onClick={() => handleRemove(item.id)}
                                    className="px-1 text-lg text-gray-500 transition hover:text-red-500"
                                    aria-label="Remove exercise"
                                >
                                    ×
                                </button>

                            </div>

                        </div>
                    );
                })}

            </div>
        );
    };

    return (
        <div className="container mx-auto flex flex-col gap-4">

            {/* Statistics - তোমার আগের অংশ */}
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value text-[#CCFF00]">
                        {totalExercise}
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Minutes</div>
                    <div className="stat-value">
                        {totalTime}
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Calories</div>
                    <div className="stat-value">
                        {totalCalori}
                    </div>
                </div>

            </div>

            {/* Tabs and Sorting */}
            <div className="flex flex-wrap items-center justify-between gap-3">

                <div className="flex items-center gap-2 rounded-lg bg-[#15171d] p-1">

                    <button
                        type="button"
                        onClick={() => setActiveTab('plan')}
                        className={`rounded-md px-4 py-2 text-xs font-semibold transition ${
                            activeTab === 'plan'
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab('saved')}
                        className={`rounded-md px-4 py-2 text-xs font-semibold transition ${
                            activeTab === 'saved'
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Saved
                    </button>

                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>Sort By</span>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value as 'Duration' | 'Rating' | 'Calories')
                        }
                        className="select select-sm border-gray-700 bg-[#15171d] text-white"
                    >
                        <option value="Duration">Duration</option>
                        <option value="Calories">Calories</option>
                        <option value="Rating">Rating</option>
                    </select>
                </div>

            </div>

            {/* Exercise Cards */}
            {renderTabContent()}

        </div>
    );
};

export default MyBuild;
