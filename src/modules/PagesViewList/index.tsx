import { usePagesView } from "@/modules/PagesViewList/usePagesView.ts";
import PageItem from "@/modules/PagesViewList/components/PageItem";

const PagesViewList = () => {
  const { pages } = usePagesView();

  if (pages.length === 0) {
    return <div>No pages found</div>;
  }

  return (
    <article
      style={{
        width: "100%",
        minWidth: "300px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {pages.map((page) => (
        <PageItem page={page} key={page.id} />
      ))}
    </article>
  );
};

export default PagesViewList;
