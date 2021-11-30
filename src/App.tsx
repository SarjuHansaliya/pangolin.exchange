import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routes from './pages';

const routing = (
  <Router>
    {routes.map((route, index) => {
      const RouteComponent = route.component;
      const Layout: any = route.layout;
      return (
        <Routes key={index}>
          <Route
            path={route.path}
            element={
              <Layout title= {route.title}>
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
