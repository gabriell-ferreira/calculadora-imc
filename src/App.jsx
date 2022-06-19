import { Header } from './components/Header';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';
import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [toShow, setToShow] = useState(null);
  const [height, setHeight] = useState(0);
	const [weight, setWeight] = useState(0);

  function setToShowCallback(toShow) {
    setToShow(toShow);
  }

  function setHeightCallback(height) {
    setHeight(height);
  }

  function setWeightCallback(weight) {
    setWeight(weight);
  }

  return (
    <div className={styles.main}>
			<Header />
      <div className={styles.container}>
        <LeftSide 
          toShow={toShow} 
          height={height} 
          weight={weight} 
          setToShowCallback={setToShowCallback}  
          setHeightCallback={setHeightCallback} 
          setWeightCallback={setWeightCallback}
        />
        <RightSide 
          toShow={toShow}
          setToShowCallback={setToShowCallback}  
          setHeightCallback={setHeightCallback} 
          setWeightCallback={setWeightCallback}
        />
      </div>
    </div>
  )
}

export default App
