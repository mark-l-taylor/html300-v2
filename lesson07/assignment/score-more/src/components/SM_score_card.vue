<!-- Score Card

    A score card component takes in a score object and renders the scorecard

    Score object example:
        {date: "7/20/2022 5:45pm", players: {blue: ['Mark','Juan'], red: ['Jes', 'Abbey']}, points: {blue:[6,3,4,6,2,6,8], red:[4,1,5,8,3,4,6]}, final:[8,4]},

        date - String of datastamp and time
        players - object containing blue and red team players as a list of strings
        points - object containing blue and red scores for each round,  scores are a list of integers
        final - list of the blue and red final score, in that order.
-->

<template>
    <div class="game col-xl-3 col-lg-6 col-sm-12 col-12">
        <div class="summary">
            <p class="timestamp">{{score.date}}</p>
            <p class="score-headerB">BLUE</p>
            <p class="score-headerR">RED</p>
            <div class="scores-blue">{{score.final[0]}}</div>
            <div class="scores-red">{{score.final[1]}}</div>
            <img class="weather" src="" alt="">
        </div>
        <table>
            <tr>
                <th>Round</th>
                <!-- Set the players from the score object -->
                <th>{{score.players.blue[0]}}</th>
                <th>{{score.players.blue[1]}}</th>
                <th>Points</th>
                <th>{{score.players.red[0]}}</th>
                <th>{{score.players.red[1]}}</th>
                <th>Points</th>
            </tr>
            <!-- Populate the score data from score object -->
            <tr :key="index" v-for="(points, index) in score.points.blue">
                <td>{{index + 1}}</td>
                <td>{{ ((index + 1) % 2 != 0) ? score.points.blue[index] : '-' }}</td>
                <td>{{ ((index + 1) % 2 == 0) ? score.points.blue[index] : '-' }}</td>
                <td>{{ (score.points.blue[index] > score.points.red[index]) ? score.points.blue[index]-score.points.red[index] : 0}}</td>
                <td>{{ ((index + 1) % 2 != 0) ? score.points.red[index] : '-' }}</td>
                <td>{{ ((index + 1) % 2 == 0) ? score.points.red[index] : '-' }}</td>
                <td>{{ (score.points.red[index] > score.points.blue[index]) ? score.points.red[index]-score.points.blue[index] : 0}}</td>
            </tr>
        </table>
    </div>
</template>


<script>
   export default {
    props: ['score']   
   }
</script>