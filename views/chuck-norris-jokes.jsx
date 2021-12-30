import React, { useState, useEffect } from "react";
import axios from "axios";
import "regenerator-runtime/runtime";

import { LoadingButton } from "@atlaskit/button";

export default function ChuckNorrisJokes() {
  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    setJoke("");
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    return response.data.value;
  };

  useEffect(() => {
    getJoke().then((joke) => setJoke(joke));
  }, []);

  return (
    <div className="textAlignCenter Height300">
      <LoadingButton
        shouldFitContainer
        isLoading={joke ? false : true}
        onClick={() => getJoke().then((joke) => setJoke(joke))}
      >
        Next
      </LoadingButton>
      {joke}
    </div>
  );
}
