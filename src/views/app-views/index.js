import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import ClientsList from "../../components/layout-components/ClientsList";


export const AppViews = () => {
    return (
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>
                <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
                <Route path={`${APP_PREFIX_PATH}/clients`} component={ClientsList} /> {/* Add the ClientsList route */}
                <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
            </Switch>
        </Suspense>
    )
}

export default React.memo(AppViews);
