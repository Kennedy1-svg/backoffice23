<script lang="ts">

export default {
    name: 'User',
}
</script>

<script setup lang="ts">
import UserHeader from '../../../components/dashboard/users/UserHeader.vue';
import UserList from '../../../components/dashboard/users/UserList.vue';
import alert from '../../../components/alerts.vue';
import SvgIcons from '../../../components/SvgIcons.vue';
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore();

const alertState:any = computed(() => store.getters.getUserAlertStatus.value)
const alertText:any = computed(() => store.getters.getUserAlertText.value)
// const batchAlertState:any = computed(() => store.getters.getBatchAlertStatus.value)
// const batchAlertText:any = computed(() => store.getters.getBatchAlertText.value)

const status:any = computed(() => {
    let answer:any
    if (alertText.value.includes('successfully')) {
        answer = true
    } else {
        answer = false
    }
    return answer
})
</script>

<template>
    <div class="main mx-9 overflow-hidden">
        <alert :class="[alertState ? '' : 'hidden']"  class="fixed z-60 top-40 bg-white p-2 right-0" name="result">
            <template #icon>
                <p v-if="status" class="bg-green-accent rounded-full border p-2">
                    <SvgIcons class="text-white" name="tick" />
                </p>
                <p v-else class="">
                    <SvgIcons class="text-red" name="exclamation" />
                </p>
            </template>
            <template #info>
                <p class="text-sm">
                    {{ alertText }}
                </p>
            </template>
            <template #button></template>
        </alert>
        <UserHeader />
        <UserList />
    </div>
</template>
