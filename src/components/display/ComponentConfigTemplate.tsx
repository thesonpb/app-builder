import React from "react";
import InfoIcon from "../../app/icons/InfoIcon";
import { Dropdown } from "antd";

interface Props {
  configName: string;
  content?: any;
  showInfo?: boolean;
  children: React.ReactNode;
}
function ComponentConfigTemplate({
  configName,
  children,
  showInfo = false,
  content = "",
}: Props) {
  return (
    <div style={{ borderTop: "1px solid #e9ecef4f" }}>
      <div className="flex items-center">
        <h3 className="text-base font-bold">{configName}</h3>
        {showInfo && (
          <Dropdown
            className="ml-2"
            trigger={["hover"]}
            menu={{ items: content }}
            placement="bottomRight"
          >
            <div>
              <InfoIcon />
            </div>
          </Dropdown>
        )}
      </div>
      <div className="flex flex-col gap-y-2 text-sm font-semibold">
        {children}
      </div>
    </div>
  );
}

export default ComponentConfigTemplate;
