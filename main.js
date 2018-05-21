new Vue({
  el: '#app',
  data: {
    items: [],
    imgSrc: ' ',
    imgTitle:' '  
  },
  mounted() {
    axios.get("http://5b02ff4820848e001432ca08.mockapi.io/img/img")
    .then(response => {this.items = response.data})
  },
    methods: {
    greet: function (event) {
    this.imgSrc=event.target.src
     this.imgTitle=event.target.alt    
    }
}
    
});

