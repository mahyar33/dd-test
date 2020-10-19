import styled from 'styled-components/macro';

export const TabHeader = styled.div`
  overflow: hidden;
  border: 1px solid black;
  background-color: #f1f1f1;
  display: flex;
`;
export const Button = styled.button`
  background-color: inherit;
  word-break: normal;
  flex: 1 1 0;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 15px;
  transition: 0.3s;
  font-size: 17px;
  border-left: 1px solid black;
  &:first-child {
    border-left: none;
  }
  &:hover {
    background-color: #ddd;
  }
  &.active {
    background-color: white;
    font-weight: bold;
  }
`;

export const TabContent = styled.div`
  padding: 20px 15px;
  border: 1px solid black;
  margin-top: 20px;
`;
