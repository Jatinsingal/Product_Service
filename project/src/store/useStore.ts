import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
}

interface Order {
  id: string;
  customer: string;
  date: Date;
  total: number;
  status: string;
  items: number;
}

interface Customer {
  id: number;
  name: string;
  email: string;
  orders: number;
  spent: number;
  lastOrder: string;
  status: string;
}

interface StoreState {
  products: Product[];
  orders: Order[];
  customers: Customer[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  updateProduct: (id: number, product: Partial<Product>) => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (id: string, status: string) => void;
}

const useStore = create<StoreState>((set) => ({
  products: [
    {
      id: 1,
      name: 'Premium Headphones',
      category: 'Electronics',
      price: 199.99,
      stock: 45,
      status: 'In Stock'
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      category: 'Electronics',
      price: 49.99,
      stock: 30,
      status: 'Low Stock'
    },
    {
      id: 3,
      name: 'Gaming Keyboard',
      category: 'Electronics',
      price: 149.99,
      stock: 0,
      status: 'Out of Stock'
    }
  ],
  orders: [
    {
      id: '#ORD-001',
      customer: 'John Doe',
      date: new Date(2024, 1, 15),
      total: 299.99,
      status: 'Completed',
      items: 3
    },
    {
      id: '#ORD-002',
      customer: 'Jane Smith',
      date: new Date(2024, 1, 14),
      total: 149.99,
      status: 'Processing',
      items: 2
    },
    {
      id: '#ORD-003',
      customer: 'Mike Johnson',
      date: new Date(2024, 1, 14),
      total: 499.99,
      status: 'Pending',
      items: 4
    }
  ],
  customers: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      orders: 12,
      spent: 1499.99,
      lastOrder: '2024-02-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      orders: 8,
      spent: 899.99,
      lastOrder: '2024-02-10',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      orders: 5,
      spent: 499.99,
      lastOrder: '2024-01-25',
      status: 'Inactive'
    }
  ],
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product]
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id)
    })),
  updateProduct: (id, updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    })),
  addOrder: (order) =>
    set((state) => ({
      orders: [...state.orders, order]
    })),
  updateOrderStatus: (id, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    }))
}));

export default useStore;