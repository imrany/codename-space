<script lang="ts">
    import TillSticker from "$lib/assets/pdf/till_sticker.pdf";

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
                        <span on:click={closeDialog} class="material-symbols-outlined w-[20px] h-[20px] cursor-pointer">close</span>
                    </div>
                    <div>
                        <p class="mb-2 text-lg">Buy me a coffee... Any amount is greatly appreciated.</p>
                        <iframe src="{TillSticker}" height="400" width="400" title="Support Till sticker"></iframe>
                    </div>
                </div>
            </div>
    </div>       
</main>
