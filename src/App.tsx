import './App.css';
import Calculadora from './Calculadora';
import triangulo from '../public/triangulo.png'
import { useCallback } from 'react';
import { CalculoHipotenusa } from './types/CalculoHipotenusa';

function App() {
  const calcularRaizQuadrada = Math.sqrt;

  const calcularHipotenusa: CalculoHipotenusa = useCallback(( ladoB, ladoC ) => {
    const quadradoB = Math.pow(ladoB, 2);
    const quadradoC = Math.pow(ladoC, 2);
    return calcularRaizQuadrada(quadradoB + quadradoC)
  }, [calcularRaizQuadrada])

  return (
    <div className="App">
      <h1>Calculadora de Hipotenusa</h1>
      <img style={{ maxWidth: '500px', margin: '2rem' }} src={triangulo} alt="Imagem de um triângulo retângulo com lados A, B e C" />
      <Calculadora calcularHipotenusa={calcularHipotenusa}/>
    </div>
  )
}

export default App
