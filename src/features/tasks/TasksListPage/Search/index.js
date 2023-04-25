import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min.js";
import searchQueryParamName from "../searchQueryParamName.js";
import { StyledFormInput } from "../Input/index.js";
import { StyledWrapper } from "./styled.js";

const Search = () => {
  const locaction = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(locaction.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(locaction.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    history.push(`${locaction.pathname}?${searchParams.toString()}`);
  };

  return (
    <StyledWrapper>
      <StyledFormInput
        value={query || ""}
        placeholder="Filtruj zadania"
        onChange={onInputChange}
      />
    </StyledWrapper>
  );
};

export default Search;
