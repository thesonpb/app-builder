import { Layout } from "antd";
import styled from "styled-components";
const { Sider } = Layout;

const CustomSider = styled(Sider)`
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgb(177, 177, 177);
    }
    ::-webkit-scrollbar-track {
        background-color: #495057;
    }
`;
export default function ComponentConfig() {
    return (
        <CustomSider
            className="overflow-auto fixed right-0 top-16 h-screen px-4 text-light"
            style={{
                borderRight: "1px solid #525866",
                backgroundColor: "#343a40",
            }}
            width={240}
        >
            <div className="flex flex-col gap-y-4 pb-20">
                <div className="flex flex-col">
                    <h4>Background</h4>
                    <div className="w-full rounded-md text-sm font-semibold cursor-pointer h-8 flex items-center justify-center bg-lightGray">
                        Background
                    </div>
                </div>
            </div>
        </CustomSider>
    );
}
