import React from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import CardContainer from '../card-container/CardContainer';
import { toast } from 'react-toastify';
import { searchProducts } from '../../services/api';
import Pagination from '../../components/pagination/Pagination';
import NavBar from '../../components/navbar/NavBar';
import CustomLoader from "../../components/customloader/CustomLoader"
import 'react-toastify/dist/ReactToastify.css';
import './home.css';

const Home = () => {
    const [searchResults, setSearchResults] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false)

    const perPage = 6;

    const handleSearch = (query) => {
        setLoading(true);

        searchProducts(query)
            .then((results) => {
                setSearchResults(results);
                setCurrentPage(1);
            })
            .catch((error) => {
                console.error(error);
                toast.error('Error al buscar productos. Por favor, inténtalo nuevamente.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        return searchResults.slice(startIndex, endIndex);
    };

    return (
        <>
            { loading ?
                <CustomLoader text={"Cargando productos ..."}/>
                :
                <div>
                    <NavBar/>
                    <div className="home-container">
                        <header className='home-header'>
                            <h1 className='title'>Bienvenido a la tienda</h1>
                            <SearchBar onSearch={handleSearch} />
                        </header>
                        <div className="card-container">
                            <CardContainer products={getPaginatedData()} />
                        </div>
                        <div className="pagination-container">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={Math.ceil(searchResults.length / perPage)}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Home;
