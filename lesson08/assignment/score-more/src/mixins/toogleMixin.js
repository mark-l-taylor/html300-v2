// Basic information on Mixins: https://v2.vuejs.org/v2/guide/mixins.html?redirect=true
// Example that provides more detail on how to setup a mixin: https://blog.bitsrc.io/understanding-mixins-in-vue-js-bdcf9e02a7c1


//  Toggle Mixin
//  This mixin can be used as a general toggle method.  Adds a toogle attribute and the method that changes the state.
export default {
    data() {
        return {
            toggle: false
        }
    },
    

    methods: {
        // Toggle a show state, used for the image border
        toggleShow() {
            this.toggle = !this.toggle;
        }
    }
}