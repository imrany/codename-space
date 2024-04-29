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
            <div class="flex flex-col justify-center items-center h-[100vh]">
                <div id="dialog" class="items-center flex flex-col bg-white justify-center p-[24px]">
                    <div class="flex ml-auto mb-[8px] justify-end h-[22px] pb-[4px]">
                        <button on:click={closeDialog} class="material-symbols-outlined w-[20px] h-[20px] cursor-pointer">close</button>
                    </div>
                    <div>
                        <p class="text-lg">Buy me a coffee... Any contribution is greatly appreciated.</p>
                        <a href="/pdf/till_sticker.pdf" class="mb-2 text-blue-500 flex items-center" target="_blank">
                            <span class="material-symbols-outlined text-base">open_in_new</span>
                            <span class="underline">Open in full</span>
                        </a>
                        <iframe src="/pdf/till_sticker.pdf" height="400" width="400" title="Support Till sticker"></iframe>
                    </div>
                </div>
            </div>
    </div>       
</main>
