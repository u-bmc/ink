<script lang="ts">
  import { AppBar, AppRail, AppRailAnchor, AppShell } from '@skeletonlabs/skeleton';
  import { page } from '$app/stores';
  import { Gauge, LayoutDashboard, Settings, Server, ServerCog, UserCircle } from 'lucide-svelte';
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <Server />
      </svelte:fragment>
      <div>(Machine Name)</div>
      <svelte:fragment slot="trail">
        <ServerCog />
        <UserCircle />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <AppRail>
      <AppRailAnchor
        href="/dashboard/overview"
        name="Overview"
        selected={$page.url.pathname === '/dashboard/overview'}
      >
        <svelte:fragment slot="lead">
          <span class="container h-full mx-auto flex justify-center items-center">
            <LayoutDashboard />
          </span>
        </svelte:fragment>
        <span>Overview</span>
      </AppRailAnchor>
      <AppRailAnchor
        href="/dashboard/sensors"
        name="Sensors"
        selected={$page.url.pathname === '/dashboard/sensors'}
      >
        <svelte:fragment slot="lead">
          <span class="container h-full mx-auto flex justify-center items-center">
            <Gauge />
          </span>
        </svelte:fragment>
        <span>Sensors</span>
      </AppRailAnchor>
      <AppRailAnchor
        href="/dashboard/settings"
        name="Settings"
        selected={$page.url.pathname === '/dashboard/settings'}
      >
        <svelte:fragment slot="lead">
          <span class="container h-full mx-auto flex justify-center items-center">
            <Settings />
          </span>
        </svelte:fragment>
        <span>Settings</span>
      </AppRailAnchor>
      <svelte:fragment slot="trail">
        <AppRailAnchor
          href="/dashboard/about"
          name="About"
          selected={$page.url.pathname === '/dashboard/about'}
        >
          <span>About</span>
        </AppRailAnchor>
      </svelte:fragment>
    </AppRail>
  </svelte:fragment>
  <div class="container p-10 mx-auto">
    <slot />
  </div>
</AppShell>
