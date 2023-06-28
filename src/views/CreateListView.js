import ListView from "@/views/ListView.vue";
import EventBus from "@/utils/bus";
import {h} from 'vue'
//High Order Component
export default function createListView(name) {
    //재사용 인스턴스, 컴포넌트 옵션들
    return {
        name: name,
        render(){
            return h(ListView);
        },
        created() {
            EventBus.$emit('start:spinner')
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                  EventBus.$emit('end:spinner')
                })
                .catch(error => console.error(error))
        }

    }
};