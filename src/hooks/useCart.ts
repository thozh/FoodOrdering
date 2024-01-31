import { atom, useAtom } from "jotai";
import { CartItem, Product } from "../types";
import { randomUUID } from "expo-crypto";

const cartItemsAtom = atom<CartItem[]>([]);

const cartTotalAtom = atom((get) => {
  return get(cartItemsAtom).reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
});

const addItemAtom = atom(
  null,
  (
    get,
    set,
    { product, size }: { product: Product; size: CartItem["size"] }
  ) => {
    const items = get(cartItemsAtom);
    const existingItem = items.find(
      (item) => item.product.id === product.id && item.size === size
    );
    if (existingItem) {
      set(updateQuantityAtom, { itemId: existingItem.id, amount: 1 });
      return;
    }
    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
    set(cartItemsAtom, [newCartItem, ...items]);
  }
);

const updateQuantityAtom = atom(
  null,
  (get, set, { itemId, amount }: { itemId: string; amount: 1 | -1 }) => {
    set(cartItemsAtom, (prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }
);

export const useCart = () => {
  const [items, setItems] = useAtom(cartItemsAtom);
  const [total] = useAtom(cartTotalAtom);
  const [, addItem] = useAtom(addItemAtom);
  const [, updateQuantity] = useAtom(updateQuantityAtom);

  return { items, addItem, updateQuantity, total };
};
