<template>
    <nav class="navbar navbar-dark navbar-expand-lg">
        <!-- <a class="navbar-nav" href="#">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarNav" class="collapse	navbar-collapse">
            <ul	class="navbar-nav">
                <li class="nav-item active"><router-link to="/" class="nav-link">Home</router-link></li>
                <li	class="nav-item active dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Games</a>
                    <div class="dropdown-menu">
                        <router-link class="dropdown-item" to="#">Cornhole</router-link>
                        <router-link class="dropdown-item" to="#">Horseshoes</router-link>
                    </div>
                </li>
                <li	class="nav-item active"><router-link class="nav-link" to="/players">Players</router-link></li>
                <li	class="nav-item active"><router-link class="nav-link" to="/scores">Scores</router-link></li>
                <li	class="nav-item active"><router-link class="nav-link" to="/rules">Rules</router-link></li>
                <!-- <li	class="nav-item active"><router-link class="nav-link" to="/howto">How To</router-link></li> -->
            </ul>
        </div>
    </nav>
</template>
