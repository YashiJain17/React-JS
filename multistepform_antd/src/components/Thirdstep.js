import React from 'react';

import { Form, Input, InputNumber, Radio, Checkbox, Button, DatePicker, TimePicker, Steps } from 'antd';

export default function Thirdstep() {
    return (
        <div>
            <h1>Health and Fitness Regime : </h1>
            <hr />
            <Form.Item name="alcohol" label="Alcohol Use">
                <Radio.Group>
                    <Radio value="No">No</Radio>
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="Not Anymore">Not Anymore</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name="smoke" label="Smoking">
                <Radio.Group>
                    <Radio value="No">No</Radio>
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="Not Anymore">Not Anymore</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name="exercise" label="Exercise Type"
                rules={[
                    {
                        required: true,
                        message: 'Please select exercise type!',
                    },
                ]}>
                <Checkbox.Group>
                    <Checkbox value="running/jogging"
                        style={{
                            lineHeight: '32px',
                        }}>
                        running/jogging
                    </Checkbox>
                    <Checkbox value="cardio"
                        style={{
                            lineHeight: '32px',
                        }}>
                        cardio
                    </Checkbox>
                    <Checkbox value="strength training"
                        style={{
                            lineHeight: '32px',
                        }}>
                        strength training
                    </Checkbox>
                    <Checkbox value="idle or no exercise"
                        style={{
                            lineHeight: '32px',
                        }}>
                        idle or no exercise
                    </Checkbox>
                </Checkbox.Group>
            </Form.Item>

        </div>
    )
}