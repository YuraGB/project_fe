import { Button, Card } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { type TFields } from "@/modules/CreateCustomPage/types.ts";
import { type FC } from "react";
import AddNewWidget from "@/modules/CreateCustomPage/components/AddNewWidget";

const AddNewPage: FC<TFields> = ({ fields, remove, add }) => {
  return (
    <div style={{ display: "flex", rowGap: 16, flexDirection: "column" }}>
      {fields.map((field) => (
        <Card
          size="default"
          title={`Page`}
          key={field.key}
          extra={
            <CloseOutlined
              onClick={() => {
                remove(field.name);
              }}
            />
          }
        >
          <AddNewWidget />
        </Card>
      ))}

      <Button type="dashed" onClick={() => { add(); }} block>
        + Add Page
      </Button>
    </div>
  );
};

export default AddNewPage;
