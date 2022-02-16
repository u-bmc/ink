<script>
    import "carbon-components/css/carbon-components.min.css";
    import {
      Header,
      HeaderUtilities,
      HeaderAction,
      HeaderGlobalAction,
      HeaderPanelLinks,
      HeaderPanelDivider,
      HeaderPanelLink,
      SideNav,
      SideNavItems,
      SideNavLink,
      SkipToContent,
      Content,
      Grid,
      Row,
      Column,
DataTable,
    } from "carbon-components-svelte";
    import {
      Catalog,
      Dashboard,
      Information,
      Meter,
      Settings,
      SettingsAdjust,
      UserAvatarFilledAlt,
      VideoChat
    } from "carbon-icons-svelte";
  
    let isSideNavOpen = false;
    let isOpen1 = false;
    let isOpen2 = false;
  </script>
  
  <Header company="u-bmc" platformName="Dev Server" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderUtilities>
        <HeaderGlobalAction aria-label="Settings" icon={SettingsAdjust} />
        <HeaderAction
          bind:isOpen={isOpen1}
          icon={UserAvatarFilledAlt}
          closeIcon={UserAvatarFilledAlt}
        >
          <HeaderPanelLinks>
            <HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
            <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 4</HeaderPanelLink>
            <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
            <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
            <HeaderPanelDivider>Switcher subject 3</HeaderPanelDivider>
            <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
          </HeaderPanelLinks>
        </HeaderAction>
        <HeaderAction bind:isOpen={isOpen2}>
          <HeaderPanelLinks>
            <HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
            <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
            <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
            <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 4</HeaderPanelLink>
            <HeaderPanelLink>Switcher item 5</HeaderPanelLink>
          </HeaderPanelLinks>
        </HeaderAction>
    </HeaderUtilities>
  
    <SideNav bind:isOpen={isSideNavOpen} rail>
      <SideNavItems>
        <SideNavLink icon={Dashboard} text="Dashboard" href="/" isSelected />
        <SideNavLink icon={Information} text="System Information" href="/" />
        <SideNavLink icon={Meter} text="Sensors" href="/" />
        <SideNavLink icon={Catalog} text="Logs" href="/" />
        <SideNavLink icon={VideoChat} text="Remote Control" href="/" />
        <SideNavLink icon={Settings} text="Settings" href="/" />
      </SideNavItems>
    </SideNav>
  </Header>
  
  <Content>
    <Grid>
      <Row>
        <Column>
            <h1>Dashboard</h1>
        </Column>
      </Row>
    </Grid>
  </Content>  
