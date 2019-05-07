# gas-exp
## やりかた
1. 以下を実行
```bash
yarn init -y
yarn add @google/clasp @types/google-apps-script -D
npx run clasp create <プロジェクト名>
npx clasp pull
mkdir src
move appsscript.json src/appsscript.json
move Code.js src/Code.js
```
2. clasp.jsonが出力されるので、加筆
```diff
{
  "scriptId": "xxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxx",
+  "rootDir": "src"
}
```
3. Code.jsを書く
4. 以下を実行して反映
```bash
npx clasp push
```