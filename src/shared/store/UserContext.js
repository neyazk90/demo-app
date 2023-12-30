import { createContext } from "react";

const UserContext = createContext({
    users: [],
    posts:[]
});
export default UserContext;