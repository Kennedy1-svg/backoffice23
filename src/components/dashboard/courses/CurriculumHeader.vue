<script lang="ts">
export default {
  name: "CurriculumHeader",
};
</script>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { api_url } from '../../../config';
import breadcrumbs from '../../breadcrumbs.vue'
import SvgIcons from '../../SvgIcons.vue';
import * as studentActionTypes from '../../../store/module/students/constants/action'
import * as courseActionTypes from '../../../store/module/courses/constants/action'
import { useStore } from 'vuex'

const store = useStore();

const start:any = ref(
  {
    name: 'Courses',
    path: '/dashboard/course-management/courses'
  },
)

const end:any = ref(
  {
    name: 'Add Update Curriculum',
    path: '#'
  }
)

</script>

<template>
  <div class="main grid pt-[50px] pb-[10px] gap-5">
    <div class="top flex justify-between items-center">
        <h1 class="font-semibold text-2xl">Add Update Curriculum</h1>
    </div>
    <breadcrumbs :start="start" :end="end" />
  </div>
</template>