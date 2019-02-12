import React, {Component} from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import SnackCardsDisplayer from "./components/SnackCardsDisplayer";

export interface ISnack {
    name: string,
    id: number,
    price: number,
    imgUrl: string,
    likesCount: number,
    description: string
}

interface IState {
    snacks: ISnack[]
}

type IProps = object

class App extends Component<IProps, IState> {
    constructor(props: object) {
        super(props);
        this.state = {
            snacks: [
                {
                    name: 'Tatranky',
                    id: 1,
                    price: 10,
                    imgUrl: 'https://echo24.cz/img/561e3e4de4b0d451f24e38a5/500/260?_sig=HrAfdjXxswSNTj1KfAkrhya_ZybZ8_Nkv4Ww6Jbodu8',
                    likesCount: 12,
                    description: 'yummy'
                },
                {
                    name: 'Crikssimo',
                    id: 2,
                    price: 4,
                    imgUrl: 'https://cdn.myshoptet.com/usr/www.eshop-skrblik.cz/user/shop/big/28881_kokos-20g.jpg?5be00240',
                    likesCount: 20,
                    description: 'yummy'
                },
                {
                    name: 'Attack',
                    id: 3,
                    price: 6,
                    imgUrl: 'http://dqsnacks.com/wp-content/uploads/2017/07/attack-choco-550e59095a535b1600-1024x527.png',
                    likesCount: 40,
                    description: 'yummy'
                },
                {
                    name: 'Mila',
                    id: 4,
                    price: 5,
                    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71VpjZbdfsL._SL1500_.jpg',
                    likesCount: 60,
                    description: 'super yummy'
                },
                {
                    name: 'Seli - slane tycinky',
                    id: 5,
                    price: 5,
                    imgUrl: 'https://im9.cz/iR/importprodukt-orig/14b/14b3c25e246f1860ba1aa33548856ff7--mmf130x130.jpg',
                    likesCount: 60,
                    description: 'super yummy'
                }
            ]
        };
    }

    render() {
        const {snacks} = this.state
        return (
            <div className="App">
                <SnackCardsDisplayer
                    dataSource={snacks}
                />
            </div>
        );
    }
}

export default App;
