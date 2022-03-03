import React from 'react';

import { DonationEntry } from '../types/global.d'

interface Props {
    dataset: DonationEntry[],
    error: string | null,
}


const isDisplayed: (arg0: DonationEntry) => boolean = (value: DonationEntry) => {
    return value.isPublic === true;
}

const getTableHTML: (arg0: DonationEntry[]) => JSX.Element = (dataset: DonationEntry[]) => {
    const displayData: DonationEntry[] = dataset.filter(isDisplayed);

    const listNodes = displayData.map(function (item, i) {
        return <li key={i}>{item.amount}</li>
    })

    return <ul>{listNodes}</ul>;
}

const Table: React.FC<Props> = ({ dataset, error }) => {
    if (error === null) {
        const tableHTML = getTableHTML(dataset);
        return (tableHTML)
    } else {
        return (<h2>The following error has occurred: {error}</h2>)
    }
}

export default Table