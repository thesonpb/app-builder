import { useState, createContext } from "react";

const useValue = () => {
  const [isPreviewEditor, setPreviewEditor] = useState(false);
  const [currentProjectName, setCurrentProjectName] = useState("");
  const [currentProjectId, setCurrentProjectId] = useState(-1);
  return {
    isPreviewEditor,
    setPreviewEditor,
    currentProjectName,
    setCurrentProjectName,
    currentProjectId,
    setCurrentProjectId,
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
