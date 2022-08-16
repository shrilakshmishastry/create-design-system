import React, { FC } from "react";

import BubbleNavigator from "./bubbles";
import BuildersNavigator from "./builders";
import FontsNavigator from "./fonts";
import LayoutNavigator from "./layouts";
import ThemeNavigator from "./theme";

const LeftSideNavigationBar: FC = () => {
  return (
    <nav>
      <ThemeNavigator />
      <BubbleNavigator />
      <BuildersNavigator />
      <FontsNavigator />
      <LayoutNavigator />
    </nav>
  );
};

export default LeftSideNavigationBar;
