type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray:Product[] = [
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '64',
        price: 1000,
    },
    {
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 800,
    },
    {
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '256',
        price: 700,
    },
    {
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '64',
        price: 550,
    },
    {
        title: 'iPhone 10',
        description: 'This is iPhone 10',
        type: 'phone',
        capacity: '64',
        price: 200,
    },
    {
        title: 'iPhone 14 Pro MAX',
        description: 'This is iPhone 14 Pro MAX',
        type: 'phone',
        capacity: '256',
        price: 1500,
    },
]

export default productsArray