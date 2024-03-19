import { type ReactNode } from "react";
import Pages from "@/modules/CreateCustomPage/components/Pages";
import { useCreateCustomPage } from "@/modules/CreateCustomPage/useCreateCustomPage.ts";
import AddNewPage from "@/modules/CreateCustomPage/components/AddNewPage";

const CreateCustomPage = (): ReactNode => {
  const { pages, addPage } = useCreateCustomPage();
  return (
    <article
      style={{
        width: "50%",
        minWidth: "300px",
        margin: "0 auto",
      }}
    >
      <AddNewPage addPage={addPage} />
      <Pages list={pages} />
    </article>
  );
};

export default CreateCustomPage;
