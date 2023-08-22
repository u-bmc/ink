(async function () {
  let connect = (await import("@dagger.io/dagger")).connect;

  // initialize Dagger client
  connect(
    async (client) => {
      // get reference to the local project
      const source = client
        .host()
        .directory(".", { exclude: ["node_modules/", "build/", ".svelte-kit/", ".wireit/"] });

      // get Playwright image
      const playwright = client
        .pipeline("test")
        .container()
        .from("mcr.microsoft.com/playwright:v1.37.1-focal");

      // prepare runner
      const runner = playwright
        .withMountedDirectory("/src", source)
        .withWorkdir("/src")
        .withExec(["yarn", "install"])
        .withExec(["yarn", "test:ci"]);

      // start runner
      await runner.directory("coverage/").export("./coverage");
    },
    { LogOutput: process.stdout }
  );
})();
