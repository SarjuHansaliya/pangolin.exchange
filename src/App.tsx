import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routes from './pages';

const routing = (
  <Router>
    {routes.map((route, index) => {
      const RouteComponent = route.component;
      const Layout = route.layout;
      return (
        <Routes key={index}>
          <Route
            // exact={route.exact}
            path={route.path}
            element={
              <Layout>
                <RouteComponent />
              </Layout>
            }
          />
        </Routes>
      );
    })}
  </Router>
);

function App() {
  return <>{routing}</>;
}

export default App;
