import { usePagesView } from "@/modules/PagesViewList/usePagesView.ts";
import PageItem from "@/modules/PagesViewList/components/PageItem";

const PagesViewList = () => {
  const { pages, isLoading } = usePagesView();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!pages && !isLoading) {
    return <div>No pages found</div>;
  }

  if (pages.length === 0) {
    return <div>No pages found</div>;
  }

  return (
    <article
      style={{
        width: "50%",
        minWidth: "300px",
        margin: "0 auto",
      }}
    >
      {pages.map((page) => (
        <PageItem page={page} key={page.id} />
      ))}
    </article>
  );
};

export default PagesViewList;
