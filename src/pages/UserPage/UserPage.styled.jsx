import styled from 'styled-components';
import { theme } from 'theme';

export const MainContainer = styled.div`
  width: 320px;
  margin: 0 auto;

  ${theme.mq.tablet} {
    width: 768px;

    margin: 0;
  }

  @${theme.mq.desktop} {
    width: 1280px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 61px 20px 80px 20px;

  ${theme.mq.tablet} {
    align-items: start;
    padding: 0;
    padding-top: 88px;
    padding-bottom: 100px;
  }
  ${theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 58px 0px 40px 0px;
  }
`;

export const UserWrapper = styled.div`
  ${theme.mq.tablet} {
    margin-left: -32px;
  }
  ${theme.mq.desktop} {
    margin-left: -16px;
    margin-right: 32px;
  }
`;

export const PetsWrapper = styled.div`
  padding: 0 32px;
  position: relative;
  width: 100%;
  ${theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 32px;
  }
  ${theme.mq.desktop} {
    display: block;
  }
`;

export const LoaderUser = styled.div`
  margin: auto;
`;
