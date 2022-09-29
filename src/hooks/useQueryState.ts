import {
  ApolloError,
  DocumentNode,
  OperationVariables,
  TypedDocumentNode,
  useQuery,
} from "@apollo/client";
import { useEffect, useState } from "react";

export function useQueryState<DefaultState, DataResult>(
  query: DocumentNode | TypedDocumentNode<any, OperationVariables>,
  queryOptions?: OperationVariables,
  defaultState?: DefaultState | any,
): [DataResult, boolean, ApolloError | undefined] {
  const [dataState, setDataState] = useState(defaultState);
  const { data, loading, error } = useQuery(query, queryOptions);
  useEffect(() => {
    if (data) {
      setDataState(data);
    }
  }, [data]);

  return [dataState, loading, error];
}
