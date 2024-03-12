import { useEffect, useState } from "react";
import { CalculoHipotenusa } from "./types/CalculoHipotenusa";

interface CalculadoraProps {
    calcularHipotenusa: CalculoHipotenusa
}

const Calculadora: React.FC<CalculadoraProps> = ({ calcularHipotenusa }) => {
    const [ladoB, setLadoB] = useState<number>(0);
    const [ladoC, setLadoC] = useState<number>(0);
    const [hipotenusa, setHipotenusa] = useState<number | null>(null);

    useEffect(() => {
        if(ladoB > 0 && ladoC > 0){
            setHipotenusa(calcularHipotenusa(ladoB, ladoC))
        }
    }, [ladoB, ladoC, calcularHipotenusa])

    const alterarLadoB = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valorLadoB = parseFloat(event.target.value);
        setLadoB(valorLadoB)
    }

    const alterarLadoC = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valorLadoC = parseFloat(event.target.value);
        setLadoC(valorLadoC)
    }

    return (
        <div>
            <div>
                <label>Lado B</label>
                <input
                    type="number"
                    placeholder="Insira o valor de B"
                    value={ladoB}
                    onChange={alterarLadoB}
                />
            </div>
            <div>
                <label>Lado C</label>
                <input
                    type="number"
                    placeholder="Insira o valor de C"
                    value={ladoC}
                    onChange={alterarLadoC}
                />
            </div>
            <p>O valor da Hipotenusa é: <strong>{hipotenusa}</strong></p>
        </div>

    )
}

export default Calculadora;