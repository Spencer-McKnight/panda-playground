import React from 'react';

import { DonationEntry } from '../types/global.d'

interface Props {
    dataset: DonationEntry[],
    min: number,
    max: number,
}


const isDisplayed = (value: DonationEntry) => {
    return value.isPublic === true;
}

const Table: React.FC<Props> = ({ dataset, min, max }) => {
    let displayData: DonationEntry[];

    displayData = dataset.filter(isDisplayed);

    let tableHTML = dataset.map(function (item, i) {
        console.log(item)
        return <li key={i}>{item.amount}</li>
    })

    return (
        <ul>
            {tableHTML}
        </ul>
    )
}

export default Table