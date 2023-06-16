// EditProfile.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Spin } from 'antd';

const Profile = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const data = await response.json();
                const foundUser = data.find(user => user.username === username);
                if (isMounted) {
                    setUser(foundUser);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchUser();
        return () => { isMounted = false };
    }, [username]);

    if (loading || !user) {
        return <Spin size="large" />;
    }

    return (
        <Form>
            <Form.Item label="Name">
                <Input defaultValue={user.name} />
            </Form.Item>
            <Form.Item label="Email">
                <Input defaultValue={user.email} />
            </Form.Item>
            <Form.Item label="Website">
                <Input defaultValue={user.website} />
            </Form.Item>
            {/* Add other fields as needed */}
        </Form>
    );
};

export default Profile;
