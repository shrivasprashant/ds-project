import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove,updateQuantity } from './store/cartSlice';

const Cart = () => {
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch(remove(id));
    };
    const updateItemQuantity = (id, quantity) => {
        if(quantity>=0){
        dispatch(updateQuantity({ id, quantity }));
        }
    };

    const total = products.reduce((sum, item) => sum + item.quantity * item.price, 0);
    if (products.length === 0) {
        return (<div className="flex items-center justify-center h-screen">
        <div className="text-center">
            <p className="text-2xl font-semibold text-blue-500">Cart is empty</p>
        </div>
    </div>)
    }

    const card = products.map((item) => (
        <div key={item.id} className='flex items-center justify-between p-4 border-b'>
            <div className='flex items-center'>
                <img src={item.img} alt={item.name} className='w-20 h-20 object-cover rounded-lg mr-4' />
                <div>
                    <h3 className='text-lg font-semibold'>{item.name}</h3>
                    <p className='text-gray-700 mt-2'>Price: RS.{item.price}</p>
                    <p className='text-gray-700 mt-2'>{item.des}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600' onClick={() => removeItem(item.id)}>Remove</button>
                <div className='flex items-center border border-gray-300 rounded-lg px-2'>
                    <button className='text-gray-500 hover:text-gray-700' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <p className='mx-2 text-black'>{item.quantity}</p>
                    <button className='text-gray-500 hover:text-gray-700' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
            </div>
            <div>
                <p className='font-semibold text-black'>Total: RS.{item.quantity* item.price}</p>
                

            </div>
        </div>
    ));

    return (
        <div> 
            {card}
            <div className='flex justify-between p-4 '>
            <div className='p-4'>
    <p className='font-semibold text-2xl text-blue-500'>Overall Total: RS.{total}</p>
</div>
<div className='flex justify-end p-4'>
    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600'>Checkout</button>
</div>
</div>
        </div>
    );
};

export default Cart;
