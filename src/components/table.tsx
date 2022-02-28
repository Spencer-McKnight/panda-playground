import React from 'react';

import { DonationEntry } from '../types/global.d'

interface Props {
    dataset: DonationEntry[],
}


const isDisplayed: (arg0: DonationEntry) => boolean = (value: DonationEntry) => {
    return value.isPublic === true;
}

const getTableHTML: (arg0: DonationEntry[]) => JSX.Element = (dataset: DonationEntry[]) => {
    let displayData: DonationEntry[] = dataset.filter(isDisplayed);

    let HTML = displayData.map(function (item, i) {
        return <li key={i}>{item.amount}</li>
    })

    return <ul> + {HTML} + </ul>;
}

const Table: React.FC<Props> = ({ dataset }) => {
    let tableHTML = getTableHTML(dataset);

    return (
        <ul>
            {tableHTML}
        </ul>
    )
}

export default Table