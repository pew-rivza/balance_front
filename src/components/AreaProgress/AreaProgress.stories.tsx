import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AreaProgress from "./AreaProgress";

export default {
  title: "Simple Components/AreaProgress",
  component: AreaProgress,
  argTypes: {
    classNames: { control: false },
  },
} as ComponentMeta<typeof AreaProgress>;

const Template: ComponentStory<typeof AreaProgress> = (args) => <AreaProgress {...args} />;

export const Default = Template.bind({});

Default.storyName = "AreaProgress";
Default.args = {
  value: 45,
};

// TODO: написать тесты для AreaProgress (визуальные и функциональные)
