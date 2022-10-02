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
                    <div v-for="player in players" :key='player.name' class="player_card container card m-5">
                        <div class="card-body">
                        <h5 class="card-title">{{player.name}}</h5>
                        <img :src="player.img" class="img-fluid card-img-top" :alt="player.name">
                        <a href="#" class="card-link">Stats</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>



<script>
export default {
    data () {
    return {
        // Players are stored in a list of player objects.  Each player object contains the "name" and "img"
        players:[
            {name: 'Abbey Ceja', img: require('../assets/players/player4.png')},
            {name: 'Juan Ceja', img: require('../assets/players/player1.png')},
            {name: 'Jes Kehler', img: require('../assets/players/player3.png')},
            {name: 'Mark Taylor', img: require('../assets/players/player2.png')},
        ],
    }
    },
}
</script>

