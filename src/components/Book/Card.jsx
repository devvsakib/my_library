import { BarChartOutlined, BookTwoTone, CaretUpOutlined, CheckCircleOutlined, CheckCircleTwoTone, FlagOutlined, HeartTwoTone, MenuOutlined, ReadOutlined, SendOutlined, ShoppingTwoTone, SmileTwoTone, VerifiedOutlined } from "@ant-design/icons"
import { Button, Dropdown, Tooltip, Popconfirm } from "antd"
import { FaPenClip, FaTrash } from "react-icons/fa6";
const Card = ({ index, book, editBook, deleteBook }) => {
    const confirm = () => deleteBook(book);

    const menu = [
        {
            title: 'Edit',
            label: 'Edit',
            icon: <FaPenClip />,
            onClick: (e) => editBook(book.id)
        },
        {
            title: 'Delete',
            label: <Popconfirm
                title="Are you sure to delete this book?"
                description="Please confirm"
                onConfirm={confirm}
                okType="danger"
            > Delete
            </Popconfirm>,
            icon: <FaTrash />
        },
    ]

    return (
        <div key={index} className="p-5 rounded-md bg-white shadow-md">
            {
                book.recommended && (
                    <div className="mb-5 flex items-center justify-between">
                        <p className="text-sm text-green-500">Recommended</p>
                        <Dropdown menu={{ items: menu }} trigger={['click']}>
                            <div>
                                <Button
                                    type="text"
                                    icon={
                                        <MenuOutlined />
                                    }
                                />
                            </div>
                        </Dropdown>

                    </div>
                )
            }
            {
                book.title && (
                    <div className="grid items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold gap-2 flex items-center mb-2">
                                <img src="/book_.png" className="w-6 h-6" />
                                {book.title}
                            </h3>
                            <div className="grid gap-1">
                                <p className="text-sm gap-2 flex items-center">
                                    <img src="/pen.png" className="w-4 h-4" />
                                    {book.author}
                                </p>
                                <p className="text-sm gap-2 flex">
                                    <Tooltip title="Publication">
                                        <FlagOutlined />
                                    </Tooltip>
                                    {book.publication}
                                </p>
                                <p className="text-sm gap-2 flex">
                                    <img src="/category.png" className="w-5 h-5" />
                                    {book.category}
                                </p>
                            </div>
                        </div>
                        <div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 my-2">
                                <p className="text-sm gap-2 flex items-center">
                                    <img src="/taka.webp" className="w-4 h-4" />
                                    {book.price}</p>
                                <p className="text-sm gap-2 flex items-center">
                                    <img src="/pages.png" className="w-4 h-4" />
                                    {book.pages} pages
                                </p>
                                <p className="text-sm gap-2 flex">
                                    <Tooltip title="Lended on">
                                        <img src="/lended.png" className="w-4" />
                                    </Tooltip>
                                    {book.lendedTo}
                                </p>
                                <p className="text-sm gap-2 flex">
                                    <Tooltip title="Readed">
                                        <img src="/readed.png" className="w-4 h-4" />
                                    </Tooltip>
                                    {book.readedPage} pages
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="grid md:grid-cols-3 gap-4">
                {
                    book.purchaseDate && (
                        <div className="">

                            <p className="text-sm gap-2 flex">
                                <Tooltip title="Purchased on">
                                    <img src="/purchase.png" className="w-5 h-5" />
                                </Tooltip>
                                {book.purchaseDate}</p>
                        </div>
                    )
                }
                {
                    book.startDate && (
                        <div className="">
                            <p className="text-sm gap-2 flex">
                                <Tooltip title="Started on">
                                    <img src="/start__.png" className="w-5 h-5" />
                                </Tooltip>
                                {book.startDate}
                            </p>
                        </div>
                    )
                }
                {
                    book.finishedDate && (
                        <div className="">
                            <p className="text-sm gap-2 flex">
                                <Tooltip title="Finished on">
                                    <img src="/completed.png" className="w-5 h-5" />
                                </Tooltip>
                                {book.finishedDate}
                            </p>
                        </div>
                    )
                }
            </div>

            {
                book.status && (
                    <div className="mt-5">
                        <p className="text-sm">Status: {book.status}</p>
                    </div>
                )
            }
        </div >
    )
}

export default Card