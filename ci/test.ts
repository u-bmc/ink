import Client, { connect } from '@dagger.io/dagger';
import type { Container, Directory } from '@dagger.io/dagger/dist/api/client.gen';

// initialize Dagger client
connect(
  async (client: Client) => {
    // get reference to the local project
    const source: Directory = client
      .host()
      .directory('.', { exclude: ['node_modules/', 'build/', '.svelte-kit/'] });

    // get Playwright image
    const playwright: Container = client
      .pipeline('test')
      .container()
      .from('mcr.microsoft.com/playwright:v1.32.3-focal');

    // prepare runner
    const runner: Container = playwright
      .withMountedDirectory('/src', source)
      .withWorkdir('/src')
      .withExec(['yarn', 'install'])
      .withExec(['yarn', 'run', 'test']);

    // start runner
    await runner.directory('coverage/').export('./coverage');
  },
  { LogOutput: process.stdout }
);
