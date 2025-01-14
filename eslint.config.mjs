import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "no-unused-vars": ["warn"],
      "semi": ["error", "always"], // Enforce semicolons
      "quotes": ["error", "double"], // Use double quotes
      // "react/react-in-jsx-scope": "off", // Disable React in scope for JSX (if using React 17+)
      "indent": ["error", 2], // Enforce 2-space indentation
    },
  },
];

export default eslintConfig;
