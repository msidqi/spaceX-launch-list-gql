import styled from "styled-components";

export const Cover = styled.div`
  width: 100%;
  max-height: 300px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 18.96%, black 100%),
    url(${({ src }) => src || 'https://d1qbemlbhjecig.cloudfront.net/prod/1.8.0/staticfiles/dist/app/bento-components/profile-grid/media/default-image.jpg?1921528efb1e84f4f11b3513f93b75af' });
  height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px 5px ${({fullRadius}) => fullRadius ? '5px 5px' : '0px 0px'};
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  transition: all 2s ease-in-out;
  &:hover {
    background-position: bottom;
  }
`;
