import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Dashboard from '../Dashboard/Dashboard';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import JoinProject from '../JoinProject/JoinProject';
import AddProject from '../AddProject/AddProject';
import AddExpense from '../AddExpense/AddExpense';
import EditProject from '../EditProject/EditProject';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0f6fc9',
      },
      secondary: {
        main: '#a52d3f',
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />


            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/dashboard will show the Dashboard if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/dashboard */}

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              exact
              path="/home"
              authRedirect="/dashboard"
            >
              <LandingPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/login"
              authRedirect="/dashboard"
            >
              <LoginPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/registration"
              authRedirect="/dashboard"
            >
              <RegisterPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/dashboard"
            >
              <Dashboard />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/details"
            >
              <DetailsPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/details/:id"
            >
              <DetailsPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/joinproject"
            >
              <JoinProject />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/addproject"
            >
              <AddProject />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/addexpense"
            >
              <AddExpense />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/editproject"
            >
              <EditProject />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/editproject/:id"
            >
              <EditProject />
            </ProtectedRoute>


            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
