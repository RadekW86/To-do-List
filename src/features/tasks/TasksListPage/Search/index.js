import searchQueryParamName from "../searchQueryParamName.js";
import { StyledFormInput } from "../Input/index.js";
import { StyledWrapper } from "./styled.js";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
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
