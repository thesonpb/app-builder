import { Layout } from "antd";
import ComponentList from "./ComponentList";
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

// const items: TabsProps["items"] = [
//     {
//         key: "1",
//         label: `Basic`,
//         children: <ComponentList type={1} />,
//     },
//     // {
//     //   key: "2",
//     //   label: `My components`,
//     //   children: `Content of Tab Pane 2`,
//     // },
//     {
//         key: "3",
//         label: `Community`,
//         children: <ComponentList type={3} />,
//     },
// ];
function ComponentPicker() {
    return (
        <CustomSider
            className="overflow-auto fixed top-16 h-screen px-4 text-light"
            style={{
                borderRight: "1px solid #525866",
                backgroundColor: "#343a40",
            }}
            width={240}
        >
            {/* <Tabs defaultActiveKey="1" items={items} /> */}
            <ComponentList type={1} />
        </CustomSider>
    );
}

export default ComponentPicker;
