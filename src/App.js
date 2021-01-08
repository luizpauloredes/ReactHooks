import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Route from './components/Route'
import Search from './components/Search'
import Translate from './components/Translate'



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


const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A shade of blue ',
        value: 'blue'
    },
]


/*<Accordion items={items} />*/

const showAccordion= () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />
    }

}

const showList= () => {
    if (window.location.pathname === '/search') {
        return <Search />
    }

}

const showDropdown= () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />
    }

}

const showTranslate= () => {
    if (window.location.pathname === '/translate') {
        return <Translate />
    }

}

const showComponent = (route, component) => {
    return window.location.pathname === route ? component : null
}


export default () => {

    const [selected, setSelected] = useState(options[0]);
    
        return (
            <div>
                <Route path="/">
                    <Accordion items={items} />
                </Route>
                <Route path="/list">
                    <Search />
                </Route>
                <Route path="/dropdown">
                    <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected}/>
                </Route>
                <Route path="/translate">
                    <Translate />
                </Route>
            </div>
        );
}

  
    




