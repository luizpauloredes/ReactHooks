import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'


const items = [
    {
        title: 'What is react?',
        content: 'The first description'
    },
    {

        title: 'Why use React?',
        content: 'The second description'
    },
    {

        title: 'How do you use React?',
        content: 'The third description'
    }

]


/*<Accordion items={items} />*/ 

const App = () => {
    return (
        <div>
            <Search/>
        </div>
    )
}


export default App;