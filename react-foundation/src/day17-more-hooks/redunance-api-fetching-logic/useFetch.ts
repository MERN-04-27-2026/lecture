import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const _data = await res.json();
        setData(_data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
}
