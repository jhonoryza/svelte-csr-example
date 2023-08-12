<script>
	export let data;
</script>

<div class="justify-center">
	<section class="pt-10">

		{#each data.response.posts as post}
            <div class="border border-slate-300 p-3 m-3 
                bg-rose-300 rounded shadow-lg 
                hover:cursor-pointer
                hover:bg-rose-400">
                <h1 class="text-2xl text-white text-bold">{post.title}</h1>
                <p class="text-white">{post.preview.text}</p>
            </div>
        {:else}
            <p class="text-rose-500">Woops there are no posts here .. !</p>
		{/each}

	</section>

	<div class="flex flex-row justify-between text-white text-bold uppercase mt-10">
		<a class="bg-rose-300 hover:bg-rose-400 p-2 rounded shadow" href={`?page=${data.response.page - 1}`}>back</a>
		<a class="bg-rose-300 hover:bg-rose-400 p-2 rounded shadow" href={`?page=${data.response.page + 1}`}>next</a>
	</div>
</div>
