@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    li{
        @apply hover:text-rose-500 transition duration-200 cursor-pointer font-sans;
    }
}

@layer components {
    .animation {
        @apply scale-[1.8] hover:scale-[2];
    }
}