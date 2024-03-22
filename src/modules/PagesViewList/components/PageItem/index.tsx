import { type TPage } from "@/modules/CreateCustomPage/types.ts";
import WidgetViewList from "@/components/WidgetViewList";
import classes from "./pageItem.module.css";

const PageItem = ({ page }: { page: TPage }) => {
  return (
    <section className={classes.root}>
      <h2>{page.title}</h2>
      <WidgetViewList list={page.widgets} />
    </section>
  );
};

export default PageItem;
