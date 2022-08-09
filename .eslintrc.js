module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    extends: ["react-app", "prettier"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
    parserOptions: {
        ecmaVersion: 2018,
        project: ["./tsconfig.json"],
        // tsconfig 파일의 경로를 참조 해줍니다.
        // 기준은 root 입니다.
    },
};
