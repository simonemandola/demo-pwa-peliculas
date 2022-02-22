// constantes
const headers = {
    "Content-Type": "application/json",
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kZnBwa252dnFjYm9iaWRmaWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU0Mzg0MDMsImV4cCI6MTk2MTAxNDQwM30.-edVClxcv7b9_CrqB8fz3jYWeox7NKI_yZWEGAqmNt8",
        "Authorization": "Bearer" +
            " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kZnBwa252dnFjYm9iaWRmaWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU0Mzg0MDMsImV4cCI6MTk2MTAxNDQwM30.-edVClxcv7b9_CrqB8fz3jYWeox7NKI_yZWEGAqmNt8",
}

Vue.createApp({
    data() {
        return {
            APIUrl: "https://mdfppknvvqcbobidfiit.supabase.co/rest/v1/peliculas",
            peliculas: [],
        }
    },
    methods: {
        async getPeliculas() {
            NProgress.start();
            const fetchPeliculas = await fetch(`${this.APIUrl}?select=*`, { headers });
            this.peliculas = await fetchPeliculas.json();
            NProgress.done();
            console.table(this.peliculas);
        },
    },
    mounted() {
        this.getPeliculas();
    },
}).mount('#app')