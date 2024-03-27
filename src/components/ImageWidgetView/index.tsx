import { type FC } from "react";
import type { TWidget } from "@/modules/CreateCustomPage/types.ts";
import { type TImageWidget } from "@/modules/ContentContainer/types.ts";
import { Image } from "antd";
import { Link } from "react-router-dom";

type ImageWidgetProps = {
  widget: TWidget;
};

const ImageWidgetView: FC<ImageWidgetProps> = ({ widget }) => {
  if (!widget) return null;
  const { widgetData } = widget;
  const { image_link, image_title } = widgetData as TImageWidget;

  return (
    <section>
      <Link to={image_link}>
        <p>{image_title}</p>
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
          preview={{
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          }}
        />
      </Link>
    </section>
  );
};

export default ImageWidgetView;
