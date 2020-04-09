var app = new Vue({
    el:'#hello',
    data:{
        message : 'Welcome to vue Js'
    }
});

var app1 = new Vue({
    el:'#conditional',
    data: {
        conditional : 'Checking which is Bigger (A, B, C)',
        a:1,
        b:20,
        c:10
    }
});

var app2 = new Vue({
    el:'#toggling',
    data:{
        seen:true
    }
});

var app3 = new Vue({
    el: '#model',
    data: {
        message: ''
    }
});