import { type FC, Fragment, type ReactNode } from "react";
import { Button, Form, Input } from "antd";
import Widget from "@/modules/CreateCustomPage/components/Widget";
import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import AddNewWidget from "@/modules/CreateCustomPage/components/AddNewWidget";
import { usePage } from "@/modules/CreateCustomPage/components/Page/usePage.ts";
import Card from "antd/es/card/Card";
import { useSubmit } from "@/modules/CreateCustomPage/components/Page/useSubmit.ts";
import { CloseOutlined } from "@ant-design/icons";

const Page: FC<{ page: TPage }> = ({ page }): ReactNode => {
  const [form] = Form.useForm();
  const {
    widgetsToDisplay,
    removeWidget,
    addWidget,
    initData,
    onRemoveHandlerPage,
  } = usePage(page);
  const { onSubmit } = useSubmit();

  return (
    <Card
      key={page.id}
      title={page.title}
      size={"default"}
      style={{
        padding: "24px",
        width: "100%",
        marginBottom: "24px",
      }}
      extra={
        <CloseOutlined
          onClick={() => {
            onRemoveHandlerPage(page.id);
          }}
        />
      }
    >
      <Form form={form} onFinish={onSubmit} initialValues={initData}>
        <Form.Item
          name={["page_title"]}
          style={{
            marginBottom: "24px",
          }}
        >
          <Input placeholder="Page title" required size={"large"} />
        </Form.Item>

        <AddNewWidget addWidget={addWidget} />

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {widgetsToDisplay.map((widget, index) => (
            <Fragment key={widget.id}>
              <Widget
                key={widget.id}
                widget={{ ...widget, remove: removeWidget }}
                widgetCount={index}
              />
              <br />
            </Fragment>
          ))}
        </section>
        <Button type={"primary"} htmlType={"submit"}>
          Save
        </Button>
      </Form>
    </Card>
  );
};

export default Page;
