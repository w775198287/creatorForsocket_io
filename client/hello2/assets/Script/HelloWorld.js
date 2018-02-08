cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        btnstart: {
            default: null,
            type: cc.Button
        },
        // defaults, set visually when attaching this script to the Canvas
        text: '11111'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;

        this.btnstart.node.on('click', this.OnStartBtn, this);

        var socket = io.connect("127.0.0.1:4747");
        socket.on('hello', (msg) => {
            console.log("hello...");
            this.label.string = msg;
        })
    },

    // called every frame
    update: function (dt) {

    },

    OnStartBtn: function(event){
    }
});
