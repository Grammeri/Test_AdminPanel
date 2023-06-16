import React, { useEffect, useState } from "react";
import { Table } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ClientsList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const columns = [
        {
            title: 'User',
            dataIndex: 'name',
            render: (text, record) => (
                <div>
                    <UserOutlined />
                    <p>{text}</p>
                </div>
            )
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Website',
            dataIndex: 'website',
        },
        {
            title: 'Company',
            dataIndex: 'company',
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
