import leftArrowImage from '../../assets/leftarrow.png'
import { levels } from '../../utils/imc';
import { Card } from '../Card';

import styles from './style.module.css';

export function RightSide({
  toShow, 
  setToShowCallback, 
  setHeightCallback, 
  setWeightCallback
}){

  function handleBackButton(){
    setToShowCallback(null);
    setHeightCallback(0);
    setWeightCallback(0);
  }

  return (
    <div className={styles.rightSide}>
      {
        toShow ? 
          <div className={styles.rightBig}>
            <button className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftArrowImage} width={25} />
            </button>
            <Card data={toShow} /> 
          </div>
        : 
        <div className={styles.grid}>
          {
            levels.map((level, index) => (
              <Card key={index} data={level} />
            ))
          }
        </div>
      }
    </div>
  )
}