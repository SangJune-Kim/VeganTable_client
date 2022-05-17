import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0 8rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 6.6875rem;
  height: 22.25rem;
`;

export const MenuItem1 = styled.li`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.06rem;
  padding: 1rem 0;
  cursor: pointer;

  &.isActive {
    color: #0fbaa3;
  }
`;

export const MenuItem2 = styled.li`
  font-weight: 500;
  letter-spacing: -0.06rem;
  color: #848484;
  padding: 0.8rem 0;

  cursor: pointer;

  &.isActive {
    color: #0fbaa3;
  }
`;
