import React, { useState } from "react";


const CreateNote = (props) => {

    const [expand,setExpnad] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: '',
    });


    const inputEvent = (event) => {

        // const value=event.target.value;
        // const name=event.target.name;


        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const addEvent = (event) => {
        event.preventDefault();
        props.passNote(note);
        setNote({
            title: '',
            content: '',
        });
    };


    const expandIt=()=>{
        setExpnad(true);
    }

    const backToNormal=()=>{
        setExpnad(false);
    }


    return (
        <>
            <div className="main_note" onDoubleClick={backToNormal}>

                <form>
               
               {expand?
                    <input type='text' name="title" value={note.title} onChange={inputEvent} placeholder="title" autoComplete="off"/>:null}
               

                    <textarea rows='' column='' name="content" value={note.content} onChange={inputEvent} placeholder="write a note..." onClick={expandIt} ></textarea>

                    {expand?
                    <button className="plus_sign" onClick={addEvent}>➕</button>:null}

                </form>
            </div>
        </>
    );
};

export default CreateNote;