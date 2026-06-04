import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  margin-left: 20%;

  &:hover span {
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

export const Tooltip = styled.span`
  position: absolute;

  top: 50%;
  left: calc(100% + 12px);

  transform: translateY(-50%) translateX(-10px);

  padding: 8px 14px;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: ${({ theme }) => theme.shadows.main};

  font-size: 0.8rem;
  font-weight: 500;

  white-space: nowrap;

  opacity: 0;
  visibility: hidden;

  transition: all 0.25s ease;

  pointer-events: none;
`;
