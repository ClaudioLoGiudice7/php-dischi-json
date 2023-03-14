const app = Vue.createApp({
    data() {
        return {
            discList: [],
        }
    },

    created() {
        axios.get("http://localhost/php-dischi-json/API/get-list.php")
            .then((response) => {
                this.discList = response.data;
            })
    }
});
app.mount("#root")