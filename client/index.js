import React from 'react';
import ReactDOM from 'react-dom';
import { StripeProvider } from 'react-stripe-elements';
import history from './history';
import router from './router';
import routes from './routes';


const container = document.getElementById('root');

const renderComponent = (component) => {
  ReactDOM.render(
    <StripeProvider apiKey="	
    pk_test_WSDe2UO2FeOTac93CaiBdeJc">
      {component}
    </StripeProvider>,
    container);
};

const render = (location) => {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error })
    .then(renderComponent));
};


render(history.location);
history.listen(render);
