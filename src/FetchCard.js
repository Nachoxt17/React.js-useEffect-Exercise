import React, { useState, useEffect, useCallback } from 'react';
import getPosts from './Helpers/getPosts.js';
import getUser from './Helpers/getUser.js';

const FetchCard = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const updateUser = () => {
        getUser().then((newUser) => {
            setUser(newUser);
        });
    };

    const updatePosts = useCallback(() => {
        getPosts(user.id).then((newPosts) => {
            setPosts(newPosts);
        });
    }, [user.id]);

    useEffect(() => {
        updateUser();
    }, []);

    useEffect(() => {
        if (user?.id) {
            updatePosts();
        }
    }, [user, updatePosts]);

    return (
        <div>
            <h1>+-FetchCard:_</h1>
            <button onClick={updateUser}>Another User</button>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <br />
            <h2>Post - User:_ {user.id}</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FetchCard;
