<script lang='ts'>
    import type { PageData } from './$types';
    
    export let data:PageData;
</script>

<svelte:head>
    <title>Codename space | Repositories</title>
</svelte:head>

<main class="m-3 flex justify-center">
    {#if !data.message}
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {#each data.parseRes as item }
            <div class="bg-gray-200 rounded-[15px] shadow-lg" id={item.id}>
            <!-- https://opengraph.githubassets.com/1f3977f37995637ee111830aa8ae02d8c0ac6838db385a43e9009b4a84708f47/imrany/opencode -->
                <img src={`https://opengraph.githubassets.com/1f3977f37995637ee111830aa8ae02d8c0ac6838db385a43e9009b4a84708f47/${item.full_name}`} class="w-full rounded-tr-[15px] rounded-tl-[15px]" alt={item.alt}/>
                <div class="px-3 py-2">
                    <p class="text-base font-semibold">{item.full_name}</p>
                    <p class="text-sm">{item?.description==null?"":item.description}</p>
                    <div class="flex justify-between items-center">
                        <!--<a href={`${item.owner.html_url}`} target="_blank" rel="noreferrer">
                            <img class="w-[50px] h-[50px] rounded-[50px]" src={item.owner.avatar_url} alt={item.owner.login}/>
                        </a> -->
                        <!-- https://github.com/imrany/django-rest/archive/refs/heads/main.zip -->
                        <div class="flex justify-center items-center gap-3 ml-auto">
                            <a href={`${item.clone_url}`} target="_blank" rel="noreferrer">
                               <span class="material-symbols-outlined text-xl">open_in_new</span>
                            </a>
                            <a href={`https://github.com/${item.full_name}/archive/refs/heads/${item.default_branch}.zip`} download={item.name}>
                                <span class="material-symbols-outlined text-2xl">download</span>
                            </a>
                            <a href={`/images/till_sticker.png`} target="_blank">
                                <span class="material-symbols-outlined text-2xl">coffee</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    {:else}
        <div class="flex flex-col gap-1 items-center justify-center h-[80vh]">
            <p class="text-lg">Error: {data.message}</p>
            <button class="py-2 px-4 text-sm border rounded-lg hover:text-white hover:bg-gray-700" on:click={()=>window.location.reload()}>Reload page</button>
        </div>
    {/if}
   </main>
