import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [panding, setPanding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fatch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPanding(false);
          setError(null);
        })
        .catch((err) => {
          setPanding(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, panding, error };
};

export default useFetch;
