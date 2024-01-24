import {useState} from "react";
import PropTypes from 'prop-types';

export function NewToDoForm({onSubmit}) {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">
                    <img src="src/image/note-icon.png" className="note-icon" alt="Note image" width="25" height="25"/>
                    New Note
                </label>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                    className="input-line"
                />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}

NewToDoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};