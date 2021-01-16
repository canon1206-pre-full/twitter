import { dbService, storageService } from 'fbase';
import React, { useState } from 'react';
import 'styles/Styles.css';

const Cweet = ({ cweetObj, isOwner }) => {

    const [editing, setEditing] = useState(false);
    const [newCweet, setNewCweet] = useState(cweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this cweet?");
        if(ok) {
            await dbService.doc(`tweets/${cweetObj.id}`).delete();
            await storageService.refFromURL(cweetObj.attachmentUrl).delete();
        }
    }

    const toggleEditing = () => {
        setEditing((prev) => !prev);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`tweets/${cweetObj.id}`).update({
            text: newCweet
        })
        setEditing(false);
    }

    const onChange = (event) => {
        const {target : {value}} = event;
        setNewCweet(value);
    }

    return (
        <div>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        {isOwner && (
                            <>
                                <input
                                    type='text'
                                    placeholder="Edit your cweet"
                                    value={newCweet}
                                    onChange={onChange}
                                    required
                                />
                                <input type="submit" value="Update Cweet" />
                            </>
                        )}
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                    <h4 className="cweet__txt">{cweetObj.text}</h4>
                    {cweetObj.attachmentUrl && <img src={cweetObj.attachmentUrl} className="cweet_img" />}
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>Delete Cweet</button>
                            <button onClick={toggleEditing}>Edit Cweet</button>
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default Cweet;