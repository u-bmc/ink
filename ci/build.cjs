(async function () {
  let connect = (await import("@dagger.io/dagger")).connect;

  // initialize Dagger client
  connect(
    async (client) => {
      // get reference to the local project
      const source = client
        .host()
        .directory(".", { exclude: ["node_modules/", "build/", ".svelte-kit/", ".wireit/"] });

      // get Node image
      const node = client.pipeline("build").container().from("docker.io/node:18-alpine");

      // prepare runner
      const runner = node
        .withMountedDirectory("/src", source)
        .withWorkdir("/src")
        .withExec(["yarn", "install"])
        .withExec(["yarn", "build"]);

      // start runner
      await runner.directory("build/").export("./build");
    },
    { LogOutput: process.stdout }
  );
})();
