import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import ClientsList from "../../components/layout-components/ClientsList";
import Profile from "../../components/layout-components/Profile";


export const AppViews = () => {
    return (
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>
                <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
                <Route path={`${APP_PREFIX_PATH}/clients`} component={ClientsList} />
                <Route path={`${APP_PREFIX_PATH}/profile/:username`} component={Profile} />
                <Route path={`${APP_PREFIX_PATH}/edit-profile/:username`} component={Profile} /> {/* Add the EditProfile route */}
                <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
            </Switch>
        </Suspense>
    )
}

export default React.memo(AppViews);
