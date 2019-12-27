import { PanelStack } from '@blueprintjs/core';
import styled from 'styled-components';


export const CategoriesWrap = styled.div`
`;

export const PanelWrap = styled(PanelStack)`
  width: 500px;
  margin-top: 50px;
  height: 300px;
`;

export const InnerPanel = styled.div`
  padding: 30px 0;
`;

export const CategoryBtnWrap = styled.div`
  display: flex;
  margin-bottom: 15px;

  & > button {
    width: 440px;
  }
`;

export const EditButtonsWrap = styled.div`
  margin-left: 20px;
`;
