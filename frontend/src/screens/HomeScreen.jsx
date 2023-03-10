import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions.js';
import Meta from '../components/Meta';
import ProductCarousel from '../components/ProductCarousel';
import Paginate from '../components/Paginate'



const HomeScreen = ({ match }) => {

  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <h1>Welcome to Art & Tattoo</h1>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latests Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          < Row >
            {
              products.map((product) => (
                <Col key={product._id} sm={12} md={4} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))
            }
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )
      }
    </>
  )
}


export default HomeScreen