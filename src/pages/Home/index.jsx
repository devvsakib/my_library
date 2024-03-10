import { Button, Modal, notification } from 'antd'
import BookForm from '../../components/Book/BookForm'
import Card from '../../components/Book/Card'
import CardV2 from '../../components/Book/CardV2'
import { v4 as uuidv4 } from 'uuid'
import LayoutSize from '../../components/Layouts/LayoutSize'
import { useEffect, useState } from 'react'
import UpdateForm from '../../components/Book/UpdateForm'

const Home = () => {
    const [visible, setVisible] = useState(false)
    const status = ['want to buy', 'brought', 'reading', 'finished', 'on the way', 'not available', 'not readed', 'want to read', 'lended', 'browed'];
    const showModal = () => {
        setVisible(true)
    }
    const [books, setBooks] = useState(() => {
        const storedBooks = JSON.parse(localStorage.getItem('booklist'));
        return storedBooks || [{
            "id": "a16cf996-ed3b-4e9b-ad17-806b23755e58",
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
            "id": "0b0bcc67-f149-47cf-8a1b-5b1dc82f63ee",
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

    const addBooks = (book) => {
        setBooks([...books, book])
        setVisible(false)
    }

    const [editMode, setEditMode] = useState(false)
    const [editData, setEditData] = useState({})

    const editBook = (id) => {
        const book = books.find((book, index) => book.id === id)
        setEditData(book)
        setEditMode(true)
    }

    const closeModal = () => {
        setEditMode(false)
        setVisible(false)
    }

    const deleteBook = (book) => {
        const newBooks = books.filter((item, index) => item.id !== book.id)

        notification.success({
            message: book.title,
            description: 'Book has been deleted successfully'
        })

        setBooks(newBooks)
    }
    const updateBooks = (book) => {
        const updatedBooks = books.find((item, index) => item.id === book.id)


        console.log(book)

        
        return
        setBooks(newBooks)
        setEditMode(false)
        setVisible(false)
    }

    useEffect(() => {
        localStorage.setItem('booklist', JSON.stringify(books))
    }, [books])

    console.log(books)

    return (
        <LayoutSize>
            <div className=''>
                <h2 className='mb-5 text-xl'>My Books</h2>
                <Button
                    onClick={showModal}
                >Add Book</Button>
                <Modal
                    title={editMode ? 'Update Book' : 'Add Book'}
                    open={visible || editMode}
                    onOk={closeModal}
                    onCancel={closeModal}
                    footer={null}
                >
                    {
                        editMode ? <UpdateForm book={editData} updateBooks={updateBooks} /> :
                            <BookForm editMode={editMode} addBooks={addBooks} setVisible={setVisible} />
                    }

                </Modal>
                <div className='grid md:grid-cols-3 gap-5 my-5'>
                    {
                        books?.map((book, index) => (
                            <Card key={index} book={book} editBook={editBook} deleteBook={deleteBook} />
                        ))
                    }
                </div>
            </div>
        </LayoutSize>
    )
}

export default Home