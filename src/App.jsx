import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRoutes from './routes/Approutes';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  )
}

export default App
