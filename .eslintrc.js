module.exports = {
  root: true,
  extends: ["universe/native"],
  rules: {
    "react/jsx-curly-brace-presence": [
      2,
      { props: "always", children: "always", propElementValues: "always" },
    ],
  },
};
