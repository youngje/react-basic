import { useState, useCallback, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchUrl = useCallback(async (_url) => {
    try {
      const response = await fetch(_url);
      const json = await response.json();

      setData(json);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  }, [])

  useEffect(() => {
    if (!url) return
    fetchUrl(url);
  }, [fetchUrl, url]);

  return { data, loading, error };
}
