import ReactDOM from 'react-dom';
import history from './history';
import router from './router';
import routes from './routes';

const container = document.getElementById('root');

const renderComponent = (component) => {
  ReactDOM.render(component, container);
};

const render = (location) => {
  console.log('+++location', location);
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error })
    .then(renderComponent));
};


render(history.location);
history.listen(render);
