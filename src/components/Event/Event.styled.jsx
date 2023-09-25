import styled from 'styled-components';

export const StyledEvent = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: antiquewhite;
  border: 1px solid #e00404;
  position: relative;
  box-sizing: border-box;
`;

export const StyledTitle = styled.h4`
  margin-bottom: 10px;
`;

export const Type = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const StyledText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;