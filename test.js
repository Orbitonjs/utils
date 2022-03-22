const linter = require("eslint")

async function main() {
  const eslint = new linter.ESLint()
  const code = `
  import Orbiton, {Fragment} from "orbiton";
  class App {
    render() {
      return (
        <>
          <Node></Node>
          <div></div>
        </>
      )
    }
  }
  `
  const results = await eslint.lintText(code, {});
  console.log(results[0])
}

main()