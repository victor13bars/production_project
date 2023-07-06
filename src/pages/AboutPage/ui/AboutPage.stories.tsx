import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import AboutPage from "./AboutPage";

const meta: Meta<typeof AboutPage> = {
    title: 'page/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Normal: Story = {
    args: {},
};

export const PrimaryDark: Story = {
    args: {},
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]



