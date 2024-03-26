import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";
import PageTitle from "@/components/PageTitle";
import PageItem from "@/modules/PagesViewList/components/PageItem";
import { type ReactNode } from "react";
import { useSelector } from "react-redux";
import { pageSelector } from "@/modules/store/slices/page/pageSlice.ts";
import { useParams } from "react-router-dom";

const CustomPage = (): ReactNode => {
  const pages = useSelector(pageSelector);
  const params = useParams();
  if (!pages) return null;
  const currentPage = pages.find((page) => page.id === Number(params.pageId));

  if (!currentPage) return null;
  return (
    <RouteWithAnimation>
      <article>
        <PageTitle title={currentPage.title} />
        <PageItem page={currentPage} />
      </article>
    </RouteWithAnimation>
  );
};

export default CustomPage;
