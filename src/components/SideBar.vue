<template>
    <div class="flex flex-col w-64 h-screen p-6 gap-8 invisible md:visible bg-black shrink-0 fixed inset-y-0 left-0">
        <ul class="flex flex-col gap-4">
            <li>
                <img src="../assets/spotify-vue-clone-white.png" alt="" style="heigth=2.5rem;width=100%;max-width:140px;">
            </li>
            <li class="text-stone-300 transition-colors duration-200 hover:text-white flex flex-row flex-nowrap gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <a href="" class="no-underline font-semibold text-xs mt-2"> Início</a>
            </li>
            <li class="text-stone-300 transition-colors duration-200 hover:text-white flex flex-row flex-nowrap gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <a href="" class="no-underline font-semibold text-xs mt-2"> Buscar</a>
            </li>
            <li class="text-stone-300 transition-colors duration-200 hover:text-white flex flex-row flex-nowrap gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <a href="" class="no-underline font-semibold text-xs mt-2"> Sua Biblioteca</a>
            </li>
        </ul>
        <ul class="flex flex-col gap-4">
            <li class="flex flex-row flex-nowrap gap-4 items-center">
                <div class="bg-stone-300 rounded p-1 transition duration-200 hover:bg-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <a href="" class="text-stone-300 transition-colors duration-200 hover:text-white no-underline font-semibold text-xs mt-2"> Criar playlist</a>
            </li>
            <li class="flex flex-row flex-nowrap gap-4 items-center">
                <div class="text-stone-300 bg-gradient-to-r from-indigo-500 to-indigo-200 rounded p-1 transition duration-200 hover:bg-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                </div>
                <a href="" class="text-stone-300 transition-colors duration-200 hover:text-white no-underline font-semibold text-xs mt-2"> Músicas mais curtidas</a>
            </li>
        </ul>
        <hr class="h-px bg-stone-100">
        <ul class="flex flex-col gap-4">
            <li class="flex flex-row flex-nowrap gap-4 items-center">
                <a href="" class="text-stone-300 hover:text-white no-underline text-sm"> 
                    Minha playlist n° 3
                </a>
            </li>
            <li class="flex flex-row flex-nowrap gap-4 items-center">
                <a href="" class="text-stone-300 hover:text-white no-underline text-sm"> 
                    GURU RAP MAROMBA PLAYLIST (RAP)
                </a>
            </li>
            <li class="flex flex-row flex-nowrap gap-4 items-center">
                <a href="" class="text-stone-300 hover:text-white no-underline text-sm"> 
                    Minha playlist n° 2
                </a>
            </li>
            <li class="flex flex-row flex-nowrap gap-4 items-center">
                <a href="" class="text-stone-300 hover:text-white no-underline text-sm"> 
                    Músicas de academia
                </a>
            </li>
        </ul>

        <div class="flex flex-row flex-nowrap items-center gap-4 fixed bottom-32 text-stone-300 transition-colors duration-200 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <a href="" class="no-underline font-semibold text-xs"> Instalar aplicativo</a>
        </div>
    </div>
</template>