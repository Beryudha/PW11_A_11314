import React, { useState } from "react";
import { toast } from "react-toastify";
function Game2() {
    const [todolist, setToDoList] = useState([]);

    const [nama, setNama] = useState("");
    const [priority, setPriority] = useState("");
    const [catatan, setCatatan] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        setToDoList((dataSebelumnya) => {
            const newData = {
                nama: nama,
                priority: priority,
                catatan: catatan,
            };

            return [...dataSebelumnya, newData];
        });
        setNama("");
        setPriority("");
        setCatatan("");
    };

    return (
        <div className="p-5">
            <h1 className="mb-2">Simple To-Do List</h1>
            <form onSubmit={submitHandler}>
                <div className="d-flex justify-content-start align-item-center mb-3">
                    <div className="col-md-6 me-4">
                        <label htmlFor="InputNama" className="d-block text-start">
                            Apa yang ingin dikerjakan?
                        </label>
                        <input 
                            type="text"
                            className="form-control"
                            id="InputNama"
                            placeholder="Nama To-Do List"
                            required
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="InputPriority" className="d-block text-start">
                            Penting ga?
                        </label>
                        <select 
                            className="form-control"
                            id="InputPriority"
                            required
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="" disabled selected>Pilih Priority</option>
                            <option value="Penting">Penting</option>
                            <option value="Biasa">Biasa</option>
                            <option value="Tidak Penting">Tidak Penting</option>
                        </select>
                    </div>
                </div>

                <div className="d-flex justify-content-start align-item-center mb-3">
                    <div className="col-md-6">
                        <label htmlFor="InputCtt" className="d-block text-start">
                            Catatan
                        </label>
                        <textarea
                            className="form-control"
                            id="InputCtt"
                            placeholder="Isi Catatan To-Do List"
                            style={{resize: "none"}}
                            rows="4"
                            required
                            value={catatan}
                            onChange={(e) => setCatatan(e.target.value)}
                        >
                        </textarea> 
                    </div>
                </div>

                <div className="d-flex">
                    <button type="submit" className="btn btn-primary">Tambah To-Do List</button>
                </div>
            </form>


            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {todolist.map((item, index) => (
                <div className="col">
                    <div key={index} className="card">
                        {item.priority == "Penting"
                            ?
                            <div className="card-header text-bg-danger mb-3">
                                <h4>{item.priority}</h4>
                            </div>

                            :
                            item.priority == "Biasa"

                                ?
                                <div className="card-header text-bg-success mb-3">
                                    <h4>{item.priority}</h4>
                                </div>

                                :
                                <div className="card-header text-bg-dark mb-3">
                                    <h4>{item.priority}</h4>
                                </div>
                        }

                        <div className="card-body">
                            <h3>{item.nama}</h3>
                            <p>{item.catatan}</p>
                        </div>
                    </div>
                    
                </div>
            ))}
            </div>


        </div>
    );
}

export default Game2;