import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* Прячем всё, что выходит за границы экрана (особенно размытые края бликов) */
  overflow-x: hidden;

  background-color: ${({ theme }) => theme.colors.background};

  main {
    flex-grow: 1;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;

    /* блик 1 */
    &::before {
      content: '';
      position: absolute;
      width: 450px;
      height: 450px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      filter: blur(220px);

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: ${({ theme }) => theme.colors.accentSecondary};
      opacity: 0.3;
    }

    & > * {
      position: relative;
      z-index: 1;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    pointer-events: none; /* Чтобы сквозь них можно было кликать */
    z-index: 0;
    filter: blur(220px); /* Мощное размытие для мягкого свечения */
  }

  /* блик 2 */
  &::before {
    top: 5%;
    left: -150px;
    background: ${({ theme }) => theme.colors.accentBgWarning};
    opacity: 1;
  }

  /* блик 3 */
  &::after {
    bottom: 10%;
    right: -150px;
    background: ${({ theme }) => theme.colors.accentBgSuccess};
    opacity: 1;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;
