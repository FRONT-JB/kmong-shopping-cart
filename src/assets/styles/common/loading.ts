import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  .loading {
    position: relative;
    width: 40px;
    height: 40px;
    text-align: center;
    animation: sk-rotate 2s infinite linear;
    &__item {
      display: inline-block;
      position: absolute;
      top: 0;
      width: 60%;
      height: 60%;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 100%;
      animation: sk-bounce 2s infinite ease-in-out;
      &:nth-child(2) {
        top: auto;
        bottom: 0;
        animation-delay: -1s;
      }
    }
  }

  @keyframes sk-rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`;
