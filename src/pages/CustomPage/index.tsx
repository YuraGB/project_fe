import RouteWithAnimation from "@/components/RouteWithAnimation/RouteWithAnimation.tsx";
import { useLoaderData } from "react-router-dom";
import PageTitle from "@/components/PageTitle";
import ContentContainer from "@/modules/ContentContainer";
import {
  type ContentContainerProps,
  type TYouTubeWidget,
} from "@/modules/ContentContainer/types.ts";

const CustomPage = () => {
  const { title, content } =
    useLoaderData() as ContentContainerProps<TYouTubeWidget>;
  return (
    <RouteWithAnimation>
      <article>
        <PageTitle title={title} />
        <ContentContainer content={content} />
      </article>
    </RouteWithAnimation>
  );
};

export default CustomPage;
