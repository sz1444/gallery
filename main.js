new Vue({
    el: '#app',
    data: {
        items: [],
        error: ' ',
        imgSrc: ' ',
        imgTitle: ' ',
        id: ''
    },
    mounted() {
        axios.get("https://5b02ff4820848e001432ca08.mockapi.io/img/img")
            .then(response => {
                this.items = response.data
            })
    },
    methods: {
        greet: function (index) {
            this.imgSrc = this.items[index].url
            this.imgTitle = this.items[index].name
            this.id = index
        },
    
        next: function () {
            if (this.id == this.items.length - 1) {
                this.id = -1;
            }
            this.id += 1
            this.imgSrc = this.items[this.id].url
            this.imgTitle = this.items[this.id].name
        },

        back: function () {
            if (this.id == 0) {
                this.id = 9;
            }
            this.id -= 1
            this.imgSrc = this.items[this.id].url
            this.imgTitle = this.items[this.id].name
        }
    }

});
