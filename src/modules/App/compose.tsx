import React, { Fragment, type PropsWithChildren, type ReactNode } from "react";

function compose(
  ...components: Array<React.FC<{ children: ReactNode }>>
): React.FC<{ children: ReactNode }> {
  return components.reduce(
    (Accumulator, Component) =>
      // eslint-disable-next-line react/display-name
      ({ children }: PropsWithChildren): ReactNode => (
        <Accumulator>
          <Component>{children}</Component>
        </Accumulator>
      ),
    // eslint-disable-next-line
    (props) => <Fragment {...props} />,
  );
}

export default compose;
