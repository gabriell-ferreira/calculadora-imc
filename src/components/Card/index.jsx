import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

import styles from './style.module.css';

export function Card({data}){
  return (
    <div 
      className={styles.main}
      style={{backgroundColor: data.color}}
    >
      <div className={styles.icon}>
        <img 
          src={data.icon === 'up' ? upImage : downImage}
          width={30} 
        />
      </div>
      <div className={styles.title}>
        {data.title}
      </div>
      {
        data.yourImc &&
          <div className={styles.yourImc}>
            Seu IMC é de {data.yourImc} kg/m²
          </div>
      }
      <div className={styles.info}>
        IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong> 
      </div>
    </div>
  )
}