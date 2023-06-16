import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Spin } from 'antd';

const Profile = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
            const data = await response.json();
            setUser(data[0]);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching user:", error);
            setLoading(false);
        }
    };

    if (loading) {
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
