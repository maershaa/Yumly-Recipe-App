import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-around;

  border: 2px solid pink;
  margin: 0 auto;
  padding: 50px;
`;

export const ImgWrapper = styled.div`
  img {
    width: 100%;
    max-width: 500px;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div``;
