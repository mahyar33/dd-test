import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, minmax(min-content, max-content));
  gap: 0px 20px;
  grid-template-areas:
    'header header'
    '. aside'
    '. aside';
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, minmax(min-content, max-content));
    grid-template-areas:
      'header'
      '.'
      '.'
      'aside'
      '.'
      '.';
  }
`;
export const Header = styled.header`
  grid-area: header;
`;
export const Aside = styled.aside`
  grid-area: aside;
  justify-self: center;
  margin-bottom: 15px;
  .table__info {
    display: flex;
    a {
      color: blue;
    }
  }
  .table__info div {
    flex-grow: 1;
    width: 0;
  }
  h3 {
    margin: 0;
  }
  span {
    display: inline-block;
    margin-bottom: 15px;
  }
`;
export const TomatoImage = styled.img`
  width: 100%;
  max-width: 400px;
  margin: auto;
  display: block;
`;

export const Form = styled.section`
  button[type='submit'] {
    background: none;
    border: none;
    flex-direction: column;
    color: #0066ff;
    text-decoration: underline;
    cursor: pointer;
    float: right;
    color: blue;
    :focus {
      outline: none;
    }
  }
  form {
    max-width: 300px;
  }
  .form__item {
    display: flex;
    margin: 5px;
    margin-bottom: 10px;
    flex-wrap: wrap;
    justify-content: end;
    & > label {
      flex: 1 0 80px;
      max-width: 80px;
      font-weight: bold;
    }
    & > input {
      flex: 1;
    }
  }
`;
