import React from 'react';
import styled from 'styled-components';

import { DonationEntry } from '../types/global.d'

import Table from './table'

const Divider = styled.hr`
  border-top: '2px solid #EBEBEB';
  margin: '20px 0';
`;

const Wrapper = styled.div`
  background: '#F4F4F4';
  padding: '50px';
`;

interface Props {
  dataset: DonationEntry[],
  errorMsg: string | null;
}

const Content: React.FC<Props> = ({ dataset }) => {
  return (
    <>
      <Wrapper>
        <h1>There are only 1,800 Giant Pandas remaining in the wild</h1>
        <p className="lead">
          Help us to save this beautiful animal by donating now.
        </p>
        <Table dataset={dataset} />
        <Divider />
      </Wrapper>
    </>
  )
};

export default Content;
