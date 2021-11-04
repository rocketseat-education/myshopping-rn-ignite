import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.GRAY50};
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 12px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const Path = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY800};
`;

export const Options = styled.View`
  height: 100%;
  justify-content: space-around;
`;