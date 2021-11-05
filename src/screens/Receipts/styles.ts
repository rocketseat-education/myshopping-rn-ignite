import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
`;

export const PhotoInfo = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY900};
  font-family:${({ theme }) => theme.FONTS.REGULAR};
`;