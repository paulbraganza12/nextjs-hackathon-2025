import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["node_modules", "dist", ".next"], // Exclude node_modules and optionally dist
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ),
  // Custom rules or plugins can go below if needed
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Optional: show Prettier errors as ESLint errors
      "prettier/prettier": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;
