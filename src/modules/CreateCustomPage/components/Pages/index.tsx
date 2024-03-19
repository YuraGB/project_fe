import { type FC, type ReactNode } from "react";
import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import Page from "@/modules/CreateCustomPage/components/Page";

const Pages: FC<{ list: TPage[] }> = ({ list }): ReactNode => {
  return list.map((page) => <Page key={page.id} page={page} />);
};

export default Pages;
