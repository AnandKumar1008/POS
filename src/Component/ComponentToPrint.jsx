import React from "react"
import "./ComponentToPrint.css";
export const ComponentToPrint=React.forwardRef((props,ref)=>{
  const {cart,total}=props;
  return(
    <div ref={ref} className="print">
       <tabel className='table'>
                  <thead>
                    <tr>
                      <td>Products</td>
                      <td>price</td>
                      <td>Qty</td>
                      <td>Total</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart?cart.map((cartProduct,key)=>
                      <tr className='enter_product' key={key}>
                         
                          <td>{cartProduct.name}</td>
                          <td>{cartProduct.price}</td>
                          <td>{cartProduct.quantity}</td>
                          <td>{cartProduct.totalAmount}</td>
                      </tr>
                      
                      )
                      :"There Are No Products"
                    }

                  </tbody>
                  <tfoot>
                    <tr>
                      <td>SubTotal</td>
                      <td>{} EUR</td>
                      <td>{}item</td>
                    </tr>
                    <tr>
                      <td>VAT tax</td>
                      <td>{10} %</td>
                      <td>{} EUR</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td>{10} %</td>
                      <td>{} EUR</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <h3>${total}</h3>
                      </tr>
                    
                  </tfoot>
                </tabel>

    </div>
  )
})