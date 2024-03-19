import { Button } from "antd";
import { type FC, type PropsWithChildren } from "react";

const AddNewPage: FC<PropsWithChildren & { addPage: () => void }> = ({
  children,
  addPage,
}) => {
  return (
    <div
      style={{
        display: "flex",
        rowGap: 16,
        flexDirection: "column",
        margin: "20px 0",
      }}
    >
      <Button type="primary" block onClick={addPage}>
        Add new page
      </Button>
      {children}
    </div>
  );
};

export default AddNewPage;
