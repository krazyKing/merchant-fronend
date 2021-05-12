import React, {useState} from 'react'

function Merchants(props: { merchants: any }) {
    const {merchants: merchants} = JSON.parse(JSON.stringify(props));
    const [selectedOption, setSelectedOption] = useState(merchants[0]);

    return <div>
        <h1>Merchant List</h1>
        <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="" selected disabled hidden>Choose Merchant Here</option>
            {merchants.map((option, index) => (
                <option key={index} value={JSON.stringify(option)} defaultValue={'sss'}>
                    {option.name}
                </option>
            ))}
        </select>
        <div>
            <section>Selected option: {selectedOption}</section>
        </div>
        {/*<ul>*/}
        {/*    {(selectedOption).map((nestedList, index) => (*/}
        {/*        <ul key={index}>*/}
        {/*            <h4>List {index + 1}</h4>*/}
        {/*            {nestedList.map(item => (*/}
        {/*                <li key={item.id}>*/}
        {/*                    <div>{item.id}</div>*/}
        {/*                    <div>{item.firstname}</div>*/}
        {/*                    <div>{item.lastname}</div>*/}
        {/*                    <div>{item.year}</div>*/}
        {/*                </li>*/}
        {/*            ))}*/}
        {/*        </ul>*/}
        {/*    ))}*/}
        {/*</ul>*/}
    </div>;
}

export default Merchants
