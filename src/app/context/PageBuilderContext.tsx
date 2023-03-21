import { useState, createContext } from "react";

const useValue = () => {
  const [isPreviewEditor, setPreviewEditor] = useState(false);
  const [currentProjectName, setCurrentProjectName] = useState("");
  const [currentProjectId, setCurrentProjectId] = useState(-1);
  const [currentProjectUserId, setCurrentProjectUserId] = useState(-1);
  const [projectPreview, setProjectPreview] = useState("");
  const [isSavedSuccess, setSavedSuccess] = useState(false);
  return {
    isPreviewEditor,
    setPreviewEditor,
    currentProjectName,
    setCurrentProjectName,
    currentProjectId,
    setCurrentProjectId,
    currentProjectUserId,
    setCurrentProjectUserId,
    projectPreview,
    setProjectPreview,
    isSavedSuccess,
    setSavedSuccess,
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
