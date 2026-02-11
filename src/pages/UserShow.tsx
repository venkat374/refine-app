import { useOne, useDelete, useNavigation } from "@refinedev/core";
import { useParams } from "react-router";

import { Button, Typography } from "antd";
const { Title, Text } = Typography;

import { Card, Space } from "antd/lib";

const UserShow: React.FC = () => {
  
  const { id } = useParams();
  
  const { query } = useOne({
    resource: "users",
    id: id!,
  });

  const { mutate } = useDelete();
  const { list } = useNavigation();

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  const user = query.data?.data;

  const handleDelete = () => {
    mutate(
      {
        resource: "users",
        id: id!,
      },
      {
        onSuccess: () => {
          list("users");
        },
      }
    );
  };

  return (
    <Card title={<span style={{ color: "white"}}>User Details</span>} style={{ width: 300, backgroundColor : "black"}}>
      <Space direction="vertical">
        <Text>Name: {user?.name}</Text>

        <Text> Age: {user?.age}</Text>

        <Text>Email: {user?.email}</Text>
        
        <Text>Gender: {user?.gender}</Text>

        <Text>Location: {user?.location}</Text>

        <Button onClick={handleDelete}>Delete</Button>
      </Space>
    </Card>
  );
};

export default UserShow;
