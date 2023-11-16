import { useEffect, useState } from "react";

function useFetchRecord(apiPath) {
  //   console.log("function called");
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch(apiPath)
      .then((res) => res.json())
      .then((values) => {
        console.log(values);
        console.log(values["results"]);
        setApi(values["results"]);
      });
  }, []);
  return api;
}

export default useFetchRecord;
