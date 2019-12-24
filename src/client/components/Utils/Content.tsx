import styled from 'styled-components';


export const Content = styled.div`
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const FluidContent = styled(Content)`
  max-width: none;
`;

export const BodyWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
`;

export const PageWrap = styled.main`
  flex-grow: 1; 
`;

export const PageContent = styled(Content)`
  padding-top: 25px;
  padding-bottom: 25px;
`;
