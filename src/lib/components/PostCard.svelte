<script>
	import { goto } from '$app/navigation';
	import { postData } from '$lib/posts.js';

	/**
	 * @type {{ title: string; slug: string; preview: { text: string; }; }}
	 */
	 export let post

	/**
	 * @param {{ title?: string; preview?: { text: string; }; slug?: string; }} post
	 */
	function gotoDetailPost(post) {
		postData.set(post);
		goto(`/post/${post.slug}`);
	}
</script>

<div
	class="border border-slate-300 p-3 m-3
 	rounded shadow-lg
    hover:bg-slate-100"
>
	<a href="#" on:click={() => gotoDetailPost(post)} class="text-2xl text-slate-600 text-bold">{post.title}</a>
	<p class="text-slate-600">{post.preview.text}</p>
</div>
