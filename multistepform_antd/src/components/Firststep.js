import React from 'react';
import moment from 'moment'
import { Form, Input, InputNumber, Radio, Checkbox, Button, DatePicker, TimePicker, Steps } from 'antd';

export default function Firststep() {
    
        return (
            <div >

                <h1>Personal Details : </h1>
                <hr />

                <Form.Item label="Date & Time">
                    <DatePicker defaultValue={moment()} format='YYYY-MM-DD' placeholder="YYYY-MM-DD" />
                    <TimePicker defaultValue={moment()} format='HH:mm:ss' placeholder="HH:mm:ss" />
                </Form.Item>



                <Form.Item label="First Name" name="fname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your First name!',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Last Name" name="lname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name!',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item name="email" label="Email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}>
                    <Input placeholder="email (e.g a@gmail.com)" />
                </Form.Item>

                <Form.Item name="gender" label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a gender!',
                        },
                    ]}>
                    <Radio.Group>
                        <Radio value="F">Female</Radio>
                        <Radio value="M">Male</Radio>
                        <Radio value="O">Undifferentiated</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="age" label="Age"
                    rules={[
                        {
                            type: 'number',
                            min: 0,
                            max: 110,
                        },
                    ]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name="transportation" label="Mode of transportation">
                    <Checkbox.Group>
                        <Checkbox value="Car"
                            style={{
                                lineHeight: '32px',
                            }}>
                            Car
                        </Checkbox>
                        <Checkbox value="Motorbike"
                            style={{
                                lineHeight: '32px',
                            }}>
                            Motorbike
                        </Checkbox>
                        <Checkbox value="Bicycle"
                            style={{
                                lineHeight: '32px',
                            }}>
                            Bicycle
                        </Checkbox>
                        <Checkbox value="Boat"
                            style={{
                                lineHeight: '32px',
                            }}>
                            Boat
                        </Checkbox>
                    </Checkbox.Group>
                </Form.Item>
            </div>
        )
    }
