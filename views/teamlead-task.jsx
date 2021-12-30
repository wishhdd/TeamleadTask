import React, { useState, createContext, useContext } from "react";
import PageHeader from "@atlaskit/page-header";
import Button from "@atlaskit/button";
import Range from "@atlaskit/range";

const ValueContext = createContext();

const ButtonHead = () => {
  const [value, setValue] = useContext(ValueContext);
  return (
    <div>
      <Button appearance="danger" spacing="compact" onClick={() => setValue(value - 1)}>
        minus one
      </Button>
      <Button appearance="primary" spacing="compact" onClick={() => setValue(value + 1)}>
        Plus one
      </Button>
    </div>
  );
};

const Head = () => {
  return (
    <div className="headStyle">
      <PageHeader>
        Teamlead Task
        <ButtonHead />
      </PageHeader>
    </div>
  );
};

const Body = () => {
  const [value, setValue] = useContext(ValueContext);

  return (
    <div className="textAlignCenter">
      <Range step={1} min={0} max={25} value={value} onChange={(value) => setValue(value)} />
      <p>The current value is: {value}</p>
    </div>
  );
};

const TeamleadTask = () => {
  const [value, setValue] = useState(5);

  return (
    <div className="mainPage">
      <ValueContext.Provider value={[value, setValue]}>
        <Head />
        <Body />
      </ValueContext.Provider>
    </div>
  );
};

export default TeamleadTask;
