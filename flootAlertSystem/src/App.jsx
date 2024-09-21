import React from 'react';

import Sidebar from './components/Sidebar';
import FloodPredictionForm from './pages/FloodPredictionForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 bg-gray-100">
          <FloodPredictionForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
