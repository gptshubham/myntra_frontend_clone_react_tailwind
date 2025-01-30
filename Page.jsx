import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Home/page';

// Header
// Body Components: Card
// Footer

function Page() {
  return <App />;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Page />);
