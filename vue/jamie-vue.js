const app = Vue.createApp({
    data() {
        return {
            projects: [],
            filterLetter: "",
            filterName: ""
        };
    },
    computed: {
        filteredProjects() {

            let filtered = this.projects;
            if (!this.filterLetter && !this.filterName) {
                return [];
            }
            if (this.filterLetter) {
                filtered = filtered.filter(p => {
                    if (!p.name) return false;
                    return p.name[0] && p.name[0].toUpperCase() === this.filterLetter;
                });
            }
            if (this.filterName) {
                const search = this.filterName.trim().toLowerCase();
                filtered = filtered.filter(p => {
                    const name = p.name ? p.name.toLowerCase() : '';
                    return name.includes(search);
                });
            }
            return filtered;
        },
        letters() {

            const arr = this.projects
                .map(p => {
                    if (!p.name) return '';
                    return p.name[0] ? p.name[0].toUpperCase() : '';
                })
                .filter(l => l);
            const unique = Array.from(new Set(arr));
            return unique.sort((a, b) => a.localeCompare(b));
        }
    },
    created() {
        axios.get("/json/jamie.json").then((response) => {
            this.projects = response.data
        })
    }
});
app.mount("#app")