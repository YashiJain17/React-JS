import React from 'react'

import { Form, Input, InputNumber, Radio, Checkbox, Button, DatePicker, TimePicker, Steps } from 'antd';

export default function Secondstep() {
   
             return (
            <div>
                <h1>Address  </h1>
                <hr />
                <h3 style={{ marginLeft: "34%" }}>Address :</h3>

                <Form.Item label="Address Line 1" name="addL1"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your address!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Address Line 2" name="addL2">
                    <Input />
                </Form.Item>
                <Form.Item label="City" name="city"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your city!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="State" name="state"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your state!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Country" name="country"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your country!',
                        },
                    ]}>
                    <Input />
                </Form.Item>

            </div>
        )
    }
        