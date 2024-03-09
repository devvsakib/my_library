import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import NotFound from './pages/NotFound';

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book_details" element={<BookDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default Routers;
