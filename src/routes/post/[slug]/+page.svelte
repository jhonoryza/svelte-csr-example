<script>
	import PostDetail from '$lib/components/PostDetail.svelte';
	import { postData } from '$lib/posts';
</script>

<div class="justify-center">
	<section class="pt-10">
		<a
			class="border border-slate-300 hover:bg-slate-300 p-2 ml-3 rounded shadow"
			href="/">Go back</a
		>

		<PostDetail post={$postData} />
	</section>
</div>
