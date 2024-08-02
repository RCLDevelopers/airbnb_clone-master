import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import LandingMain from './landing/landing_main';
import SearchContainer from './search/search_container';
import ListingShowContainer from './listings/listing_show/listing_show_container';
import CheckoutContainer from './checkout/checkout_container';
import TripsContainer from './trips/trips_container';

const App = () => {
  return (
    <main className="main__container">
      <Switch>
        <AuthRoute exact path="/" component={LandingMain} />
        {/* <Route exact path="/" component={Landing} /> */}
        <ProtectedRoute 
          path="/listings/:listingId" 
          component={ListingShowContainer} />
        <ProtectedRoute 
          exact path="/listings" 
          component={SearchContainer} />
        <ProtectedRoute 
          path="/checkout/:listingId" 
          component={CheckoutContainer} />
        <ProtectedRoute 
          path="/trips/:userId" 
          component={TripsContainer} />
      </Switch>
    </main>
  );
}

export default App;
