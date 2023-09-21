const Cart = ({ cartItems, total }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Book Title</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartItems.map(item => (
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>{total}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Cart;