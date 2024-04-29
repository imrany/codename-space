<script lang="ts">
    import { assets } from "$app/paths";
    import Dialogs from "$lib/components/UI/Dialogs.svelte" 
    import "./styles.css"

    const openDialog=(id:string)=>{
        let dialog_bg=document.getElementById(id);
        dialog_bg?.classList.add("ease-in-out");
        dialog_bg?.classList.toggle("none");
        dialog_bg?.classList.add("duration-1000");
        dialog_bg?.classList.add("delay-2000");
    }
</script>

<div>
	<nav class="px-5 py-2 text-base shadow flex items-center">
        <a style="font-family: 'Tilt Neon';" href="/">Codename space</a>
        <div class="flex items-center justify-center gap-2 ml-auto">
		    <div class="sm:flex sm:gap-2 sm:items-center none">
                <a href="https://github.com/imrany" target="_blank" rel="noreferrer noopener" class="flex items-center justify-center gap-1"><span class="material-symbols-outlined text-base">open_in_new</span> <span>Github</span></a>
		    </div>
            <button class="px-2 py-1 text-white rounded-md border-slate-600 bg-slate-500 flex gap-1 items-center justify-center" on:click={()=>openDialog("open_support_dialog")}><span class="material-symbols-outlined text-base">
coffee
</span> <span>Buy me a coffee</span></button>
        </div>
    </nav>

	<main>
        <slot></slot>
        <Dialogs/>
	</main>
</div>
