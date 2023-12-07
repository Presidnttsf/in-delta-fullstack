import React from 'react'
import Header from './Header';
import Search from './Search';
import PopularCatogories from './PopularCatogories';
import ExplorePrograms from './ExplorePrograms';
import ContWhereLeft from './ContWhereLeft';
import Recommendations from './Recommendations';
import LiveSessions from './LiveSessions';

export default function Dashboard() {
    return (
        <div>
            <div>
                <Header />
                <Search />
                <PopularCatogories />
                <ExplorePrograms />
                <ContWhereLeft />
                <Recommendations />
                <LiveSessions />

            </div>



        </div>
    );
}
