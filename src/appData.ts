export interface IUser {
    name: string,
    id: number
    isAdmin: boolean
    likedSnacks: number[]
    imageUrl: string
}

export interface ISnack {
    name: string,
    id: number,
    price: number,
    imgUrl: string,
    likesCount: number,
    description: string
}

export interface IAppData {
    maxLikes: number,
    user: IUser,
    snacks: ISnack[],
}

export const appData: IAppData = {
    maxLikes: 20,
    user: {
        name: 'Tommy',
        id: 1,
        isAdmin: true,
        likedSnacks: [],
        imageUrl: 'https://media.licdn.com/dms/image/C4E03AQHzUoKplzvsvQ/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=1wrE1xAuKv64Om4dMiQhx0NqdZbT33uwxuKuQ2vNHco'
    },
    snacks: [
        {
            name: 'Tatranky',
            id: 1,
            price: 10,
            imgUrl: 'https://echo24.cz/img/561e3e4de4b0d451f24e38a5/500/260?_sig=HrAfdjXxswSNTj1KfAkrhya_ZybZ8_Nkv4Ww6Jbodu8',
            likesCount: 0,
            description: 'yummy'
        },
        {
            name: 'Crikssimo',
            id: 2,
            price: 4,
            imgUrl: 'https://cdn.myshoptet.com/usr/www.eshop-skrblik.cz/user/shop/big/28881_kokos-20g.jpg?5be00240',
            likesCount: 0,
            description: 'yummy'
        },
        {
            name: 'Attack',
            id: 3,
            price: 6,
            imgUrl: 'http://dqsnacks.com/wp-content/uploads/2017/07/attack-choco-550e59095a535b1600-1024x527.png',
            likesCount: 0,
            description: 'yummy'
        },
        {
            name: 'Mila',
            id: 4,
            price: 5,
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71VpjZbdfsL._SL1500_.jpg',
            likesCount: 0,
            description: 'super yummy'
        },
        {
            name: 'Seli - slane tycinky',
            id: 5,
            price: 5,
            imgUrl: 'https://im9.cz/iR/importprodukt-orig/14b/14b3c25e246f1860ba1aa33548856ff7--mmf130x130.jpg',
            likesCount: 0,
            description: 'super yummy'
        }
    ]
}

export const appFunctions = {
    addLikeToSnack: (snack: ISnack) => null,
    removeLikeFromSnack: (snack: ISnack) => null,
}