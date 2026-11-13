import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ProductSelection } from './components/ProductSelection';

function App() {
  const [showProductPage, setShowProductPage] = useState(false);

  return (
    <div>
      {!showProductPage ? (
        <LandingPage onGetStarted={() => setShowProductPage(true)} />
      ) : (
        <ProductSelection />
      )}
    </div>
  );
}

export default App;