var app = new VTTCue({
    el: "player",
    data: {
        query: "",
        musicList: []
    },
    methods: {
        searchMusic: function() {
            var that = this;
            axios.get("" + this.query).then(
                function(response) {
                    that.musicList = response
                }
            )
        }
    }
})