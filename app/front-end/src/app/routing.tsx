import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Error from '@widgets/Error';
import Layout from '@widgets/Layout/Layout';

import { routes } from '../shared/pathes/routes';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ link, Component }) => (
          <Route
            key={link}
            path={link}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          ></Route>
        ))}
        <Route path="/" element={<Navigate to={routes[0].link} replace />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
