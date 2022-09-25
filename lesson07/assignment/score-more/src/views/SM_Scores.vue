<!-- Scores

    Create a v-for loop to create each of the score cards.  The score card is a seperate vue template.  The "score" object is passed
    as an input into the SM_score_card template.

    Scoress are stored in a list of score objects.  Each score object contains the "date", "players", "points", and "final score".

-->

<template>
     <div class="single_content">
            <h3 class="text-center">Scores</h3>
            <div class="container">
                <div :key="score.date" v-for="score in scores" class="row d-flex justify-content-center">
                    <SM_score_card :score = "score"></SM_score_card>
                </div>
            </div>
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
        scores:[
            {date: "7/20/2022 5:45pm", players: {blue: ['Mark','Juan'], red: ['Jes', 'Abbey']}, points: {blue:[6,3,4,6,2,6,8], red:[4,1,5,8,3,4,6]}, final:[21,4]},
            {date: "7/20/2022 5:45pm", players: {blue: ['Mark','Juan'], red: ['Jes', 'Abbey']}, points: {blue:[6,3,4,6,2,6,8], red:[4,1,5,8,3,4,6]}, final:[8,4]},
            {date: "7/20/2022 5:45pm", players: {blue: ['Mark','Juan'], red: ['Jes', 'Abbey']}, points: {blue:[6,3,4,6,2,6,8], red:[4,1,5,8,3,4,6]}, final:[8,4]},
            {date: "7/20/2022 5:45pm", players: {blue: ['Mark','Juan'], red: ['Jes', 'Abbey']}, points: {blue:[6,3,4,6,2,6,8], red:[4,1,5,8,3,4,6]}, final:[8,4]},
        ],
    }
    },
}
</script>