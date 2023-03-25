import styled from 'styled-components';

export const ModalContainer = styled('div')`
  max-height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
`;

export const CloseButton = styled('button')`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 24px;
  right: 24px;

  width: 44px;
  height: 44px;

  background-color: ${p => p.theme.colors.background};
  border-radius: 50%;

  transition-property: background-color;
  transition-duration: ${p => p.theme.transitions.durations.default};
  transition-timing-function: ${p => p.theme.transitions.functions.default};

  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;
