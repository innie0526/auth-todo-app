import styled from "styled-components";

const AuthTemplateBlock = styled.div`
position: absolute;
left:0;
right:0;
top:0;
bottom:0;
width:360px;
padding:2rem;
background:#ffff58;
box-shadow: 0 0 8px rgba(0,0,0,0.025);
`;

const AuthTemplate = () => {
    return(
        <AuthTemplateBlock>

        </AuthTemplateBlock>
    );
};

export default AuthTemplate;