import React, { useState } from 'react';
import './style.css'; 

const Calculator = () => {
    const [input, setInput] = useState('');

    const insert = (num) => {
        setInput(prev => prev + num);
    };

    const clean = () => {
        setInput('');
    };

    const add = (x) => {
        setInput(prev => prev + x);
    };

    const calcular = () => {
        if (input) {
            try {
                // Use eval cautiously; consider a safer parser in production
                const result = eval(input);
                setInput(result.toString());
            } catch (error) {
                setInput('Error');
            }
        } else {
            setInput('Nada...');
        }
    };

    const por100 = () => {
        if (input) {
            setInput((parseFloat(input) / 100).toString());
        }
    };

    return (
        <div className="fundo">
            <div id="calculadora" className="calc">
                <br />
                <p id="resultado">{input}</p>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td><button className="botao" onClick={clean}>C</button></td>
                            <td><button className="botao" onClick={() => add('/')}>/</button></td>
                            <td><button className="botao" onClick={por100}>%</button></td>
                            <td><button className="botao" onClick={() => add('*')}>*</button></td>
                        </tr>
                        <tr>
                            <td><button className="botao" onClick={() => insert('7')}>7</button></td>
                            <td><button className="botao" onClick={() => insert('8')}>8</button></td>
                            <td><button className="botao" onClick={() => insert('9')}>9</button></td>
                            <td><button className="botao" onClick={() => add('+')}>+</button></td>
                        </tr>
                        <tr>
                            <td><button className="botao" onClick={() => insert('4')}>4</button></td>
                            <td><button className="botao" onClick={() => insert('5')}>5</button></td>
                            <td><button className="botao" onClick={() => insert('6')}>6</button></td>
                            <td><button className="botao" onClick={() => add('-')}>-</button></td>
                        </tr>
                        <tr>
                            <td><button className="botao" onClick={() => insert('1')}>1</button></td>
                            <td><button className="botao" onClick={() => insert('2')}>2</button></td>
                            <td><button className="botao" onClick={() => insert('3')}>3</button></td>
                            <td rowSpan="2"><button className="botao" style={{ height: '106px' }} onClick={calcular}>=</button></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><button className="botao" style={{ width: '106px' }} onClick={() => insert('0')}>0</button></td>
                            <td><button className="botao" onClick={() => insert('.')}>.</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Calculator;
