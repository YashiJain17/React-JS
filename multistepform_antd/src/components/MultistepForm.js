import React, { useState } from 'react';
import 'antd/dist/antd.css';
import moment from 'moment';
import { Form, Input, InputNumber, Radio, Checkbox, Button, DatePicker, TimePicker, Steps } from 'antd';
import Firststep from './Firststep';
import Secondstep from './Secondstep';
import Thirdstep from './Thirdstep';


const MultistepForm = () => {
    const { Step } = Steps;

    // const onFinish = (values) => {
    //     console.log('Success:', values);
    // };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    const [currentStep, setcurrentStep] = useState(0);
    const steps = [
        {
            step: 1,
            title: "Personal Details"
        },
        {
            step: 2,
            title: "Address"
        },
        {
            step: 3,
            title: "Health And Fitness Regime"
        }
    ]

    const handleNext = (e) => {
        setcurrentStep((prevValue) => currentStep + 1);
    }

    const handlePrev = () => {
        setcurrentStep((prevValue) => currentStep - 1);
    };

    
    const getContent = (step) => {
        switch (step) {
            case 0:
                return <Firststep />

            case 1:
                return <Secondstep />
            case 2:
                return <Thirdstep />
            default:
                return "Unknown Step"
        }
    }

    return (

        <div>
            <Steps current={currentStep} onChange={(curr) => setcurrentStep(curr)}>
                {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <br />
            {currentStep === steps.length ? (
                // alert("Submitted Successfully")
                <div><h1>Thanks For Submitting Details</h1> </div>
            ) : (
                <Form
                    name="basic"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 6 }}
                    style={{ marginTop: '4rem' }}
                    initialValues={{ remember: true }}
                    onFinish={handleNext}
                    onFinishFailed={onFinishFailed}
                    onSubmit={(e) => e.preventDefault()}
                >
                    {getContent(currentStep)}
                    {currentStep > 0 && (
                        <Button type="primary" style={{ margin: '0 8px' }} onClick={handlePrev}>
                            Previous
                        </Button>
                    )}
                    {currentStep < steps.length - 1 && (
                        <Button type="primary" htmlType="submit" >
                            Next
                        </Button>
                    )}
                    {currentStep === steps.length - 1 && (
                        <Button type="primary" htmlType="submit" onClick={()=>alert("Data Submitted Successfully")} >
                            Submit
                        </Button>
                    )}
                </Form>
            )}
        </div>
    )
}

export default MultistepForm