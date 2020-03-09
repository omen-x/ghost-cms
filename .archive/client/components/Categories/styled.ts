import { PanelStack, Button } from '@blueprintjs/core';
import styled from 'styled-components';


export const CategoriesWrap = styled.div`
`;

export const PanelWrap = styled(PanelStack)`
  width: 500px;
  margin-top: 50px;
  min-height: 800px;

  & > * {
    border-right: none !important;
  }
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

export const AddCategoryWrap = styled.div``;

export const AddCategoryBtn = styled(Button)`
  margin-bottom: 0;
  margin-top: 20px;
  width: 440px;
`;

export const PopoverForm = styled.form`
  display: flex;
  padding: 20px;

  & > button {
    margin-left: 15px;
  }
`;
