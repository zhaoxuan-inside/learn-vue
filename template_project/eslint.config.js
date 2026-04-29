import js from "@eslint/js";
import PluginVue from "eslint-plugin-vue";
import VueEslintParser from "vue-eslint-parser";
import TsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{ts, tsx, vue}"],
    rules: {
      ...js.configs.recommended.rules,
      "vue/html-self-closing": "error",
      "no-console": "error",
    },
    languageOptions: {
      parser: VueEslintParser,
      parserOptions: {
        extraFileExtension: [".vue"],
        parser: TsParser,
      },
    },
    plugins: {
      vue: PluginVue,
    },
  },
];
