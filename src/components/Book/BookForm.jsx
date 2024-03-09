import { useState } from 'react';
import { Button, DatePicker, Flex, Form, Input, Radio, Rate, Select, notification } from 'antd';
import LayoutSize from '../Layouts/LayoutSize';

const BookForm = ({ updateBooks }) => {
    const [form] = Form.useForm();
    const [book, setBook] = useState(
        {
            'author': '',
            'title': '',
            'price': '',
            'pages': '',
            'readedPage': '',
            'status': '',
            'recommended': '',
            'purchaseDate': '',
            'publication': '',
            'finishedDate': '',
            'startDate': '',
            'rating': '',
            'category': '',
            'description': ''
        }
    );
    const [isLended, setIsLended] = useState(null);
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const status = ['want to buy', 'brought', 'reading', 'finished', 'on the way', 'not available', 'not readed', 'want to read', 'lended', 'browed'];
    const [value, setValue] = useState(0);
    const [dates, setDates] = useState({})
    const [formLayout, setFormLayout] = useState('vertical');


    const fieldList = [
        {
            name: 'author',
            label: 'Author',
            type: 'text'
        },
        {
            name: 'title',
            label: 'Title',
            type: 'text'
        },
        {
            name: 'price',
            label: 'Price',
            type: 'text'
        },
        {
            name: 'pages',
            label: 'Pages',
            type: 'text'
        },
        {
            name: 'readedPage',
            label: 'Readed Page',
            type: 'text'
        },
        {
            name: 'status',
            label: 'Status',
            type: 'select',
            options: status
        },
        {
            name: 'recommended',
            label: 'Recommended',
            type: 'text'
        },
        {
            name: 'purchaseDate',
            label: 'Purchase Date',
            type: 'date'
        },
        {
            name: 'publication',
            label: 'Publication',
            type: 'text'
        },
        {
            name: 'finishedDate',
            label: 'Finished Date',
            type: 'date'
        },
        {
            name: 'startDate',
            label: 'Start Date',
            type: 'date'
        },
        {
            name: 'rating',
            label: 'Rating',
            type: 'rate'
        },
        {
            name: 'category',
            label: 'Category',
            type: 'text'
        },
        {
            name: 'description',
            label: 'Description',
            type: 'text'
        }
    ]

    const formItemLayout = formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        }
        : null;
    const buttonItemLayout = formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
        }
        : null;

    const handleRatingChange = (value) => {
        setValue(value);
    };

    const onChange = (dateString, field) => {
        setDates({ ...dates, [field]: dateString })
    };

    const onFinish = (values) => {
        const updateValues = {
            ...values,
            rating: value,
            ...dates
        }

        if (updateValues.rating === 0) {
            notification.error({
                message: 'Error',
                description: `Please fill the rating field`
            });
            return;
        }

        for (const key in updateValues) {
            if (updateValues[key] == undefined) {
                notification.error({
                    message: 'Error',
                    description: `Please fill the ${key} field`
                });
                return;
            }
        }

        setBook(updateValues);
        updateBooks(updateValues);
        // console.log('Received values of form: ', updateValues);
    };

    const renderForm = () => {
        return fieldList.map((field, index) => {
            switch (field.type) {
                case 'text':
                    return (
                        <Form.Item
                            key={field.name}
                            name={field.name}
                            label={field.label}
                        >
                            <Input />
                        </Form.Item>
                    )
                case 'select':
                    return (
                        <Form.Item
                            key={field.name}
                            name={field.name}
                            label={field.label}

                        >
                            <Select
                                showSearch
                                placeholder={`Select a ${field.label}`}
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                onChange={(value) => {
                                    if (value == 'lended') {
                                        setIsLended('Lended')
                                    }
                                    else if (value == 'browed') {
                                        setIsLended('Browed')
                                    }
                                    else {
                                        setIsLended(null)
                                    }
                                }}
                            >
                                {field.options.map((item, index) => (
                                    <Select.Option key={index} value={item}>{item}</Select.Option>
                                ))}

                            </Select>
                        </Form.Item>
                    )
                case 'date':
                    return (
                        <Form.Item
                            key={field.name}
                            name={field.name}
                            label={field.label}

                        >
                            <DatePicker className='w-full' onChange={(date, dateString) => onChange(dateString, field.name)} />
                        </Form.Item>
                    )
                case 'rate':
                    return (
                        <Form.Item
                            key={field.name}
                            name={field.name}
                            label={field.label}
                        >
                            <Rate tooltips={desc} onChange={handleRatingChange} value={value} />
                        </Form.Item>
                    )
                default:
                    return (
                        <Form.Item
                            key={field.name}
                            name={field.name}
                            label={field.label}
                        >
                            <Input />
                        </Form.Item>
                    )
            }
        })
    }


    return (
        <LayoutSize>
            <Form
                className='mt-5 p-10 gap-5 justify-start'
                {...formItemLayout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                layout={formLayout}
            >
                {renderForm()}
                {isLended && (
                    <Form.Item
                        name={isLended.toLowerCase() + 'To'}
                        label={isLended + ' To'}
                    >
                        <Input />
                    </Form.Item>
                )}
                <Form.Item {...buttonItemLayout}>
                    <Button htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </LayoutSize >
    )
}

export default BookForm