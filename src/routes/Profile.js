import { authService, dbService } from 'fbase';
import React, { useState, useEffect } from 'react';
import Cweet from 'components/Cweet';
import { useHistory } from 'react-router-dom';
import "styles/Styles.css";

const Profile = ({ userObj, refreshUser }) => {
    const [myCweets, setCweets] = useState([]);
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const history = useHistory();

    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    const getMyCweets = async () => {
        const cweets = await dbService
            .collection("tweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt")
            .get();
        const myCweetObject = cweets.docs.map((doc) => doc.data());
        setCweets(myCweetObject);
        console.log(myCweets);
    }

    useEffect(() => {
        getMyCweets();
    }, []);

    const onChange = (event) => {
        const {
            target:{value}
        } = event;
        setNewDisplayName(value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName) {
            //update
            await userObj.updateProfile({
                displayName: newDisplayName
            });
            refreshUser();
        }
    }
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Display name"
                    value={newDisplayName}
                    onChange={onChange}
                />
                <input type="submit" value="Update profile" />
            </form>
            <button onClick={onLogOutClick}>Sign Out</button>

            {myCweets.map((cweet) => (
                <div className="cweet">
                    <Cweet
                        key={cweet.id}
                        cweetObj={cweet}
                        isOwner={cweet.creatorId === userObj.uid}
                    />
                </div>
            ))}
        </>
    );
};

export default Profile;