import styled, { css } from 'styled-components';
import { Row } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

import { Section, Text } from '~/pages/home/index.styled';
import { Link as RawLink } from '~/components';

export { Text };

export const Link = styled(RawLink)``;

export const Container = styled(Section)`
  && {
    ${mixins.responsive()};
  }
`;

export const Subtitle = styled.span`
  font-size: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  max-height: ${(props) => props.height}px;
`;

export const LogosBox = styled(Row)`
  margin-top: 2rem;
  ${(props) =>
    props.isSmallScreen &&
    css`
      margin-bottom: 1rem;
    `}
`;

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid ${colors.T2};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
