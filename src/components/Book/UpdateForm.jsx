import { useState } from 'react';
import { Button, DatePicker, Flex, Form, Input, Radio, Rate, Select, notification } from 'antd';
import LayoutSize from '../Layouts/LayoutSize';

const UpdateForm = ({ book, updateBooks }) => {
    const [form] = Form.useForm();
    const [isLended, setIsLended] = useState(null);
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const status = ['want to buy', 'brought', 'reading', 'finished', 'on the way', 'not available', 'not readed', 'want to read', 'lended', 'browed'];

    return (
        <LayoutSize>
            <Form
                form={form}
                layout="vertical"
                initialValues={{}}
                onFinish={(values) => updateBooks(values)}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    initialValue={book.title}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Author"
                    name="author"
                    initialValue={book.author}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Publication"
                    name="publication"
                    initialValue={book.publication}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    initialValue={book.price}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Pages"
                    name="pages"
                    initialValue={book.pages}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Readed Page"
                    name="readedPage"
                    initialValue={book.readedPage}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    initialValue={book.status}
                >
                    <Select>
                        {
                            status.map((status, index) => <Select.Option key={index} value={status}>{status}</Select.Option>)
                        }
                    </Select>
                </Form.Item>
                {
                    book.lendedTo && (
                        <Form.Item
                            label="Lended To"
                            name="lendedTo"
                            initialValue={book.lendedTo}
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                {
                    book.browedFrom && (
                        <Form.Item
                            label="Browed From"
                            name="browedFrom"
                            initialValue={book.browedFrom}
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                <Form.Item
                    label="Recommended"
                    name="recommended"
                    initialValue={book.recommended}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Purchase Date"
                    className='w-full'
                    name="purchaseDate"
                // initialValue={book.purchaseDate}
                >
                    <DatePicker className='w-full' />
                </Form.Item>
                <Form.Item
                    label="Finished Date"
                    className='w-full'
                    name="finishedDate"
                // initialValue={book.finishedDate}
                >
                    <DatePicker className='w-full' />
                </Form.Item>
                <Form.Item
                    label="Start Date"
                    name="startDate"
                // initialValue={book.startDate}
                >
                    <DatePicker className='w-full' />
                </Form.Item>
                <Form.Item
                    label="Rate"
                    name="rate"
                    initialValue={book.rate}
                >
                    <Rate defaultValue={book.rating} value={book.rating} tooltips={desc} />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="category"
                    initialValue={book.category}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    initialValue={book.description}
                >
                    <Input />
                </Form.Item>

                <Button htmlType="submit">Update</Button>

            </Form>
        </LayoutSize>
    )
}

export default UpdateForm