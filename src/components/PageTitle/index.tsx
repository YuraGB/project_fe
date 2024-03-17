import { type FC, memo } from "react";

const PageTitle: FC<{ title: string }> = ({ title }) => {
  if (!title) return null;
  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
};

export default memo(PageTitle);
