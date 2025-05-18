// hooks/useMatch.ts
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { fetchMatches } from "../../model/matchAction";

const useMatch = () => {
  const dispatch = useAppDispatch();

  const { matches, isLoading, error } = useAppSelector(
    (state) => state.matchReducer
  );

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  return { matches, isLoading, error };
};

export default useMatch;
