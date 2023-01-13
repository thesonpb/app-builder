import { useContext } from "react";
import { PageBuilderContext } from "../../app/context/PageBuilderContext";
import ComponentConfig from "./ComponentConfig";
import ComponentPicker from "./ComponentPicker";

function PageBuilder() {
    const { isPreviewEditor } = useContext(PageBuilderContext);
    return (
        <>
            {!isPreviewEditor ? (
                <div className="flex ">
                    <ComponentPicker />
                    <div className="mx-60 overflow-auto h-screen w-full p-10">
                        dfd
                    </div>
                    <ComponentConfig />
                </div>
            ) : (
                <div>preview</div>
            )}
        </>
    );
}

export default PageBuilder;
