import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/angular',
    options: {
      configureCSSModules: false,
    },
  },
  staticDirs: ['../src/assets'],
  typescript: {
    check: false,
    checkOptions: {
      tsconfig: './tsconfig.json',
    },
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  docs: {
    autodocs: true,
  },
};

export default config;