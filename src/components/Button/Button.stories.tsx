import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// TODO: Доделать сторис кнопки

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: "hello styles? 8",
};