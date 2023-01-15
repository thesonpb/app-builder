import React from "react";

interface Props {
  configName: string;
  children: React.ReactNode;
}
function ComponentConfigTemplate({ configName, children }: Props) {
  return (
    <div style={{ borderTop: "1px solid #e9ecef4f" }}>
      <h3 className="text-base font-bold">{configName}</h3>
      <div className="flex flex-col gap-y-2 text-sm font-semibold">
        {children}
      </div>
    </div>
  );
}

export default ComponentConfigTemplate;
