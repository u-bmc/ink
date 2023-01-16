<script>
  import 'carbon-components/css/carbon-components.min.css';
  import {
    Header,
    HeaderUtilities,
    HeaderAction,
    HeaderPanelLinks,
    HeaderPanelLink,
    SideNav,
    SideNavItems,
    SideNavLink,
    SkipToContent,
    Content
  } from 'carbon-components-svelte';
  import {
    Catalog,
    Chip,
    Dashboard,
    Information,
    Meter,
    Settings,
    UserAvatarFilledAlt,
    VideoChat
  } from 'carbon-icons-svelte';

  let isSideNavOpen = false;
  let isUserMenuOpen = false;
</script>

<Header company="u-bmc" platformName="Dev Server" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderUtilities>
    <HeaderAction
      bind:isOpen={isUserMenuOpen}
      icon={UserAvatarFilledAlt}
      closeIcon={UserAvatarFilledAlt}
    >
      <HeaderPanelLinks>
        <HeaderPanelLink>Change Password</HeaderPanelLink>
        <HeaderPanelLink>Log out</HeaderPanelLink>
      </HeaderPanelLinks>
    </HeaderAction>
  </HeaderUtilities>

  <SideNav bind:isOpen={isSideNavOpen} rail>
    <SideNavItems>
      <SideNavLink icon={Dashboard} text="Dashboard" href="/dashboard" isSelected />
      <SideNavLink icon={Chip} text="System Information" href="/dashboard/sysinfo" />
      <SideNavLink icon={Meter} text="Sensors" href="/dashboard/sensors" />
      <SideNavLink icon={Catalog} text="Logs" href="/dashboard/logs" />
      <SideNavLink icon={VideoChat} text="Remote Control" href="/dashboard/remote" />
      <SideNavLink icon={Settings} text="Settings" href="/dashboard/settings" />
      <SideNavLink icon={Information} text="About" href="/dashboard/about" />
    </SideNavItems>
  </SideNav>
</Header>

<Content>
  <slot />
</Content>
