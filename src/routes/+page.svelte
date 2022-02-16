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
		Content,
		Grid,
		Row,
		Column
	} from 'carbon-components-svelte';
	import {
		Catalog,
		Dashboard,
		Information,
		Meter,
		Settings,
		UserAvatarFilledAlt,
		VideoChat
	} from 'carbon-icons-svelte';

	let isSideNavOpen = false;
	let isUserMenuOpen = false;
	let isServerSelectionOpen = false;
</script>

<Header company="u-bmc" platformName="Dev Server" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderUtilities>
		<HeaderAction bind:isOpen={isUserMenuOpen} icon={UserAvatarFilledAlt} closeIcon={UserAvatarFilledAlt}>
			<HeaderPanelLinks>
				<HeaderPanelLink>Change Password</HeaderPanelLink>
				<HeaderPanelLink>Log out</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction>
		<HeaderAction bind:isOpen={isServerSelectionOpen}>
			<HeaderPanelLinks>
				<HeaderPanelLink>Server 1</HeaderPanelLink>
				<HeaderPanelLink>Server 2</HeaderPanelLink>
				<HeaderPanelLink>Server 3</HeaderPanelLink>
				<HeaderPanelLink>Server 4</HeaderPanelLink>
				<HeaderPanelLink>Server 5</HeaderPanelLink>
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
