import { calculateImc } from '../../utils/imc';

import styles from './style.module.css';

export function LeftSide({
  toShow, 
  height, 
  weight, 
  setToShowCallback, 
  setHeightCallback, 
  setWeightCallback
}){
  
	function handleHeightField(event){
		setHeightCallback(parseFloat(event.target.value));
	}
	function handleWeightField(event){
		setWeightCallback(parseFloat(event.target.value));
	}
	function handleCalculateButton(){
		if(!height || !weight){
			alert('Preencha todos os campos')
		}
    setToShowCallback(calculateImc(height, weight));
	}

  return (
    <div className={styles.leftSide}>
      <h1>Calcule o seu IMC</h1>
      <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

      <input 
        type="number"
        placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
        value={height > 0 ? height : ''}
        onChange={handleHeightField}
        disabled={toShow ? true : false}
      />

      <input 
        type="number"
        placeholder='Digite seu peso. Ex: 75.5 (em kilos)'
        value={weight > 0 ? weight : ''}
        onChange={handleWeightField}
        disabled={toShow ? true : false}
      />

      <button disabled={toShow ? true : false} onClick={handleCalculateButton}>Calcular</button>
    </div>
  )
}