import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './features/comments/commentsSlice';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CampsiteDirectoryPage from './pages/CampsiteDirectoryPage'
import CampsiteDetailPage from './pages/CampsiteDetailPage'

import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCampsites());
      dispatch(fetchPromotions());
      dispatch(fetchPartners());
      dispatch(fetchComments());
  }, [dispatch]);


  return (
    
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/campsites'>
          <CampsiteDirectoryPage />
        </Route>
        <Route path='/campsites/:campsiteId'>
          <CampsiteDetailPage />
        </Route>
        <Route exact path='/contactus'>
          <ContactPage />
        </Route>
        <Route exact path='/aboutus'>
          <AboutPage />
        </Route>
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>


  );
}

export default App;
