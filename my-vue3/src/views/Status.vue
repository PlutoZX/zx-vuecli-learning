<template>
    <div>
        <h1>lalalalalala</h1>
        <ul>
            <li v-for="(item, index) in testlist1" :key="index">
                <span :class="{red: testlist2[index]}">啦啦啦</span>
            </li>
        </ul>
        <router-view/>
        <router-view name="item1"/>
        <router-view name="item2"/>
    </div>
</template>

<script>
    export default {
        name: "Status",
        beforeRouteEnter(to, from, next){
            if(to.query.hide === '1'){
                console.log('hide为1');
            }else {
                console.log(to);
            }
            next( vm => {
                console.log(vm);
            })
        },
        beforeRouteLeave(to, from, next){ // 离开确认
            const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
            if(answer){
                next();
            }else {
                next(false);
            }
        },

        data(){
            return {
                loading: false,
                testlist1: [1,1,0,0,1,1],
                testlist2: [],
            }
        },

        methods: {
            traverse(){
                const _this = this;
                _this.testlist1.forEach(function(item,index){
                    if(item === 1){
                        // _this.testlist2.push(true);
                        _this.testlist2.splice(index, 1, true);
                    }else {
                        // _this.testlist2.push(false)
                        _this.testlist2.splice(index, 1, false);
                    }
                })
            }
        },

        mounted(){
            this.traverse();
        }

    }
</script>

<style scoped>
    .red {
        color: red;
    }
    .green {
        color: green;
    }


</style>