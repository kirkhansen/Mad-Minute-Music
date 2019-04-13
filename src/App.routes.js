import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RoutePath } from './constants';
import MMMContainer from './Pages/MMM/MMMContainer';
import ContactContainer from './Pages/Contact/ContactContainer';
import ChangesContainer from './Pages/Changes/ChangesContainer';
import AboutContainer from './Pages/About/AboutContainer';
import GenericNotFoundContainer from './Pages/Error/GenericNotFoundContainer';

const AppRoutes = () => (
    <Switch>
        <Route exact path={RoutePath.HOME} component={MMMContainer} />
        <Route exact path={RoutePath.CONTACT} component={ContactContainer} />
        <Route exact path={RoutePath.CHANGES} component={ChangesContainer} />
        <Route exact path={RoutePath.ABOUT} component={AboutContainer} />
        <Route component={GenericNotFoundContainer} />
    </Switch>
)

export default AppRoutes;