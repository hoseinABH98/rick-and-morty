import styled from 'styled-components';

export const CharacterCardContainer = styled.div`
  display: flex;
  background-color: #3c3e44;
  border-radius: 10px;
  overflow: hidden;
  height: 220px;
  max-width: 600px;
  width: 100%;
`;

export const CharacterImage = styled.img``;

export const CharacterCardInner = styled.div`
  padding: 15px;

  div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.color};
`;
