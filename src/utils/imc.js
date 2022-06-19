export const levels = [
  { title: 'Magreza', color: '#93A3AB', icon: 'down', imc: [0,18.5], yourImc: null},
  { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6,24.9], yourImc: null },
  { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25,30], yourImc: null },
  { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1,99], yourImc: null },
];

export function calculateImc(height, weight) {
  const imc = parseFloat(weight / (height * height).toFixed(1));

  for(let level in levels){
    if(imc >= levels[level].imc[0] && imc <= levels[level].imc[1]){
      let levelCopy = {...levels[level]}
      
      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levelCopy;
    }
  }

  return null;
}