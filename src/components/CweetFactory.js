import React, { useState } from 'react';
import { dbService, storageService } from 'fbase';
import {v4 as uuid} from "uuid";
import "styles/Styles.css"

const CweetFactory = ({ userObj }) => {
    const [attachment, setAttatchment] = useState("");
    const [cweet, setCweet] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        let attachmentUrl = "";

        if(attachment !== "") {
            const attatchmentRef = storageService
                .ref()
                .child(`${userObj.uid}/${uuid()}`);
            const response = await attatchmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }

        const cweetObj = {
            text: cweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        };

        await dbService.collection("tweets").add(cweetObj);
        setCweet("");
        setAttatchment("");
    }

    const onChange = (event) => {
        const { target:{value} } = event;
        setCweet(value);
    };

    const onFileChange = (event) => {    
        const { target:{files} } = event;
        const File = files[0];
        const reader = new FileReader();
        
        reader.onloadend = (finishedEvent) => {
            const { target: { result }} = finishedEvent;
            setAttatchment(result);
        }

        reader.readAsDataURL(File);
    }

    const onClearAttachment = () => {
        setAttatchment(null);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                value={cweet}
                onChange={onChange}
                type="text"
                placeholder="What's on your mind?"
                maxLength={120}
            />
            <input type="file" accept="image/*" onChange={onFileChange} />
            <input type="submit" value="Cweet" />

            {attachment && (
                <div>
                    <img src={attachment} width="130px" height="90px" />
                    <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}

        </form>
    );

};

export default CweetFactory;