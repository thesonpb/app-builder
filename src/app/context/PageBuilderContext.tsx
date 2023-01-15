import { useState, createContext } from "react";

const useValue = () => {
  const [serializeJson, setSerializeJson] = useState({});
  const [isPreviewEditor, setPreviewEditor] = useState(false);
  return {
    isPreviewEditor,
    setPreviewEditor,
    serializeJson,
    setSerializeJson,
  };
};

const PageBuilderContext = createContext({} as ReturnType<typeof useValue>);

const PageBuilderProvider = (props: any) => {
  return (
    <PageBuilderContext.Provider value={useValue()}>
      {props.children}
    </PageBuilderContext.Provider>
  );
};

export { PageBuilderProvider, PageBuilderContext };
