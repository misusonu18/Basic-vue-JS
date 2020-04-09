var app = new Vue({
    el: "#hello",
    data:{
        message: "Welcome to vue Js"
    }
});

var app1 = new Vue({
    el: "#conditional",
    data: {
        conditional: "Checking which is Bigger (A, B, C)",
        a: 1,
        b: 20,
        c: 10
    }
});

var app2 = new Vue({
    el: "#toggling",
    data:{
        seen: true
    }
});

var app3 = new Vue({
    el: "#model",
    data: {
        message: ""
    }
});

var app4 = new Vue({
    el: "#check",
    data: {
        check: "" 
    }
});

var app5 = new Vue({
    el: "#calculator",
    data: {
        selected: "",
        number1: "",
        number2: "",
        total: ""
    },

    methods: {
        calculator: function() {
            if (this.selected == "addition") {
                let a = parseInt(this.number1);
                let b = parseInt(this.number2);
                this.total = a + b;
            }
            if (this.selected == "subtration") {
                let a = parseInt(this.number1);
                let b = parseInt(this.number2);
                this.total = a - b;
            }
            if (this.selected == "multiply") {
                let a = parseInt(this.number1);
                let b = parseInt(this.number2);
                this.total = a * b;
            }
            if (this.selected == "divide") {
                let a = parseInt(this.number1);
                let b = parseInt(this.number2);
                this.total = a / b;
            }
        }
    }
});