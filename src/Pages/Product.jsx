import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import { NavLink, Link } from 'react-router-dom'
import { Icon, IconButton, Button, Whisper, Tooltip, Alert, CheckboxGroup, Checkbox, Loader } from 'rsuite';
import { connect } from 'react-redux';
import * as cartActions from "../actions/dCart"
import * as customerActions from "../actions/dCustomer"
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

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
    left: '6px',
    top: '10px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(5px)',
    padding: '7px',
    width: '90px',
    color: 'yellow',
    textAlign: 'center',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '14px',

}

const titleStyle = {
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: '0.2px',
}

const nameStyle = {
    fontWeight: '400',
    color: 'white',
    fontSize: '14px',
    letterSpacing: '0.2px',
    height: '18px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
}

const dPriceStyle = {
    fontSize: '15px',
    textDecoration: 'line-through',
    color: 'rgba(255,255,255,0.5)',
    fontWeight: '600',
}

const discountStyle = {
    marginLeft: '8px',
    fontSize: '14px',
    color: 'red',
    fontWeight: '700',
}
const discountStyle1 = {
    marginLeft: '8px',
    fontSize: '10px',
    color: 'red',
    fontWeight: '700',
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

const Product = (props) => {
    const [isFilterApplied, setIsFilterApplied] = React.useState(false);
    const [isLoading, setLoading] = React.useState(true);
    const [products, setProducts] = React.useState([]);
    const [filterProducts, setfilterProducts] = React.useState([]);
    const [categoriesByproducts, setCategoriesByproducts] = React.useState([]);

    const getAllProducts = (categoryId) => {
        axios.get('http://fashiondujourapi.com/v1/products/' + categoryId)
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.success) {
                        setProducts(response.data.products);
                        var temp = [];
                        response.data.products.map((product) => {
                            temp.push(product.sub_category_name);
                        });
                        temp = temp.filter(function (item, pos) {
                            return temp.indexOf(item) == pos;
                        })
                        setCategoriesByproducts(temp);
                        setLoading(false);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const addProductToWishlist = (product_id) => {
        if (props.isLoggedIn) {
            axios.post('http://fashiondujourapi.com/v1/wishlist-add', {
                customer_id: props.customerDetails["customer_id"],
                product_id: product_id
            })
                .then(function (response) {
                    if (response.status === 200) {
                        if (response.data.successful) {
                            Alert.success('Successfully added to wishlist.');
                        }
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            props.login();
        }
    }

    React.useEffect(() => {
        getAllProducts(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]);
    }, [props])


    return (
        <React.Fragment>
            <Header show={props.show} login={props.login} isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} setLogout={props.setLogout} />
            {
                /************************************************************************************************/
                /************************************************************************************************/
                /******************************************* WEBSITE UI DESIGN **********************************/
                /************************************************************************************************/
                /************************************************************************************************/
            }

            {
                isLoading ? (
                    <div className="mt-100 pt-100 pb-100 mb-100 container-fluid d-flex align-items-center justify-content-center">
                        <CircularProgress color={'secondary'} />
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="container-fluid d-none d-md-block mt-80">
                            <div className="row">
                                <div className="col-md-2" style={{ position: 'sticky', top: '20px' }}>
                                    <h6 style={{ fontWeight: 'bold', color: '#30252F', letterSpacing: '0.2px' }}>FILTER</h6>
                                    <hr className="mt-0 mb-20" style={{ borderTop: '1px solid rgba(0,0,0,0.3)' }} />
                                    <CheckboxGroup name="checkboxList">
                                        {
                                            categoriesByproducts.length != 0 ? (
                                                <React.Fragment>
                                                    <p style={{ fontWeight: 'bold', color: '#30252F', letterSpacing: '0.2px' }}>Category</p>
                                                    {
                                                        categoriesByproducts.map((category) => {
                                                            return (
                                                                <React.Fragment>
                                                                    <Checkbox value={category} onChange={(e) => {

                                                                    }}><p style={filterTitle}>{category} </p></Checkbox>
                                                                </React.Fragment>
                                                            )

                                                        })
                                                    }
                                                </React.Fragment>
                                            ) : (
                                                <div></div>
                                            )
                                        }
                                        <hr className="mt-10 mb-20" style={{ borderTop: '1px solid rgba(0,0,0,0.3)' }} />
                                        <p style={{ fontWeight: 'bold', color: '#30252F', letterSpacing: '0.2px' }}>Brand</p>
                                        <Checkbox><p style={filterTitle}>Tokyo Talkies</p></Checkbox>
                                        <Checkbox ><p style={filterTitle}>H &amp; M</p></Checkbox>
                                        <Checkbox ><p style={filterTitle}>DressBerry</p></Checkbox>


                                        <hr className="mt-10 mb-20" style={{ borderTop: '1px solid rgba(0,0,0,0.3)' }} />
                                        <p style={{ fontWeight: 'bold', color: '#30252F', letterSpacing: '0.2px' }}>Price</p>
                                        <Checkbox><p style={filterTitle}>₹400-₹700</p></Checkbox>
                                        <Checkbox ><p style={filterTitle}>₹800-₹1200</p></Checkbox>
                                        <Checkbox ><p style={filterTitle}>₹1200-₹2000</p></Checkbox>
                                        <Checkbox ><p style={filterTitle}>₹2000-₹3000</p></Checkbox>
                                    </CheckboxGroup>
                                </div>
                                <div className="col-md-10">
                                    <div className="row">
                                        {
                                            products.map((product) => {
                                                return <div className="col-md-3 mb-30" style={{ borderRadius: '10px' }}>
                                                    <div className="container-fluid" style={{ borderRadius: '10px', paddingRight: '30px', backgroundSize: '100% 100%', backgroundImage: 'linear-gradient(to top,rgba(0,0,0,1) 20%,rgba(0,0,0,0.2),rgba(255,255,255,0)),url("' + product.product_images[0] + '")' }}>
                                                        <div className="w-100 top-card" style={{ height: '260px' }}>
                                                            <p style={starStyle}><Icon icon="star" style={{ color: 'yellow', fontSize: '14px' }} />&nbsp;&nbsp; {product.product_current_rating} | {product.product_max_rating}</p>
                                                            <div className="d-flex align-items-center ml-20 justify-content-center">
                                                                <Whisper placement="top" trigger="hover" speaker={addTooltip}>
                                                                    <IconButton onClick={() => {
                                                                        if (props.isLoggedIn) {
                                                                            props.addToCart({
                                                                                "product_id": product.product_id,
                                                                                "product_name": product.product_name,
                                                                                "product_description": product.product_description,
                                                                                "product_images": product.product_images[0],
                                                                                "product_discount_price": product.product_discount_price,
                                                                                "category_id": product.category_id,
                                                                                "sub_category_id": product.sub_category_id,
                                                                                "product_qty": 1,
                                                                                "product_total_price": product.product_discount_price

                                                                            });
                                                                        } else {
                                                                            props.login();
                                                                        }
                                                                    }} className="button-1 mr-10" icon={<Icon icon="plus" />} circle size="lg" />
                                                                </Whisper>
                                                                <Whisper placement="top" trigger="hover" speaker={wishTooltip}>
                                                                    <IconButton onClick={() => {
                                                                        addProductToWishlist(product.product_id);
                                                                    }} className="button-2 mr-10" icon={<Icon icon="cart-plus" />} circle size="lg" />
                                                                </Whisper>
                                                                <Link to={"/product/detail/" + product.product_id}>
                                                                    <Whisper placement="top" trigger="hover" speaker={detailTooltip}>
                                                                        <IconButton className="button-3" icon={<Icon icon="info" />} circle size="lg" />
                                                                    </Whisper>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="ml-10 pb-10">
                                                            <h5 className="mt-10 mb-10" style={titleStyle}>{product.product_name}</h5>
                                                            <hr className="mt-0 mb-10" style={{ width: '70px' }} />
                                                            <p style={nameStyle}>{product.product_name}</p>
                                                            <div className="d-flex mt-10">
                                                                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', fontWeight: '700' }}>₹{product.product_discount_price}</p>
                                                                <p className="ml-10 mt-0" style={dPriceStyle}>₹{product.product_original_price}</p>
                                                                <p className="mt-0" style={discountStyle}>{product.product_discount_percentage}% OFF</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div >
                        {
                            /************************************************************************************************/
                            /************************************************************************************************/
                            /******************************************* MOBILE UI DESIGN **********************************/
                            /************************************************************************************************/
                            /************************************************************************************************/
                        }
                        <div className="container-fluid d-sm-block d-md-none mt-60">
                            <div className="mt-20 mb-30">
                                <div className="row">
                                    {
                                        products.map((product) => {
                                            //console.log(data);
                                            return <div className="col-6 mb-20" style={{ borderRadius: '5px', paddingRight: '5px' }}>
                                                <Link to="/detail">
                                                    <div className="container" style={{ borderRadius: '10px', paddingRight: '10px', backgroundSize: '100% 100%', backgroundImage: 'linear-gradient(to top,rgba(0,0,0,1) 20%,rgba(0,0,0,0.2),rgba(255,255,255,0)),url("' + product.product_images[0] + '")' }}>
                                                        <div className="ml-0 pt-100 pb-10">
                                                            <h6 className="mt-30  mb-0" style={titleStyle}>{product.product_name}</h6>
                                                            <hr className="mt-0" style={{ width: '70px', marginBottom: '7px' }} />
                                                            <p style={nameStyle}>Women Black &amp; Off-White Tropical Printed A-Line Dress</p>
                                                            <div className="d-flex mb-10">
                                                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: '700' }}>₹320</p>
                                                                <p className="ml-10 mt-0" style={dPriceStyle}>₹1000</p>
                                                                <p className="mt-0" style={discountStyle1}>51% OFF</p>
                                                            </div>
                                                        </div>
                                                        <div className="top-card pb-10 d-flex justify-content-between">
                                                            <Button className="w-100" appearance="primary" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'pink' }}><Icon icon="heart-o" /></Button>
                                                            <Button className="w-100" appearance="primary" style={{ marginLeft: '4px', backgroundColor: 'rgba(255,255,255,0.15)', color: 'white' }}><Icon icon="cart-plus" /></Button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
            <Footer />
        </React.Fragment >
    )
}


const mapStateToProps = state => {
    // console.log(state)
    return {
        cart: state.dCart.cart,
        payment: state.dCart.payment,
        isLoggedIn: state.dCustomer.isLoggedIn,
        customerDetails: state.dCustomer.customerDetails,
    }
}

const mapActionToProps = {
    addToCart: cartActions.addToCart,
    deleteToCart: cartActions.deleteToCart,
    checkIsLoggedIn: customerActions.checkIsLoggedIn,
    setLoggedIn: customerActions.setLoggedIn,
    setCustomerDetails: customerActions.setCustomerDetails
}

export default connect(mapStateToProps, mapActionToProps)(Product)
