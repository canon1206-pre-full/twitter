import { dbService } from 'fbase';
import Cweet from 'components/Cweet';
import React, {useEffect, useState} from 'react';
import CweetFactory from 'components/CweetFactory';
import "styles/Styles.css";

const Home = ({ userObj }) => {
    const [cweets, setCweets] = useState([]);

    useEffect(() => {
        dbService.collection("tweets").onSnapshot((snapshot) => {
            const cweetArray = snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            }));
            setCweets(cweetArray);
            console.log(cweetArray);
        })
    }, []);

    return (
        <div className="main">
            <CweetFactory userObj={userObj} />
            <div className="cweets">
                {cweets.map((cweet) => (
                    <div className="cweet">
                        <Cweet
                            key={cweet.id}
                            cweetObj={cweet}
                            isOwner={cweet.creatorId === userObj.uid}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Home;