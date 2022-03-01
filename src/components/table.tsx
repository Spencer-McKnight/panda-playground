import React from 'react';

import { DonationEntry } from '../types/global.d'

interface Props {
    dataset: DonationEntry[],
}


const isDisplayed: (arg0: DonationEntry) => boolean = (value: DonationEntry) => {
    return value.isPublic === true;
}

//recursive function to avoid writing over variables
const mapHTML: (displayData: DonationEntry[], listItems: JSX.Element[], index: number) => React.FC | JSX.Element[]
    = (displayData: DonationEntry[], listItems: JSX.Element[], index: number) => {
        //create html to add to newlist
        const newListItem: JSX.Element = <li key={index}>{displayData[index].amount}</li>

        //add html to newList
        const newListItems: JSX.Element[] = [...listItems, newListItem];

        //pass newList into recursive function
        const newIndex: number = index + 1;

        if (newIndex < displayData.length) {
            return mapHTML(displayData, newListItems, newIndex);
        } else {
            return newListItems;
        }
    }

const getTableHTML: (arg0: DonationEntry[]) => JSX.Element = (dataset: DonationEntry[]) => {
    const displayData: DonationEntry[] = dataset.filter(isDisplayed);

    const HTML = mapHTML(displayData, [], 0)

    return <ul>{HTML}</ul>;
}

const Table: React.FC<Props> = ({ dataset }) => {
    const tableHTML = getTableHTML(dataset);

    return (
        tableHTML
    )
}

export default Table