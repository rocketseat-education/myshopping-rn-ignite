import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
  padding: 24px;  
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const Subtitle = styled.Text`
  font-size:14px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.PURPLE};
  margin-bottom: 32px;
`;

export const Account = styled.View`
  width: 100%;
  margin-top: 32px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;