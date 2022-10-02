<!-- Players

    Create a v-for loop to create each of the player cards.

    Players are stored in a list of player objects.  Each player object contains the "name" and "img".
    THe img uses a method require() which seems to allow the path to be properly set in the html
        https://forum.vuejs.org/t/how-to-place-image-address-in-array-and-use-that-array-index-in-source/119048

-->
<template>
    <div class="single_content">
            <h3 class="text-center">Players</h3>
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div v-for="player in players" :key='player.name'>
                        <SM_player_card :player="player.name" :img="player.img">
                            <!-- Using a slot method to populate the player name into template -->
                            <template v-slot:header>{{player.name}}</template>

                            <!-- If no data is passed into the template slot than the template uses a default value
                            <template v-slot:header></template> -->
                        </SM_player_card>
                    
                    </div>
                </div>
            </div>
    </div>
</template>



<script>
import SM_player_card from '@/components/SM_player_card.vue';

export default {
    
    components: {
    SM_player_card,
    },
    
    data () {
    return {
        // Players are stored in a list of player objects.  Each player object contains the "name" and "img"

        // Add the require() around the images inorder for them to be imported, this is a workaround since the alternate approach
        // in  the SM_player_card did not work
        players:[
            {name: 'Abbey Ceja', img: require("../assets/players/player4.png")},
            {name: 'Juan Ceja', img: require('../assets/players/player1.png')},
            {name: 'Jes Kehler', img: require('../assets/players/player3.png')},
            {name: 'Mark Taylor', img: require('../assets/players/player2.png')},
            {name: 'Bob', img: require('../assets/players/player2.png')},
        ],
        // players:[
        //     {name: 'Abbey Ceja', img: '../assets/players/player4.png'},
        //     {name: 'Juan Ceja', img: '../assets/players/player1.png'},
        //     {name: 'Jes Kehler', img: '../assets/players/player3.png'},
        //     {name: 'Mark Taylor', img: '../assets/players/player2.png'},
        //     {name: 'Bob', img: '../assets/players/player2.png'},

        // ],
    }
    },
}
</script>

