new Vue({
    el: '#app',
    data: {
        items: [],
        error: ' ',
        imgSrc: ' ',
        imgTitle: ' ',
        nextImg: '',
        nextTitle: '',
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
            this.nextImg = this.items[index + 1].url
            this.id = index
        },
        next: function () {
            this.id=this.id+1
            document.querySelector('.modal-body img').src= this.items[this.id].url 
            console.log(this.id)
        }
    }

});
