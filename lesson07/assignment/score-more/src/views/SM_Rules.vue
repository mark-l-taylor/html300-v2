<!-- Rules

    Create a v-for loop to create all of the rules.

    Since the rules involve different html structure a seperate vue template has been created into the /components.
    The list of rules are stored in the data() rules list.  Each object defines the Game and contents.  The contents are
    the name of the imported components.

    In the v-for the component is inserted using the :is binding which inputs the "rule.content" value.

-->

<template>
    <div class="single_content">
        <h3 class="text-center">Rules</h3>
        <div class="accordion single_content" id="accordionRules">
            <div :key="index" v-for="(rule,index) in rules" class="card">
                    <div class="card-header" :id="rule.name">
                    <h3 class="mb-0">
                        <button class="btn btn-primary" type="button" data-toggle="collapse" :data-target="'#collapse' + index">
                            {{rule.game}}
                        </button>
                    </h3>
                    </div>
                
                    <div :id="'collapse' + index" class="collapse" data-parent="#accordionRules">
                    <div class="card-body">
                        <component :is="rule.content"></component>
                    </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
// Import the rules components, each rule can have a more detailed html template
import SM_cornhole_rules from '../components/SM_cornhole_rules.vue'
import SM_horseshoe_rules from '../components/SM_horseshoe_rules.vue'

export default {
    // Define the available components
    components: {
    SM_cornhole_rules,
    SM_horseshoe_rules,
    },
    
    data () {
    return {
        // Define the list of rule objects.  Each object defines a name and component name to be inserted into html
        rules:[
            {game: 'Cornhole', content: "SM_cornhole_rules"},
            {game: 'Horsheshoes', content: "SM_horseshoe_rules"},
        ],
    }
    },
}
</script>