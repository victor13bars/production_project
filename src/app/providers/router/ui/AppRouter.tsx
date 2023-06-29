import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeCongig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading......</div>}>
            <div className='page-wrapper'>
                <Routes>
                    {Object.values(routeCongig).map(({element, path}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;