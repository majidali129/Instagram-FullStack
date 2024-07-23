import { useEffect, useState } from "react";
import api from "../api/services/api-service";

export const useFetch = (initialUrl, initialState) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [data, setData] = useState(initialState);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    let isCancel = false;
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await api.get(`${url}`);
        if (!isCancel) {
          setData(result.data);
          setLoading(false);
        }
      } catch (error) {
        if (!isCancel) {
          setLoading(false);
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isCancel = true;
    };
  }, [url]);

  return [loading, error, data, setUrl];
};
