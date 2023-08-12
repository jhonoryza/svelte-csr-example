<script>
	/**
	 * @type {{ title: string; content: string; }}
	 */
	 export let post
</script>

<div
	class="border border-slate-300 p-3 m-3
     rounded shadow-lg
    hover:bg-slate-100"
>
	<h1 class="text-2xl text-slate-600 text-bold">{post.title}</h1>
	<p class="text-slate-600">{@html post.content}</p>
</div>
