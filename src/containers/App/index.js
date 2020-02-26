import React from 'react';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app} data-testid="App">
      <h1 data-testid="AppTitle">App Title</h1>
    </div>
  );
}

export default App;
