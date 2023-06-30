import EventBus from "@/utils/bus";
//재사용할 컴포넌트 옵션
export default {
    //컴포넌트가 완료된 이후 동작
    mounted() {
        EventBus.$emit("end:spinner")
    }
}