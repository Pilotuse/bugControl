<template>
    <div>
        <component :is="showComponent"></component>
    </div>
</template>


<script>
import tester from '../role/Tester'
import admin from '../role/Admin'
import developer from '../role/Developer'

export default {
    data(){
        return {
            showComponent:''
        }
    },
    components:{
        tester,
        admin,
        developer
    },
    mounted(){
        this.showComponent = this.$route.params.role
    }
}
</script>