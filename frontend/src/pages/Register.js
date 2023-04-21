import {
  AutoComplete,
  Button,
  Card,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
} from "antd";
import { useState } from "react";
const { Option } = Select;
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div className="w-full flex justify-center items-center h-[100vh] ">
      <Card style={{ boxShadow: "20px" }}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          scrollToFirstError
        >
          <div className=" w-[100%]  flex justify-between items-center ">
            <Form.Item
              name="number"
              label="Sponcer ID"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Button size="small" className="mb-4 ">
              Validate
            </Button>
            <Form.Item
              className="w-[300px] "
              name="name"
              label="Name"
              rules={[
                {
                  type: "name",
                  message: "The input is not valid name!",
                },
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="flex w-[100%]   justify-between items-center ">
            <Form.Item
              className="w-[350px] "
              name="radio-group"
              label="Position"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid name!",
                },
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="a">Org 1</Radio>
                <Radio value="b">Org 2</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="fathername"
              label="Father Name"
              className="w-[300px] "
              rules={[
                {
                  type: "email",
                  message: "The input is not valid father name!",
                },
                {
                  required: true,
                  message: "Please input your father name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="flex w-[100%]   justify-between items-center ">
            <Form.Item
              name="radio-group"
              className="w-[350px] "
              label="Gender"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid Gender!",
                },
                {
                  required: true,
                  message: "Please input your Gender!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="a">Male</Radio>
                <Radio value="b">Female</Radio>
                <Radio value="c">Other</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="dob"
              label="DOB"
              className="w-[300px] "
              rules={[
                {
                  type: "email",
                  message: "The input is not valid DOB!",
                },
                {
                  required: true,
                  message: "Please input your DOB!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>

          <div className="flex w-[100%]   justify-between items-center ">
            <Form.Item
              name="contact"
              label="Contact No"
              className="w-[350px] "
              rules={[
                {
                  required: true,
                  message: "Please input your contact!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              className="w-[300px] "
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>

          <div className="flex w-[100%]   justify-between items-center ">
            <Form.Item
              name="confirm"
              label="Country"
              className="w-[350px] "
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="State"
              className="w-[300px] "
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="flex w-[100%]   justify-between items-center ">
            <Form.Item
              name="confirm"
              label="City"
              className="w-[350px] "
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Pincode"
              className="w-[300px] "
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className=" flex justify-start items-center w-[100%]">
            <Form.Item name="intro" label="Address" className="w-[350px] ">
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>
          </div>

          <div className="flex w-[100%]   justify-between items-center ">
            <Form.Item
              name="confirm"
              label="Password"
              className="w-[350px] "
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              className="w-[300px] "
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            className="w-[350px] "
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button className="bg-[blue] text-white " htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Register;
