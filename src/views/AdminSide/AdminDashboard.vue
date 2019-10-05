<template>
  <v-app>
    <AdminToolBar/>
  </v-app>
</template>

<script>
import AdminToolBar from '@/components/AdminToolBar'
export default {
    name: 'AdminDashboard',
    components: {
        AdminToolBar,
    }
    
};
</script>