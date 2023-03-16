import Client, { connect } from '@dagger.io/dagger';
import type { Container, Directory } from '@dagger.io/dagger/dist/api/client.gen';

// initialize Dagger client
connect(
  async (client: Client) => {
    // get reference to the local project
    const source: Directory = client
      .host()
      .directory('.', { exclude: ['node_modules/', 'build/', '.svelte-kit/'] });

    // get Node image
    const node: Container = client.pipeline('build').container().from('node:18.12-alpine3.17');

    // prepare runner
    const runner: Container = node
      .withMountedDirectory('/src', source)
      .withWorkdir('/src')
      .withExec(['yarn', 'install'])
      .withExec(['yarn', 'run', 'build']);

    // start runner
    await runner.directory('build/').export('./build');
  },
  { LogOutput: process.stdout }
);
