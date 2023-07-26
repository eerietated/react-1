type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray:Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '64',
        price: 1000,
        image: "/images/iphone-purple.webp"
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 800,
        image: "/images/iphone-13.webp"
    },
    {
        id: 3,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '256',
        price: 700,
        image: "/images/iphone-12.webp"
    },
    {
        id: 4,
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '64',
        price: 550,
        image: "/images/iphone-blue.webp"
    },
    {
        id: 5,
        title: 'iPhone 10',
        description: 'This is iPhone 10',
        type: 'phone',
        capacity: '64',
        price: 200,
        image: "/images/iphone-yellow.webp"
    },
    {
        id: 6,
        title: 'iPhone 14 Pro MAX',
        description: 'This is iPhone 14 Pro MAX',
        type: 'phone',
        capacity: '256',
        price: 1500,
        image: "/images/iphone-14PM.webp"
    },
]

export default productsArray