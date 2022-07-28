import React, { Component } from 'react';  
import Authorized from '../../components/HOC/authorized.js'
import store from '../../redux/store.js'

class Cart extends Component
{  
  constructor(props){
    super(props) 
    this.state = {
      qty: 1,
      carts: [
        {
          name: 'barbie',
          price: 200,
          img: '/assets/theme/img/electronics/elcetronic-1.png'
        }
      ]
    }
    this.products = [
      {
        name: 'barbie',
        price: 200,
        img: '/assets/theme/img/electronics/elcetronic-1.png'
      },
      {
        name: 'superman',
        price: 300,
        img: '/assets/theme/img/women/girl-1.png'
      },
      {
        name: 't-shirt',
        price: 450,
        img: '/assets/theme/img/man/t-shirt-1.png'
      },
      {
        name: 'rover',
        price: 150,
        img: '/assets/theme/img/fashion/1.jpg'
      }
  ]
  }

  componentDidMount() {
    console.log('********Cart mounted********')
    console.log(store.getState().quantity.qty)
    if(store.getState().quantity.qty != this.state.qty) {
      this.setState({ ...this.state, qty: store.getState().quantity.qty })
    }

  }

  render() {  
    let { qty } = this.state
    return (  
      <>  
        <section id="cart-view">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="cart-view-area">
                  <div className="cart-view-table">
                    <form action="">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th></th>
                              <th></th>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td><a className="remove" href="#"><span className="fa fa-close"></span></a></td>
                            <td><a href="#"><img src={this.state.carts[0].img} alt="img" /></a></td>
                            <td><a className="aa-cart-title" href="#">{this.state.carts[0].name}</a></td>
                            <td>${this.state.carts[0].price}</td>
                            <td><input className="aa-cart-quantity" type="number" value={qty} onChange={(event) => this.setState({ ...this.state, qty: event.target.value})} /></td>
                            <td>${this.state.carts[0].price}</td>
                          </tr>
                          <tr>
                            <td colSpan="6" className="aa-cart-view-bottom">
                              <div className="aa-cart-coupon">
                                <input className="aa-coupon-code" type="text" placeholder="Coupon" />
                                <input className="aa-cart-view-btn" type="submit" value="Apply Coupon" />
                              </div>
                              <input className="aa-cart-view-btn" type="submit" value="Update Cart" />
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </form>
                    <div className="cart-view-total">
                      <h4>Cart Totals</h4>
                      <table className="aa-totals-table">
                        <tbody>
                          <tr>
                            <th>Subtotal</th>
                            <td>${this.state.carts[0].price}</td>
                          </tr>
                          <tr>
                            <th>Total</th>
                            <td>${this.state.carts[0].price}</td>
                          </tr>
                        </tbody>
                      </table>
                      <a href="#" className="aa-cart-view-btn">Proced to Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <ul className="aa-product-catg">
            { this.products.map((item, index) => { return (
                <li key={index}>
                    <figure>
                      <a className="aa-product-img" href="#"><img src="/assets/theme/img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                      <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                      <figcaption>
                      <h4 className="aa-product-title"><a href="#">{item.name}</a></h4>
                      <span className="aa-product-price">${item.price}</span><span className="aa-product-price"><del>${item.price}</del></span>
                      </figcaption>
                    </figure>                          
                    <div className="aa-product-hvr-content">
                      <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare"><span className="fa fa-exchange"></span></a>
                      <a href="#" data-toggle2="tooltip" data-placement="top" title="" data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View"><span className="fa fa-search"></span></a>
                      <input className="aa-cart-quantity" type="number" value={this.props.qty} onChange={(event) => this.quantityHandler(event)} />
                    </div>
                    <span className="aa-badge aa-sale" href="#">SALE!</span>
                </li>
              )}
              )
            }
          </ul>
        </div>
      </>  
    );  
  }  
}  

export default Authorized(Cart); 