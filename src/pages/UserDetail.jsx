import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Clock from "../components/Clock";
import PostCard from "../components/PostCard";
import User from "../components/User";

import UserContext from "../shared/store/UserContext";

const UserDetail = () => {
    const { users: USERS, posts: POSTS } = useContext(UserContext);
    const [activeUser, setActiveUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const { uid } = useParams();

    useEffect(() => {
        setActiveUser(...USERS.filter((user) => user.id === +uid));
        setUserPosts(POSTS.filter((post) => post.userId === +uid));
    }, []);

    return (
        <div className="detail-wrapper md:mx-10 lg:mx-20 p-5">
            <div className="container flex flex-wrap justify-between">
                <Link to=".." className="inline-block pb-5 text-2xl text-black">
                    &#8592; back
                </Link>
                <Clock />
            </div>

            {activeUser && <User activeUser={activeUser} />}

            {userPosts && <PostCard userPosts={userPosts} />}
        </div>
    );
};

export default UserDetail;
