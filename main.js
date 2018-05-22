var app = new Vue({
    el: '#app',
    data() {
return {
        items: [],
        error: ' ',
        imgSrc: ' ',
        imgTitle: ' ',
        id: ''
    }
   },

    methods: {
        greet (index) {
            this.imgSrc = this.items[index].url
            this.imgTitle = this.items[index].name
            this.id = index
        },
        fetchData () {
            let self = this
            const myRequest = new Request('https://5b02ff4820848e001432ca08.mockapi.io/img/img')

            fetch(myRequest)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    self.items = data
                }).catch(error => {
                    console.log(error);
                });
        },

        next () {
            if (this.id == this.items.length - 1) {
                this.id = -1;
            }
            this.id += 1
            this.imgSrc = this.items[this.id].url
            this.imgTitle = this.items[this.id].name
        },

        back () {
            if (this.id == 0) {
                this.id = 9;
            }
            this.id -= 1
            this.imgSrc = this.items[this.id].url
            this.imgTitle = this.items[this.id].name
        }
    },
    mounted() {
        this.fetchData()


    }

});
