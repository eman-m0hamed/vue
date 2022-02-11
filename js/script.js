
new Vue ({
    el: 'section',
    data: {
        posts :[
            {id: 1},
            {id: 3},
            
        ],
        age: 21,
        UserName: 'mona',
        findLanguage: '',
        languages: [
            'Html',
            'Css',
            'Sass',
            'JavaScript',
            'Java',
            'Jquery',
            'MySql',
            'Php',
        ],
        hour:   0,
        minute: 0,
        second: 0,
    },
    methods: {
        printName: function(){
            console.log('name');
            return this.UserName + ' ' + this.age ; 
            //  return `${this.name} ${this.age} `; concatination way
        }
    },
    computed: {
        calcAge: function(){
            console.log('age');
            return this.age *2;
        },
        // reverse Name
        reverseName: function(){
            console.log('reverse');
            return this.UserName.split('').reverse().join('');
        },
        // filter Language
        filterLanguage: function(){
            var filtering = new RegExp(this.findLanguage, 'i');
            return this.languages.filter(function(el){
                return el.match(filtering);
            });
        },
        // validate UserName
        validateUserName: function(){

            if(!this.UserName)
                return "UserName Can't be Empty";
            else if (! isNaN(this.UserName))
                return "UserName can't be numbers only";
            else if (this.UserName.length<8)
                return 'UserName is Too Short';
            else 
                return `Hello ${this.UserName} everything is good`;


        },

    },
    watch: {
        hour: function(v){
            this.minute = v*60;
            console.log('hour run');
        },
        minute: function(v){
            this.hour = v/60;
            this.second = v*60;
            console.log('minute run');
        },
        second: function(v){
            this.minute = v/60;
            console.log('second run');
        },
    },
    },
 
    Vue.component('AppCount', {
        data: function(){
            return {
                name: 'eman',
                count: 0
            }
        },
        props:['id'],
        template : '<p @click="count++"> hello {{name}} {{count}} times your id is {{ id }}</p>'
}))

object = '{"username": "eman", "age": 60}';