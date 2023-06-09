import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.background};
  width: 320px;
  padding-top: 16px;

  padding-left: 20px;
  padding-right: 20px;

  ${p => p.theme.mq.tablet} {
    justify-content: space-between;
    align-items: center;
    width: 768px;
    height: 48px;
    padding-top: 24px;

    padding-left: 32px;
    padding-right: 32px;
  }

  ${p => p.theme.mq.desktop} {
    width: 1280px;
    padding-right: 16px;
    padding-left: 16px;
    margin: 0 auto;
    height: 48px;
  }
`;

export const MenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 11;
  padding: 0;
  background-color: transparent;
  border: ${p => p.theme.borders.none};
  transition-property: transform;
  transition-duration: 500ms;
  width: 40px;
  height: 40px;

  & > svg {
    fill: black;
  }

  &:hover {
    color: ${p => p.theme.colors.accent};
    text-decoration-line: none;
    transform: scale(1.5);
  }
  &:hover svg {
    text-decoration: none;

    fill: ${p => p.theme.colors.accent};
  }
  ${p => p.theme.mq.mobileOnly} {
    margin-left: 158px;
  }
  ${p => p.theme.mq.desktop} {
    display: none;
  }
  ${p => p.theme.mq.notDesktop} {
    display: hidden;
  }
`;

export const Burger = styled.div`
  display: flex;
  align-content: center;
`;

export const ListMenu = styled.nav`
  ${p => p.theme.mq.mob} {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: flex-start;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 16px 20px;

    background-color: #fdf7f2;
    z-index: 10;
  }
  ${p => p.theme.mq.tablet} {
    justify-content: flex-start;
    padding-top: 88px;
  }
  ${p => p.theme.mq.desktop} {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${p => p.theme.colors.accent};
    transform: scaleX(0);
    transition: all 0.45s;
  }
  &:hover::after {
    transform: scaleX(1);
  }

  &.active:first-child {
    color: ${p => p.theme.colors.black};
    text-decoration-line: none;
  }
  &.active {
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.accent};
  }
  &:hover {
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.accent};
    text-decoration-line: none;
    transform: scale(1.3);
  }
  ${p => p.theme.mq.mob} {
    display: flex;
    text-align: center;
    margin-top: 40px;
    border-radius: 4px;
    text-decoration: none;
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.manrope};
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes[7]}px;
    line-height: 44px;
    letter-spacing: 0.04em;
    transition-property: transform;
    transition-duration: 500ms;
    &:nth-child(2) {
      margin-top: 60px;
    }
  }
  ${p => p.theme.mq.tablet} {
    margin-top: 60px;
  }

  ${p => p.theme.mq.desktop} {
    display: hidden;
  }
`;
export const LinkAuth = styled(NavLink)`
  ${p => p.theme.mq.mob} {
    padding: 6px 28px;
    border: 2px solid #f59256;
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes[1]}px;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-family: ${p => p.theme.fonts.manrope};
    font-style: normal;
    line-height: 19px;
    letter-spacing: 0.04em;
    text-decoration: none;

    color: ${p => p.theme.colors.black};
    transition-property: background-color, transform;
    transition-duration: 500ms;
    &:first-child {
      margin-right: 12px;
    }
  }
  &.active,
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    text-decoration-line: none;
    transform: scale(1.1);
  }
`;

export const AuthNavigate = styled.div`
  display: flex;
  margin-top: 104px;
  ${p => p.theme.mq.tabletOnly} {
    display: none;
  }
`;

export const AuthNavigateTablet = styled.div`
  display: flex;

  ${p => p.theme.mq.mobileOnly} {
    display: none;
  }
  ${p => p.theme.mq.tablet} {
    margin-left: auto;
    margin-right: 25px;
  }
  ${p => p.theme.mq.desktop} {
    margin-left: 354px;
  }
`;

export const LinkAuthTablet = styled(NavLink)`
  padding: 6.5px 28px;
  border: 2px solid #f59256;
  border-radius: 40px;
  background-color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-family: ${p => p.theme.fonts.manrope};
  font-style: normal;
  line-height: 27px;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  transition-property: background-color, color;
  transition-duration: 500ms;
  &:first-child {
    margin-right: 12px;
  }

  &.active,
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    text-decoration-line: none;
  }
  ${p => p.theme.mq.desktop} {
    padding: 8px 28px;
    &:first-child {
      margin-right: 20px;
    }
  }
`;
export const LinkAuthAccaunt = styled(NavLink)`
  display: flex;
  justify-content: center;
  background-color: ${p => p.theme.colors.accent};
  width: 164px;
  padding: 6px 28px;
  border: 2px solid #f59256;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-family: ${p => p.theme.fonts.manrope};
  font-style: normal;
  line-height: 19px;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition-property: background-color, transform;
  transition-duration: 500ms;
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accentActive};
    text-decoration-line: none;
    transform: scale(1.1);
  }
`;
