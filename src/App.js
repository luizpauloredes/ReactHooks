import React from 'react'
import Accordion from './components/Accordion'


const items = [
    {

        title: 'title 1',
        content: 'The first description'
    },
    {

        title: 'title 2',
        content: 'The second description'
    },
    {

        title: 'title 3',
        content: 'The third description'
    }

]

const App = () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}


export default App;