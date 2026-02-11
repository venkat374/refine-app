import { useForm, Create } from "@refinedev/antd";

import { Radio } from "antd";

import {
  Form,
  Input,
  InputNumber,
} from 'antd';

const UserCreate = () => {
  const { formProps, saveButtonProps } = useForm({
      resource: "users",
      action: "create",
      redirect: "list",
    });

  return (
    <Create saveButtonProps={saveButtonProps} title="Create User">
      <Form
        {...formProps}
        style={{ maxWidth: 600 }}
        layout="vertical"
        variant="filled"
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Age" name="age">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Gender" name="gender">
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Location" name="location">
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};

export default UserCreate;