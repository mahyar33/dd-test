import styled from 'styled-components';

export const GrayTable = styled.table`
  th {
    background: #efefef;
  }
  td,
  th {
    padding: 10px;
  }
  margin-bottom: 20px;
  table-layout: fixed;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
