import { addImgPlaceholder } from '@/assets/images';
import styled from 'styled-components';

export const ImgWrapper = styled.div`
  position: relative;

  display: flex;
  margin: 0 auto;

  background-image: url(${addImgPlaceholder});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  width: 250px;
  height: 250px;

  border: 2px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  cursor: pointer;

  input {
    position: absolute;

    top: 0;
    left: 0;
    opacity: 0;

    width: 100%;
    height: 100%;

    cursor: pointer;
  }
`;
