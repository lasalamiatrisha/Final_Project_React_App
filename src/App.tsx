import { useState } from 'react';
import { LandingPage } from './components/LandingPage';

function App() {
  const [showProductPage, setShowProductPage] = useState(false);

  return (
    <div>
      {!showProductPage ? (
        <LandingPage onGetStarted={() => setShowProductPage(true)} />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <h2 className="text-2xl font-bold">Product Selection Page Coming Soon!</h2>
        </div>
      )}
    </div>
  );
}

export default App;