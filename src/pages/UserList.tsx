import { useList, useNavigation, useDelete } from "@refinedev/core";
import { Button, Table, Card, Flex, Space } from "antd";

import { Color } from "antd/es/color-picker";

import { Typography } from "antd/lib";
const { Title, Text } = Typography;

export const UserList = () => {
  const { query, result } = useList({
    resource: "users",
  });



  const { show, edit, create } = useNavigation();
  const { mutate: deleteOne } = useDelete();

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card style={{ background: "black"}}>
      <Flex justify="space-between" align="center">
        
        <Title level={2} style={{ color: "white"}}>
          Users
        </Title>
        
        <Button type="primary" onClick={() => create("users")}>
          Create User
        </Button>

      </Flex>

      <Table dataSource={result.data} rowKey="id" pagination={{ pageSize: 10 }}>
        <Table.Column title="Name" dataIndex="name" render={(text) => <Text strong style={{ color: "white" }}>{text || "-"}</Text>} />

        <Table.Column title="Email" dataIndex="email" render={(text) => <Text type="secondary" style={{ color: "white" }}>{text || "-"}</Text>} />

        <Table.Column title="Actions" fixed="right"
          render={(_, user: any) => (
            <Space size="small">
              <Button size="small" onClick={() => show("users", user.id)}>View</Button>

              <Button size="small" onClick={() => edit("users", user.id)}>Edit</Button>

              <Button size="small" onClick={() => deleteOne({ resource: "users", id: user.id})}>Delete</Button>
            </Space>
          )}
        />
      </Table>
    </Card>
  );
};
