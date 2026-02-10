import { useOne, useUpdate, useNavigation } from "@refinedev/core";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

type FieldType = {
  name?: string;
  email?: string;
};

export const UserEdit = () => {
  const { id } = useParams();
  const [form] = Form.useForm
}
  return (
    <Form 
      name="userEdit"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item<FieldType>
        label="Name"
        name="name"
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Email"
        name="email"
      >
        <Input />
      </Form.Item>

      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};
