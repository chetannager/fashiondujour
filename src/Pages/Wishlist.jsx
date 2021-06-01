import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import { Link } from 'react-router-dom'
import { Icon, Table, IconButton, Tooltip, Button, Alert, Whisper } from 'rsuite';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as customerActions from "../actions/dCustomer"
import axios from 'axios';
import { CircularProgress, TableBody, TableRow, TableCell, Card } from '@material-ui/core';
import useTable from '../Component/useTable';


const addTooltip = (
    <Tooltip>Add to cart</Tooltip>
);
const wishTooltip = (
    <Tooltip>Add to Wishlist</Tooltip>
);
const detailTooltip = (
    <Tooltip>View Detail</Tooltip>
);
const filterTitle = {
    color: 'rgba(0,0,0,0.6)',
    fontWeight: '700',
    letterSpacing: '0.2px',
    fontSize: '14px',
}
const starStyle = {
    position: 'relative',
    left: '0px',
    top: '10px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(5px)',
    padding: '6px',
    width: '60px',
    color: 'yellow',
    textAlign: 'center',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '10px',

}

const titleStyle = {
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: '0.2px',
}

const nameStyle = {
    fontWeight: '400',
    color: 'white',
    fontSize: '13px',
    letterSpacing: '0.2px',
    height: '18px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
}

const dPriceStyle = {
    fontSize: '14px',
    textDecoration: 'line-through',
    color: 'rgba(255,255,255,0.5)',
    fontWeight: '600',
}

const discountStyle = {
    marginLeft: '8px',
    fontSize: '10px',
    color: 'red',
    fontWeight: '700',
}
const { Column, HeaderCell, Cell } = Table;

const fakeData = [
    {
        'id': '1',
        'product-pic': 'imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg',
        'product-name': 'Women Black & Off-White Tropical Printed A-Line Dress',
        'original': '1000',
        'discounted': '900',
        'status': 'available',
    },
    {
        'id': '2',
        'product-pic': 'imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg',
        'product-name': 'Women Black & Off-White Tropical Printed A-Line Dress',
        'original': '900',
        'discounted': '750',
        'status': 'Not Availbale',
    },
    {
        'id': '2',
        'product-pic': 'imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg',
        'product-name': 'Women Black & Off-White Tropical Printed A-Line Dress',
        'original': '900',
        'discounted': '750',
        'status': 'Not Availbale',
    },
];

const headCells = [
    {
        id: 'Id',
        label: '',
        disableSorting: true
    },
    {
        id: 'Product Name',
        label: 'Product Name'
    },
    {
        id: 'Price',
        label: 'Price'
    },
    {
        id: 'Actions',
        label: 'Actions',
        disableSorting: true
    }
]

const headingStyle = {
    color: '#30252F',
    fontWeight: '700',
    letterSpacing: '0.6',
    fontSize: '17px',
};

const contentStyle = {
    color: 'rgba(0,0,0,0.5)',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.5px',
}
const imgData = [
    {
        imgUrl: 'imgs/Womens/DressBerry/Dresses/Red Embroidered Neck Maxi Dress/img1.webp',
    },
    {
        imgUrl: 'imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img1.webp',
    },
    {
        imgUrl: 'imgs/Womens/DressBerry/Dresses/Women Navy Blue & White Printed Maxi Dress/img2.webp',
    },
    {
        imgUrl: 'imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img2.webp',
    },
    {
        imgUrl: 'imgs/Womens/DressBerry/Dresses/Women Peach-Coloured & Yellow Tulip Print Maxi Wrap Dress/img2.webp',
    },
    {
        imgUrl: 'imgs/Womens/DressBerry/Dresses/Women Peach-Coloured Printed Shirt Dress/img1.webp',
    },
];

const Wishlist = (props) => {

    const [isLoading, setLoading] = React.useState(false);
    const [wishlistProducts, setWishlistProducts] = React.useState([]);
    const [filterFn, setFilterFn] = React.useState({ fn: items => { return items; } })

    const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(wishlistProducts, headCells, [10, 25, 50, { value: wishlistProducts.length, label: 'All' }], filterFn)

    const getAllWishlistProducts = () => {
        setLoading(true);
        axios.post('http://fashiondujourapi.com/v1/wishlist', {
            customer_id: props.customerDetails["customer_id"]
        })
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.RESPONSE.successful) {
                        setWishlistProducts(response.data.RESPONSE.products);
                        setLoading(false);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const deleteProductFromWishlist = (product_id) => {
        axios.post('http://fashiondujourapi.com/v1/wishlist-remove', {
            customer_id: props.customerDetails["customer_id"],
            product_id: product_id
        })
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.RESPONSE == "Deleted") {
                        Alert.success('Successfully deleted to wishlist.');
                        getAllWishlistProducts();
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    React.useEffect(() => {
        props.checkIsLoggedIn();
        if (props.isLoggedIn) {
            getAllWishlistProducts();
        }
    }, [])

    return (
        <React.Fragment>
            <Header search={props.search} show={props.show} login={props.login} />
            {
                props.isLoggedIn ? (

                    isLoading ? (
                        <div className="mt-100 pt-100 pb-100 mb-100 container-fluid d-flex align-items-center justify-content-center" >
                            <CircularProgress color={'secondary'} />
                        </div>
                    ) : (
                        <div className="container-fluid d-none d-md-block mt-80">
                            <div className="d-flex flex-column align-items-center">
                                <Icon icon="heart-o" size="4x" />
                                <p className="mt-20" style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '0.5px' }}>My Wishlist</p>
                            </div>
                            <div className="mt-30 mb-30">
                                {
                                    wishlistProducts.length != 0 ? (
                                        <Card>
                                            <TblContainer>
                                                <TblHead />
                                                <TableBody>
                                                    {
                                                        recordsAfterPagingAndSorting().map(product => {
                                                            return (
                                                                <TableRow key={product.product_id}>
                                                                    <TableCell>
                                                                        <IconButton icon={<Icon icon="trash-o" />} circle size="lg" onClick={() => {
                                                                            deleteProductFromWishlist(product.product_id)
                                                                        }} />
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <div className="d-flex align-items-center">
                                                                            <img src={product.product_images[0]} height="65px" width="55px" style={{ borderRadius: '10px' }} alt="product" />
                                                                            <h6 className="ml-10" style={contentStyle}>{product.product_name}</h6>
                                                                        </div>
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <div className="d-flex align-items-center mt-10">
                                                                            <p style={{ color: 'red', fontWeight: '500', fontSize: '13px', textDecoration: 'line-through', marginRight: '5px' }}>₹{product.product_original_price}</p>
                                                                            <p style={{ color: '#30252F', fontWeight: '700', marginRight: '5px' }}>₹{product.product_discount_price}</p>
                                                                        </div>
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <div className="d-flex flex-column align-items-center justify-content-center">
                                                                            <p className="mb-10" style={{ color: 'rgba(0,0,0,0.5)', fontSize: '12px', fontWeight: '700', marginRight: '5px' }}>Add on: {product.created_at}</p>
                                                                            <Button appearance="primary" style={{ backgroundColor: '#30252F', fontSize: '12px', borderRadius: '30px', letterSpacing: '0.8', fontWeight: '600' }}>Add to Cart</Button>
                                                                        </div>
                                                                    </TableCell>

                                                                </TableRow>
                                                            )
                                                        })
                                                    }
                                                </TableBody>
                                            </TblContainer>
                                        </Card>
                                    ) : (
                                        <div>
                                            <h4 style={{textAlign:'center'}}>No Products found on Wishlist!</h4>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )

                ) : <div className="container d-none d-md-block mt-80 mb-40">
                    <div className="d-flex flex-column align-items-center">
                        <h4 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.3px' }}>PLEASE LOG IN</h4>
                        <p style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '500', letterSpacing: '0.3px' }}>Login to your favourit items in the Wishlist</p>
                        <img src="imgs/icon/fav.svg" height="300px" width="200px" alt="login" />
                        <Button onClick={props.login} className="w-25" appearance="ghost" style={{ fontSize: '18px', height: '45px', border: '2px solid #30252F', color: '#30252F', fontWeight: '700' }}>LOG IN</Button>
                    </div>
                </div>
            }
            {
                /**************************************************************************************************/
                /**************************************************************************************************/
                /******************************* MOBILE UI DESIGN *************************************************/
                /**************************************************************************************************/
                /**************************************************************************************************/
            }
            {
                props.isLoggedIn ? <div className="container-fluid d-md-none d-sm-block mt-60">
                    <div className="d-flex align-items-center">
                        <Icon icon="heart-o" style={{ fontSize: '20px' }} />
                        <p className="ml-10" style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '0.5px' }}>My Wishlist</p>
                    </div>
                    <div className="mt-20 mb-30">
                        <div className="row">
                            {
                                imgData.map((data) => {
                                    console.log(data);
                                    return <div component={Link} to="/detail" className="col-6 mb-20" style={{ borderRadius: '10px', paddingRight: '5px' }}>
                                        <div className="container" style={{ borderRadius: '10px', paddingRight: '10px', backgroundSize: '100% 100%', backgroundImage: 'linear-gradient(to top,rgba(0,0,0,1) 20%,rgba(0,0,0,0.2),rgba(255,255,255,0)),url("' + data.imgUrl + '")' }}>
                                            <div className="top-card d-flex flex-column pt-10" style={{ height: '150px' }}>
                                                <IconButton icon={<Icon icon="cart-plus" />} style={{ backgroundColor: 'rgba(0,255,0,0.1)', color: 'green' }} circle />
                                                <IconButton className="mt-10" icon={<Icon icon="trash" style={{ backgroundColor: 'rgba(255,0,0,0.1)', color: 'red' }} />} circle />
                                            </div>
                                            <div className="ml-0 pb-10">
                                                <h6 className="mt-10 mb-0" style={titleStyle}>DressBerry</h6>
                                                <hr className="mt-0 mb-10" style={{ width: '70px' }} />
                                                <p style={nameStyle}>Women Black &amp; Off-White Tropical Printed A-Line Dress</p>
                                                <div className="d-flex mb-10 mt-10">
                                                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: '700' }}>₹320</p>
                                                    {/* <Button appearance="primary" style={{ backgroundColor: 'rgba(255,255,255,0.5)', fontSize: '12px' }}><Icon icon="cart-plus" />&nbsp; &nbsp;ADD TO CART</Button> */}
                                                    <p className="ml-10 mt-0" style={dPriceStyle}>₹1000</p>
                                                    <p className="mt-0" style={discountStyle}>51% OFF</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div> : <div className="container d-md-none d-sm-block mt-80 mb-40">
                    <div className="d-flex flex-column align-items-center">
                        <h4 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.3px' }}>PLEASE LOG IN</h4>
                        <p style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '500', letterSpacing: '0.3px' }}>Login to your favourit items in the Wishlist</p>
                        <img src="imgs/icon/fav.svg" height="300px" width="200px" alt="login" />
                    </div>
                </div>
            }
            <Footer />
        </React.Fragment >
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.dCustomer.isLoggedIn,
        customerDetails: state.dCustomer.customerDetails
    }
}

const mapActionToProps = {
    checkIsLoggedIn: customerActions.checkIsLoggedIn,
    setLoggedIn: customerActions.setLoggedIn,
    setCustomerDetails: customerActions.setCustomerDetails
}

export default connect(mapStateToProps, mapActionToProps)(Wishlist)
