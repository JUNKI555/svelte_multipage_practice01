import App from './FirstApp.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'index'
	}
});

export default app;
