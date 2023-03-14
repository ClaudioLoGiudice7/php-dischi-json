const app = Vue.createApp({
    data() {
        return {
            discList: [],
            selectedDisc: null,
        }
    },

    created() {
        axios.get("http://localhost/php-dischi-json/API/get-list.php")
            .then((response) => {
                this.discList = response.data;
            })
    },

    methods: {
        discDetails(disc) {
            this.selectedDisc = disc;
            const modal = document.querySelector(".modal");
            modal.style.display = "block";
        },
        closeModal() {
            this.selectedDisc = null;
            const modal = document.querySelector(".modal");
            modal.style.display = "none";
        }
    }
});
app.mount("#root")