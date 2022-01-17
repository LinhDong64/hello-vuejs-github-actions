var app=new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue, I am Linh Dong'
    }
});

var app2=new Vue ({
    el: '#app-2',
    data: {
        message: "i want to have a serious relation " + new Date().toLocaleDateString()
    }
});

var app3= new Vue({
    el: '#app-3',
    data:{
        seen: false
    }
});

var app4=new Vue({
    el:'#app-4',
    data:{
        fruits: [
            {id:1, name:"Orange"},
            {id:2, name:"Grape"},
            {id:3, name:"Apple"}
        ],
        colors:[
            {id:1, name:"Red"},
            {id:2, name:"Purple"},
            {id:3, name:"Green"}
        ]
    }
})

var app5=new Vue({
    el:'#app-5',
    data:{
        message: "Hello Vuejs"
    },
    methods:{
        reverseMessage(){
            this.message=this.message.split('').reverse().join('');
        }
    }
})

var app6=new Vue({
    el: '#app-6',
    data:{
        message: "I am learning English"
    }
})