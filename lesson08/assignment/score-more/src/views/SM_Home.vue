<template>
        <div class="content">
            <aside>
                <h3>Leader Boards</h3>
                <div :key="stat" v-for="stat in stats">
                    <h4>{{stat.title}}</h4>
                    <ol>
                        <li :key="player" v-for="player in stat.data"><a href="#">{{player}}</a></li>
                    </ol>
                </div>
            </aside>
            <main>
                <h3>Welcome!</h3>
                <p>Welcome to Score More, your backyard digital scoreboard.  Ejoy playing with friends and family
                    as you easily keep track of all your backyard competitions!
                </p>
                <h3>Recent Game</h3>
                <SM_score_card :score = "recent_game" :score_id = "1"></SM_score_card>
            </main>
        </div>
</template>

<script>
import SM_score_card from '../components/SM_score_card.vue'


export default {
    components: {
    SM_score_card,
},

    data () {
    return {
        recent_game: {date: "7/20/2022 5:45pm", players: {blue: ['Mark','Juan'], red: ['Jes', 'Abbey']}, points: {blue:[6,3,4,6,2,6,8], red:[4,1,5,8,3,4,6]}, final:[21,4]},
        stats: [
                {title: "Most Wins", data: ["Mark Taylor", "Juan Ceja", "Jes Kehler", "Abbey Ceja"]},
                {title: "Average Points per Round", data: ["Juan Ceja", "Mark Taylor", "Jes Kehler", "Abbey Ceja"]},
                ],
    }
    },
}
</script>