<script>
	import PostCard from "$lib/components/PostCard.svelte";

    export let data;
</script>

<div class="justify-center">
	<section class="pt-10">
		{#each data.response.posts as post}
            <PostCard post={post} />
		{:else}
			<p class="text-slate-600">Woops there are no posts here .. !</p>
		{/each}
	</section>

	<div class="flex flex-row justify-between text-slate-600 text-bold uppercase mt-10">
		<a
			class="border border-slate-300 hover:bg-slate-300 p-2 rounded shadow"
			href={`?page=${data.response.page - 1}`}>prev</a
		>
		<a
			class="border border-slate-300 hover:bg-slate-300 p-2 rounded shadow"
			href={`?page=${data.response.page + 1}`}>next</a
		>
	</div>
</div>
