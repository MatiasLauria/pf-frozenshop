import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css';

const emptyUser = {
    nombre: '',
    apellido: '',
    email: '',
};

const Cart = () => {
    const navigate = useNavigate();
    const { cart, totalPrice, clearCart } = useCartContext();

    const [user, setUser] = useState(emptyUser);

    const capturarImputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleClick = () => {
        const order = {
            buyer: user,
            items: cart.map((product) => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
            total: totalPrice(),
        };

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(alert('Su orden se realizo con exito')).then(clearCart).then(navigate('/'));
    };

    if (cart.length === 0) {
        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    <p>No hay productos en el carrito</p>
                    <button className="returnHome">
                        <Link to="/">Volver a comprar</Link>
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            {cart.map((product) => (
                <ItemCart
                    key={product.id}
                    product={product}
                />
            ))}

            <div style={{ textAlign: 'center' }}>
                <p>TOTAL: {totalPrice()}</p>
            </div>

            <div style={{ textAlign: 'center' }}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    onChange={capturarImputs}
                    value={user.nombre}
                />

                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    onChange={capturarImputs}
                    value={user.apellido}
                />

                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={capturarImputs}
                    value={user.email}
                />

                <button
                    className="checkOut"
                    onClick={handleClick}
                >
                    Finalizar compra
                </button>
            </div>
        </>
    );
};

export default Cart;