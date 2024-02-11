import React, { useState } from 'react';
// 


function Criar(props) {
    const [Subject, setSubject] = useState("");
    const handleSubmit = (e) => {
        // e.preventDefault();
        // if (Subject !== "") {
        //     await addDoc(collection(db, "todos"), {
        //         Subject,
        //         completed: false,
        //     });
        //     setSubject("");
        // }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input type="text"
                    placeholder='what do you want to do?'
                    value={Subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>
            <div className="btn-container">
        <button>Adicionar</button>
      </div>
        </form>
    );
}
export default Criar;