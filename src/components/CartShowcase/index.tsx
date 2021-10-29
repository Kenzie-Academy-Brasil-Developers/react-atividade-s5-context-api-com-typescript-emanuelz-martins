import { useCart } from '../../providers/cart';
import {
    Card,
    CartTitle,
    DeleteButton,
    Image,
    ItemCard,
    ListContainer,
    Product,
    ShowCase,
} from './styles';

const CartShowcase = () => {
    const { cart, deleteProduct } = useCart();

    return (
        <ShowCase>
            <CartTitle>Carrinho de Compras</CartTitle>
            <ListContainer>
                {cart.map((product, index) => (
                    <ItemCard key={index}>
                        <Card>
                            <picture>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                />
                            </picture>
                            <Product>{product.title}</Product>
                            <p>Preço: {product.price}</p>
                            <DeleteButton
                                onClick={() => deleteProduct(product)}
                            >
                                Remover
                            </DeleteButton>
                        </Card>
                    </ItemCard>
                ))}
            </ListContainer>
        </ShowCase>
    );
};

export default CartShowcase;
