import styled from 'styled-components';

export const TooltipContent = styled.span`
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
