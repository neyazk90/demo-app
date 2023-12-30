import React from "react";

const User = ({ activeUser }) => {
    return (
        <ul className="bg-gray-100 flex justify-between p-3 rounded-md flex-wrap items-center justify-center">
            <li className="pb-3">
                <strong> Name:</strong> {activeUser?.name} | {activeUser?.company?.catchPhrase}
            </li>
            <li>
                <div>
                    <strong>Address:</strong> {`${activeUser?.address?.street},  ${activeUser?.address?.city}, ${activeUser?.address?.zipcode}`}
                </div>
                <div>
                    <strong>Email:</strong> {activeUser?.email} | <strong> Phone: </strong>
                    {activeUser?.phone}{" "}
                </div>
            </li>
        </ul>
    );
};

export default User;
