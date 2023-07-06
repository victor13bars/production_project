import type {Preview} from "@storybook/react";
import 'app/styles/index.scss'
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";


const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT),RouterDecorator]
};


export default preview;
