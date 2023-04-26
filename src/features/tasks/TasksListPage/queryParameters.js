import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom";

export const useQueryParameter = (searchName) => {
  const locaction = useLocation();
  return new URLSearchParams(locaction.search).get(searchName);
};

export const useReplaceQueryParameter = () => {
  const locaction = useLocation();
  const history = useHistory();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(locaction.search);

    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.push(`${locaction.pathname}?${searchParams.toString()}`);
  };
};
