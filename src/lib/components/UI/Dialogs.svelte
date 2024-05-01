<script lang="ts">
    const closeDialog=()=>{
        let dialog_bg=document.getElementById("open_support_dialog");
        dialog_bg?.classList.add("ease-in-out");
        dialog_bg?.classList.toggle("none");
        dialog_bg?.classList.add("duration-1000");
        dialog_bg?.classList.add("delay-2000");  
    }
</script>
<main>
     <div id="open_support_dialog" class="fixed top-0 bottom-0 left-0 right-0 z-20 bg-[#151515]/70 none">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div on:click={closeDialog} class="flex flex-col justify-center items-center h-[100vh]">
                <div id="dialog" class="items-center max-md:w-[95vw] text-gray-200 flex flex-col justify-center p-[24px]">
                    <div class="md:text-lg max-sm:text-sm">
                        <p class="mb-2">Buy me a coffee... Any contribution is greatly appreciated.</p>
                        <a href="/images/till_sticker.png" target="_blank">
                            <img src="/images/till_sticker.png" alt="till sticker" class="max-sm:w-[80vw] max-sm:h-[300px] sm:w-[600px] sm:h-[500px] md:w-[750px] md:h-[500px]"/>
                        </a>
                    </div>
                </div>
            </div>
    </div>       
</main>
