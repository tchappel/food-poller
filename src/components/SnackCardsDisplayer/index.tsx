import React from 'react'
import SnackCard from "../SnackCard";
import {AppContextConsumer} from "../../Context";

const SnackCardsDisplayer = () => {
    return (
        <AppContextConsumer>
            {context => {
                if (context) {
                    const { snacks } = context.state
                    return (
                        <React.Fragment>
                            {
                                snacks.map(snack => {
                                    return (
                                        <SnackCard
                                            snack={snack}
                                            key={snack.id}
                                        />
                                    )
                                })
                            }
                        </React.Fragment>
                    )
                }
            }}
        </AppContextConsumer>
    )
}

export default SnackCardsDisplayer