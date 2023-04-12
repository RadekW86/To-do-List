import {StyledMain} from "./styled.js";

const Container = (prpos) => (
    <StyledMain>
        {prpos.children}
    </StyledMain>
);

export default Container;