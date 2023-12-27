import React from 'react'
import Search from './Search';
import PopularCatogories from './PopularCatogories';
import ExplorePrograms from './ExplorePrograms';
import ContWhereLeft from './ContWhereLeft';
import Recommendations from './Recommendations';
import LiveSessions from './LiveSessions';
import { useEffect } from 'react';
import Layout from './Layout';

export default function Dashboard({ handlePathChange, mainCurrentPath }) {

    useEffect(() => {
        // Call handlePathChange with the current path when the component mounts
        handlePathChange(window.location.pathname);
    }, []);


    return (
        <Layout currentPath={mainCurrentPath}>
            <div>
                <div>
                    <Search />
                    <PopularCatogories />
                    <ExplorePrograms />
                    <ContWhereLeft />
                    <Recommendations />
                    <LiveSessions />

                </div>



            </div>
        </Layout>
    );
}
