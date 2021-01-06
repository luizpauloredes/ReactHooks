import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
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


const options = [
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The color Green',
        value:'green'
    },
    {
        label:'A shade of blue ',
        value:'blue'
    },
]


/*<Accordion items={items} />*/ 

export default () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div>
             <Dropdown selected={selected}
             onSelectedChange={setSelected}
             options={options}/>
        </div>
    )
}



