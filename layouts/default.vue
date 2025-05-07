<template>
    <div>
        <header>
        <ul>
            <li class="flex gap-4">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            </li>
        </ul>
        </header>
        <main>
            <slot />
        </main>
        <footer><p>Copyright 2025</p></footer>
    </div>
</template>
