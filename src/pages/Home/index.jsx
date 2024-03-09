import { Button, Modal } from 'antd'
import BookForm from '../../components/Book/BookForm'
import Card from '../../components/Book/Card'
import CardV2 from '../../components/Book/CardV2'
import LayoutSize from '../../components/Layouts/LayoutSize'
import { useEffect, useState } from 'react'

const Home = () => {
    const [visible, setVisible] = useState(false)
    const showModal = () => {
        setVisible(true)
    }
    const [books, setBooks] = useState(() => {
        const storedBooks = JSON.parse(localStorage.getItem('booklist'));
        return storedBooks || [{
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
        },
        {
            "author": "ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর",
            "title": "আল-ফিকহুল আকবার",
            "price": "336",
            "pages": "440",
            "readedPage": "2",
            "status": "on the way",
            "lendedTo": "Sakib",
            "recommended": "yes",
            "purchaseDate": "2024-03-25",
            "publication": "আস-সুন্নাহ পাবলিকেশন্স",
            "finishedDate": "2024-03-04",
            "startDate": "2024-03-26",
            "rating": 2,
            "category": "ঈমান ও আকীদা",
            "description": "xzc"
        }];
    });

    const updateBooks = (book) => {
        setBooks([...books, book])
        setVisible(false)
    }

    useEffect(() => {
        localStorage.setItem('booklist', JSON.stringify(books))
    }, [books])

    return (
        <LayoutSize>
            <div className=''>
                <h2 className='mb-5 text-xl'>My Books</h2>
                <Button
                    onClick={showModal}
                >Add Book</Button>
                <Modal
                    title="Add Book"
                    open={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    footer={null}
                >
                    <BookForm setVisible={setVisible} updateBooks={updateBooks} />
                </Modal>
                <div className='grid md:grid-cols-3 gap-5'>
                    {
                        books?.map((book, index) => (
                            <Card key={index} book={book} />
                        ))
                    }
                </div>
            </div>
        </LayoutSize>
    )
}

export default Home