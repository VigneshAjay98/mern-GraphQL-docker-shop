import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { 
   increment, 
   decrement, 
   compare, 
   noCompare 
} from '../../redux/actions/allActions.js'

class Home extends Component
{  
   constructor(props){
      super(props) 
   }

   quantityHandler(event) {
      console.log('event.target.value', event.target.value)
      if(event.target.value > this.props.qty) {
         console.log('increment')
         this.props.increment()
         console.log(this.props.qty)
      }else if (event.target.value < this.props.qty) {
         console.log('decrement')
         this.props.decrement()
         console.log(this.props.qty)
      }
      
   }

   render() {  
      return (  
         <>  
            <div className="container">
               <ul className="aa-product-catg">
                  {/* start single product item */}
                  <li>
                     <figure>
                        <a className="aa-product-img" href="#"><img src="/assets/theme/img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                        <figcaption>
                        <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                        <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                        </figcaption>
                     </figure>                          
                     <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="" data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View"><span className="fa fa-search"></span></a>
                        <input className="aa-cart-quantity" type="number" value={this.props.qty} onChange={(event) => this.quantityHandler(event)} />
                     </div>
                     {/* product badge */}
                     <span className="aa-badge aa-sale" href="#">SALE!</span>
                  </li>
                  {/* start single product item */}
                  {/* <li>
                     <figure>
                        <a className="aa-product-img" href="#"><img src="/assets/theme/img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                        <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                        <figcaption>
                        <h4 className="aa-product-title"><a href="#">T-Shirt</a></h4>
                        <span className="aa-product-price">$45.50</span>
                        </figcaption>
                     </figure>                         
                     <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="" data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View"><span className="fa fa-search"></span></a>
                        <input className="aa-cart-quantity" type="number" value={qty} onChange={(event) => this.setState({ ...this.state, qty: event.target.value})}></input>
                     </div>
                     <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                  </li>                         */}
               </ul>
            </div>
         </>  
      );  
   }  
}  

const mapStateToProps = state => {
   return {
      qty: state.quantity.qty
   }
}

const mapDispatchToProps = dispatch => {
   return {
      // compare: isChecked => dispatch(compare()),
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 