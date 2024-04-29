<script>
    import Footer from "$lib/components/UI/Footer.svelte";
    import Faqs from "$lib/components/UI/Faqs.svelte";
    import ProjectSlider from "$lib/components/UI/ProjectSlider.svelte";
</script>
<svelte:head>
    <title>Open code | Home</title>
</svelte:head>

<div>
	<main class="text-xl bg-[url('/api.jpg')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center max-sm:h-[70vh] h-[80vh]">
	   <div class="flex flex-col bg-[rgba(0,0,0,0.6)] w-full h-[80vh] max-sm:h-[70vh] p-5 items-center justify-center">
			<div class="text-center text-white text-xl font-medium sm:text-3xl uppercase mb-3">
				<p>OpenCode provides Access to different <span class="text-slate-500">Computer</span></p>
				<p><span class="text-slate-500">science</span> projects.</p>
			</div> 
			<p class="text-center text-white text-lg font-bold max-sm:w-[70vw]">Built for students, to explore and download free and paid projects with ease.</p>
			<a href="/explore" class="m-5 p-2 text-base hover:text-slate-500 hover:bg-white hover:border-2 bg-slate-500 text-white rounded-md capitalize">View all projects</a>        
	   </div>
	</main>
	
	<Faqs/>
	<ProjectSlider/>
	<Footer/>
</div>
