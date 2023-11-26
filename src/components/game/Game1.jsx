import React, { useState } from "react";
import { toast } from "react-toastify";
function Game1() {

    const [clickCount, setClickCount] = useState(0);

    const tebakButtonClick = () => {
        setClickCount(clickCount+ 1);
    };

    const resetButtonClick = () => {
        setClickCount(clickCount - clickCount);
        setRandom(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
    };

    //buat nge set sebelum game dimulai
    const [startGame, startButtonClick] = useState(false);
    
    //generate angka random
    const [angkaRandom, setRandom] = useState(Math.floor(Math.random() * (10 - 1 + 1)) + 1);

    // tiga dibawah ini buat nge set inputan, nyimpen inputan,
    // sama buat ngecek inputan dengan angka random
    const [inputValue, setInputValue] = useState(0);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const cekTebakan = (event) => {
        event.preventDefault();

        if (inputValue == angkaRandom) {
            toast.success("Berhasil Menebak Angka", { 
                position: toast.POSITION.TOP_RIGHT, 
                theme: "dark", 
            });
            setClickCount(4);

        }else if(inputValue == '' && clickCount < 4){
            toast.error("Input Tidak Boleh Kosong", { 
                position: toast.POSITION.TOP_RIGHT, 
                theme: "dark", 
            });
            setClickCount(clickCount-1);

        }else if(inputValue > angkaRandom  && clickCount < 4){
            toast.error("Angka Terlalu Besar", { 
                position: toast.POSITION.TOP_RIGHT, 
                theme: "dark", 
            });

        }else if(inputValue < angkaRandom && clickCount < 4){
            toast.error("Angka Terlalu Kecil", { 
                position: toast.POSITION.TOP_RIGHT, 
                theme: "dark",
            });
            
        }else if(event.target.value != angkaRandom && clickCount == 4){
            toast.error("Kesempatan Anda Habis", { 
                position: toast.POSITION.TOP_RIGHT, 
                theme: "dark", 
            });
        }  
    };

    return (
        <div className="p-5">
            <h1 className="mb-4">Number Guessing Game</h1>

            <div>
                <p className="text-start">1. Each player gets 4 chances to guess</p>
                <p className="text-start">2. Number range is between 1 - 10</p>
                <p className="text-start">3. You can reset the number after 4 wrong answers</p>
            </div>
            
            {startGame == false 
                // belum mulai permainan
                ?
                <div className="mt-5">
                    <p className="text-start mb-5">Silahkan Mulai Permainan</p>
                    <div className="d-flex">
                        <button 
                            className="btn btn-success"
                            onClick={() => startButtonClick((startGame) => startGame = true)}
                        >Mulai Permainan</button>
                    </div>
                </div>

                // mulai permainan
                :
                <div className="mt-5">
                    <label htmlFor="Input" className="d-block text-start mb-2">
                            Input Angka
                    </label>
                    <form onSubmit={cekTebakan}>
                        <input 
                            type="number"
                            className="form-control mb-4"
                            id="Input"
                            placeholder="Input Angka 1 - 10"
                            value={inputValue}
                            onChange={handleInputChange}
                            disabled={clickCount < 4
                                        ? false
                                        : true
                                     }
                        />
                        <p className="text-start">Nilai Aslinya adalah {angkaRandom}</p>

                        <p className="text-start">Jumlah Tebakan {clickCount} </p>

                        <div className="d-flex">
                            {clickCount < 4
                                ? <button type="submit" className="btn btn-primary" onClick={tebakButtonClick}>Tebak Angka</button>
                                : <button className="btn btn-danger" onClick={resetButtonClick}>Reset</button>
                            } 
                        </div>
                    </form>
                </div>
            }
        </div>
    );
}

export default Game1;