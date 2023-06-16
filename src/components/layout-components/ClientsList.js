import React, { useEffect, useState } from "react";
import { Table } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import {APP_PREFIX_PATH} from "../../configs/AppConfig";

const ClientsList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
            setLoading(false);
        }
    };

    const navigateToProfile = (username) => {
        history.push(`${APP_PREFIX_PATH}/edit-profile/${username}`);
    }


    const columns = [
        {
            title: 'User',
            dataIndex: 'name',
            key: 'user',
            render: (text, record) => (
                <div onClick={() => navigateToProfile(record.username)}>
                    <UserOutlined />
                    <p>{text}</p>
                </div>
            )
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            render: (company) => (
                <div>
                    <p>{company.name}</p>
                    <p>{company.catchPhrase}</p>
                    <p>{company.bs}</p>
                </div>
            )
        },
    ];

    return (
        <Table
            dataSource={users}
            columns={columns}
            rowKey="id"
            loading={loading}
        />
    );
};

export default ClientsList;
