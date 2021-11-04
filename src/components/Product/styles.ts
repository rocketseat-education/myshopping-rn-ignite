import styled from 'styled-components/native';

type TitleProps = {
  done: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.GRAY50};
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 5px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Title = styled.Text<TitleProps>`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  text-decoration-line: ${({ done }) => done ? 'line-through' : 'none'};
`;

export const Quantity = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY800}; 
`;

export const Options = styled.View`
    height: 100%;
    justify-content: space-around; 
`;
