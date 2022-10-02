<!-- Player Card

    Defines a player card template.

    Note:  Uses a mixin to toggle the border when an image is clicked.  Also uses a slot for defining the header.


-->
<template>
    <div class="player_card container card m-5">
        <div class="card-body">
        <!-- Using a slot method to define the header -->
        <h5 class="card-title"><slot name="header">Player Name</slot></h5>
        <!-- Img has already been imported with require from the parent and passed into the template -->
        <!-- Using mixin to handle border toogling -->
        <img  v-if="toggle" @click="toggleShow" :src='img' class="img-fluid card-img-top border" :alt="alt">
        <img  v-else @click="toggleShow" :src='img' class="img-fluid card-img-top" :alt="alt">

        <!-- Try to use a method to handle importing the img from a string -->
        <!-- <img :src='getImgUrl(img)' class="img-fluid card-img-top" :alt="alt"> -->
        
        <!-- Try to directly use the require on the img string -->
        <!-- <img :src="require(img)" class="img-fluid card-img-top" :alt="alt"> -->

        <a href="#" class="card-link">Stats</a>
        </div>
    </div>
</template>



<script>
import toogleMixin from '../mixins/toogleMixin'

export default {
    mixins: [toogleMixin],

    
    // Inputs with validation checks
    props: {
        player: {
            type: String,
            required: true,
        },
        img: {
            required: true,
        },
        alt: {
            type: String,
            default: "Player profile"
        },
    },
}
</script>