import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MintApp from '../components/MintApp';
import StakeApp from '../components/StakeApp';
import RouterDom from './RouterDom';


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RouterDom />}>
                    <Route index element={<MintApp />} />
                    <Route exact path="/stake" element={<StakeApp />} />
                    <Route path="*" element={<MintApp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;