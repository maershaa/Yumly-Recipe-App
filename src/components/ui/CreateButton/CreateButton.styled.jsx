import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  margin-left: 20%;

  &:hover span {
    // стили для TooltipContent чтобы стал виден при ховере на кнопку
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;

  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textPrimary};

  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
    transform: translateY(-2px);
  }
`;
