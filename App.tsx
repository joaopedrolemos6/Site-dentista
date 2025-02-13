import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AppointmentForm } from './components/AppointmentForm';
import { Map } from './components/Map';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'admin'>('home');

  if (currentPage === 'admin') {
    return (
      <div className="min-h-screen">
        <Header onAdminClick={() => setCurrentPage('home')} showAdminLink />
        <AdminPanel />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onAdminClick={() => setCurrentPage('admin')} showAdminLink />
      <main>
        <Hero />
        <Services />
        <AppointmentForm />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;