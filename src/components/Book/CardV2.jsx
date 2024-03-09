import { BookTwoTone, CaretUpOutlined, CheckCircleOutlined, CheckCircleTwoTone, FlagOutlined, HeartTwoTone, ReadOutlined, SendOutlined, ShoppingTwoTone, SmileTwoTone, TagsTwoTone } from "@ant-design/icons"
import { Tooltip } from "antd"

const CardV2 = () => {
    const book = {
        "author": "ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর",
        "title": "আল-ফিকহুল আকবার",
        "price": "336",
        "pages": "440",
        "readedPage": "2",
        "status": "on the way",
        "lendedTo": "Saifur",
        "recommended": "yes",
        "purchaseDate": "2024-03-25",
        "publication": "আস-সুন্নাহ পাবলিকেশন্স",
        "finishedDate": "2024-03-04",
        "startDate": "2024-03-26",
        "rating": 2,
        "category": "ঈমান ও আকীদা",
        "description": "xzc"
    }
    return (
        <div className="p-5 rounded-md bg-white">
            {
                book.recommended && (
                    <div className="mb-5">
                        <p className="text-sm text-green-500">Recommended</p>
                    </div>
                )
            }
            <div className="flex flex-col md:flex-row items-start gap-5 justify-between">
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
                            <div className="flex gap-3 mt-3">
                                <p className="text-sm gap-2 flex items-center">
                                    <img src="/taka.webp" className="w-4 h-4" />
                                    {book.price}</p>
                                <p className="text-sm gap-2 flex items-center">
                                    <img src="/pages.png" className="w-4 h-4" />
                                    {book.pages} pages
                                </p>
                                <p className="text-sm gap-2 flex">
                                    <Tooltip title="Readed">
                                        <img src="/readed.png" className="w-4" />
                                    </Tooltip>
                                    {book.readedPage} pages
                                </p>
                            </div>
                        </div>
                    )
                }
                <div className="grid ">

                    <p className="text-sm gap-2 flex">
                        <Tooltip title="Lended on">
                            <img src="/lended.png" className="w-4" />
                        </Tooltip>
                        {book.lendedTo}
                    </p>

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

export default CardV2