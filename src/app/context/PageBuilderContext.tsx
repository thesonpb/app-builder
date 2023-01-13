import { useState, createContext } from "react";

const useValue = () => {
    const [isPreviewEditor, setPreviewEditor] = useState(false);
    return {
        isPreviewEditor,
        setPreviewEditor,
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
