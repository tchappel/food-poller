import React from 'react'
import SnackCard from "../SnackCard";
import {AppContextConsumer} from "../../appContext";

const SnackCardsDisplayer: React.FunctionComponent = () => (
    <AppContextConsumer>
        {context => (
            <React.Fragment>
                {
                    context.snacks.map(snack => (
                        <SnackCard
                            snack={snack}
                            key={snack.id}
                        />
                    ))
                }
            </React.Fragment>
        )}
    </AppContextConsumer>
)

export default SnackCardsDisplayer
