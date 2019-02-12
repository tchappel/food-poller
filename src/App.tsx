import React, {Component} from 'react'
import './App.css'
import 'bulma/css/bulma.css'

interface ISnack {
    name: string,
    id: number,
    price: number,
    imgUrl: string,
    likesCount: number,
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
                    likesCount: 0,
                },
                {
                    name: 'Crikssimo',
                    id: 2,
                    price: 4,
                    imgUrl: 'https://cdn.myshoptet.com/usr/www.eshop-skrblik.cz/user/shop/big/28881_kokos-20g.jpg?5be00240',
                    likesCount: 0,
                },
                {
                    name: 'Attack',
                    id: 3,
                    price: 6,
                    imgUrl: 'http://dqsnacks.com/wp-content/uploads/2017/07/attack-choco-550e59095a535b1600-1024x527.png',
                    likesCount: 0,
                }
            ]
        };
    }

    render() {
        return (
            <div className="App">
                <a className="button">Button</a>
            </div>
        );
    }
}

export default App;
