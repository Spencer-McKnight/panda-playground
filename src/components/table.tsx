import React from 'react';
import styled from 'styled-components';

import { DonationEntry } from '../types/global.d'

const StyledTable = styled.table`
    border: 1px solid #ddd;
    width: 100%;

    th {
        padding: 6px;
        border: 1px solid #ddd;
        color: white;
        background-color: black;
    }

    td {
        padding: 6px;
        border: 1px solid #ddd;
    }   
`;
interface Props {
    dataset: DonationEntry[],
    error: string | null,
}

const isoToDMY: (isoDate: string) => string = (isoDate: string) => {
    const formattedDate = isoDate.replace(/T.*/, '').split('-').reverse().join('/')
    return formattedDate;
}

const getTableHTML: (arg0: DonationEntry[]) => JSX.Element = (dataset: DonationEntry[]) => {
    const listNodes = dataset.map(function (item, i) {
        return <tr key={i}><td>{isoToDMY(item.date)}</td><td>{item.donor}</td><td>${item.amount}</td></tr>
    })

    return <StyledTable><tbody><tr><th>Date</th><th>Donor ID</th><th>Amount</th></tr>{listNodes}</tbody></StyledTable>;
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